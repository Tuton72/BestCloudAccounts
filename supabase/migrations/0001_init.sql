-- BestCloudAccounts — initial catalog schema
-- Categories -> Products -> Variants (+ specifications/features/images/faqs) -> Orders
-- Run against a Supabase/Postgres project with the Supabase CLI:
--   supabase db push
-- or apply directly with psql.

create extension if not exists "pgcrypto";

-- =========================================================
-- categories
-- =========================================================
create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text,
  parent_id uuid references categories (id) on delete set null,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists categories_parent_id_idx on categories (parent_id);

-- =========================================================
-- products
-- =========================================================
create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references categories (id) on delete restrict,
  name text not null,
  slug text not null unique,
  short_description text,
  description text,
  base_price numeric(12, 2) not null,
  compare_at_price numeric(12, 2),
  image text,
  status text not null default 'active' check (status in ('draft', 'active', 'archived')),
  featured boolean not null default false,
  badge text,
  sort_order integer not null default 0,
  seo_title text,
  seo_description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists products_category_id_idx on products (category_id);
create index if not exists products_status_idx on products (status);
create index if not exists products_featured_idx on products (featured);

-- =========================================================
-- product_variants
-- =========================================================
create table if not exists product_variants (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references products (id) on delete cascade,
  name text not null,
  slug text not null,
  price numeric(12, 2) not null,
  compare_at_price numeric(12, 2),
  sku text,
  specifications jsonb not null default '{}'::jsonb,
  stock_status text not null default 'in_stock' check (stock_status in ('in_stock', 'limited', 'out_of_stock')),
  is_default boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (product_id, slug)
);

create index if not exists product_variants_product_id_idx on product_variants (product_id);

-- =========================================================
-- product_images
-- =========================================================
create table if not exists product_images (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references products (id) on delete cascade,
  url text not null,
  alt text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create index if not exists product_images_product_id_idx on product_images (product_id);

-- =========================================================
-- product_features (e.g. "Premium cloud access", "Secure delivery")
-- =========================================================
create table if not exists product_features (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references products (id) on delete cascade,
  label text not null,
  icon text,
  sort_order integer not null default 0
);

create index if not exists product_features_product_id_idx on product_features (product_id);

-- =========================================================
-- product_specifications (base specs shown regardless of variant)
-- =========================================================
create table if not exists product_specifications (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references products (id) on delete cascade,
  label text not null,
  value text not null,
  sort_order integer not null default 0
);

create index if not exists product_specifications_product_id_idx on product_specifications (product_id);

-- =========================================================
-- product_faqs
-- =========================================================
create table if not exists product_faqs (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references products (id) on delete cascade,
  question text not null,
  answer text not null,
  sort_order integer not null default 0
);

create index if not exists product_faqs_product_id_idx on product_faqs (product_id);

-- =========================================================
-- orders
-- Order records are created server-side only, after the product/variant
-- are re-resolved from the database — never trust a client-submitted price.
-- =========================================================
create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  order_number text not null unique,
  product_id uuid not null references products (id) on delete restrict,
  variant_id uuid not null references product_variants (id) on delete restrict,
  product_name text not null,
  variant_name text not null,
  price numeric(12, 2) not null,
  customer_contact text,
  status text not null default 'pending' check (status in ('pending', 'confirmed', 'fulfilled', 'cancelled')),
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists orders_product_id_idx on orders (product_id);
create index if not exists orders_status_idx on orders (status);

-- =========================================================
-- updated_at triggers
-- =========================================================
create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger categories_set_updated_at before update on categories
  for each row execute function set_updated_at();
create trigger products_set_updated_at before update on products
  for each row execute function set_updated_at();
create trigger product_variants_set_updated_at before update on product_variants
  for each row execute function set_updated_at();
create trigger orders_set_updated_at before update on orders
  for each row execute function set_updated_at();

-- =========================================================
-- Row Level Security
-- Public (anon) read access to published catalog data.
-- Orders are never readable/writable by anon; only via service role
-- (e.g. a server-side route handler using the service role key).
-- =========================================================
alter table categories enable row level security;
alter table products enable row level security;
alter table product_variants enable row level security;
alter table product_images enable row level security;
alter table product_features enable row level security;
alter table product_specifications enable row level security;
alter table product_faqs enable row level security;
alter table orders enable row level security;

create policy "Public read categories" on categories
  for select using (true);

create policy "Public read active products" on products
  for select using (status = 'active');

create policy "Public read variants of active products" on product_variants
  for select using (
    exists (
      select 1 from products
      where products.id = product_variants.product_id
        and products.status = 'active'
    )
  );

create policy "Public read images of active products" on product_images
  for select using (
    exists (
      select 1 from products
      where products.id = product_images.product_id
        and products.status = 'active'
    )
  );

create policy "Public read features of active products" on product_features
  for select using (
    exists (
      select 1 from products
      where products.id = product_features.product_id
        and products.status = 'active'
    )
  );

create policy "Public read specifications of active products" on product_specifications
  for select using (
    exists (
      select 1 from products
      where products.id = product_specifications.product_id
        and products.status = 'active'
    )
  );

create policy "Public read faqs of active products" on product_faqs
  for select using (
    exists (
      select 1 from products
      where products.id = product_faqs.product_id
        and products.status = 'active'
    )
  );

-- No policies are created for `orders`: with RLS enabled and zero policies,
-- PostgREST/anon access is denied by default. Orders must be created and
-- read using the service role key from a trusted server context only.

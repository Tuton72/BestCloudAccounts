-- Adds product_slug — the URL-facing slug every product page now lives at
-- (/{product_slug}, see src/app/[productSlug]/page.tsx), generated once
-- from each product's name and then left stable. See src/lib/slug.ts for
-- the equivalent TypeScript generator used by the fixture-backed catalog
-- this project currently runs on (no live Supabase project is connected
-- yet — see supabase/seed.sql, which now inserts product_slug directly
-- for every seed row using this same logic).
--
-- This migration additionally backfills product_slug for any product rows
-- that predate this column (the realistic case for an already-populated
-- products table) before making the column mandatory.

alter table products
  add column if not exists product_slug text;

-- Backfill: derive a URL-safe slug from name — preserve capitalization and
-- numbers, spaces -> "-", strip anything else, collapse/trim "-" — then
-- disambiguate duplicates deterministically (ordered by sort_order, then
-- id) by appending "-2", "-3", etc. Duplicate-title products are a real
-- case here: the "buy-aws-accounts" category intentionally mirrors 19
-- product names already used by aws-accounts / aws-credit-accounts /
-- aws-ai-accounts (see the comment in supabase/seed.sql), so a title-only
-- slug would collide for those without this step.
with base as (
  select
    id,
    regexp_replace(
      regexp_replace(
        regexp_replace(trim(name), '[^[:alnum:]\s-]+', '', 'g'),
        '\s+', '-', 'g'
      ),
      '-+', '-', 'g'
    ) as slug_base,
    row_number() over (
      partition by regexp_replace(
        regexp_replace(
          regexp_replace(trim(name), '[^[:alnum:]\s-]+', '', 'g'),
          '\s+', '-', 'g'
        ),
        '-+', '-', 'g'
      )
      order by sort_order, id
    ) as rn
  from products
  where product_slug is null
)
update products
set product_slug = case
  when base.rn = 1 then trim(both '-' from base.slug_base)
  else trim(both '-' from base.slug_base) || '-' || base.rn
end
from base
where products.id = base.id;

alter table products
  alter column product_slug set not null;

alter table products
  add constraint products_product_slug_key unique (product_slug);

create index if not exists products_product_slug_idx on products (product_slug);

-- Note on future inserts: this project has no live Supabase connection or
-- admin write path yet, so there is no INSERT trigger here. Once real
-- product creation exists (admin UI or API), generate product_slug at
-- insert time in application code (mirroring src/lib/slug.ts's
-- slugifyProductTitle, plus the same collision-suffix rule), or add a
-- BEFORE INSERT trigger that does the same — either way, never
-- regenerate product_slug for an existing row on a later title edit.

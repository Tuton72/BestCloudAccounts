-- Adds the cloud provider name to products (e.g. "AWS", "Google Cloud",
-- "Hetzner"). Needed once the catalog spans more than one provider —
-- previously every product implicitly belonged to AWS.
--
-- Existing rows default to 'AWS' so this is a safe, additive migration.

alter table products
  add column if not exists provider text not null default 'AWS';

create index if not exists products_provider_idx on products (provider);

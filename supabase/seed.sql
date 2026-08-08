-- BestCloudAccounts — seed data
-- Matches the exact products, variants, specifications and prices provided
-- by the business. No specs, variants, or numbers are invented.
--
-- Run after 0001_init.sql, e.g.:
--   supabase db reset   (applies migrations then this file)
-- or
--   psql "$DATABASE_URL" -f supabase/seed.sql

-- =========================================================
-- categories
-- =========================================================
insert into categories (id, name, slug, description, sort_order) values
  ('a0000000-0000-4000-8000-000000000004', 'Cloud Accounts', 'cloud-accounts', 'Accounts across major cloud providers beyond AWS — one marketplace, multiple providers.', 0),
  ('a0000000-0000-4000-8000-000000000001', 'AWS Accounts', 'aws-accounts', 'Ready-to-use AWS accounts across a range of compute tiers.', 1),
  ('a0000000-0000-4000-8000-000000000002', 'AWS AI Accounts', 'aws-ai-accounts', 'AWS accounts pre-configured for AI/LLM workloads.', 2),
  ('a0000000-0000-4000-8000-000000000003', 'AWS Credit Accounts', 'aws-credit-accounts', 'AWS accounts pre-loaded with promotional credit.', 3),
  ('a0000000-0000-4000-8000-000000000005', 'Amazon AWS', 'buy-aws-accounts', 'AWS compute, credit, and AI-ready accounts, listed together as their own Amazon AWS collection.', 4)
on conflict (id) do nothing;

-- =========================================================
-- AWS Accounts (category a...0001)
-- =========================================================
insert into products (id, category_id, provider, name, slug, short_description, base_price, status, featured, badge, sort_order) values
  ('b0000000-0000-4000-8000-000000000001', 'a0000000-0000-4000-8000-000000000001', 'AWS', 'Buy AWS 512vCPU Account', '512-vcpu', 'High-capacity AWS account for large, demanding workloads.', 290.00, 'active', true, 'Popular', 1),
  ('b0000000-0000-4000-8000-000000000002', 'a0000000-0000-4000-8000-000000000001', 'AWS', 'Buy AWS 256vCPU Account', '256-vcpu', 'High-capacity AWS account for heavy compute workloads.', 180.00, 'active', true, null, 2),
  ('b0000000-0000-4000-8000-000000000003', 'a0000000-0000-4000-8000-000000000001', 'AWS', 'Buy AWS 128 vCPU Account', '128-vcpu', 'Mid-to-high tier AWS account for scaling workloads.', 110.00, 'active', false, null, 3),
  ('b0000000-0000-4000-8000-000000000004', 'a0000000-0000-4000-8000-000000000001', 'AWS', 'Buy AWS 64 vCPU Account', '64-vcpu', 'Balanced AWS account for general-purpose workloads.', 70.00, 'active', false, null, 4),
  ('b0000000-0000-4000-8000-000000000005', 'a0000000-0000-4000-8000-000000000001', 'AWS', 'Buy AWS 32 vCPU Account', '32-vcpu', 'AWS account available in multiple configuration tiers.', 38.00, 'active', true, 'Multiple Configurations', 5),
  ('b0000000-0000-4000-8000-000000000006', 'a0000000-0000-4000-8000-000000000001', 'AWS', 'Buy AWS 8 vCPU Account', '8-vcpu', 'Entry-level AWS account available in multiple configuration tiers.', 20.00, 'active', false, 'Multiple Configurations', 6),
  ('b0000000-0000-4000-8000-000000000007', 'a0000000-0000-4000-8000-000000000001', 'AWS', 'Buy AWS Free Trial Account', 'free-trial', 'Free trial AWS account to evaluate before purchasing.', 15.00, 'active', false, null, 7)
on conflict (id) do nothing;

insert into product_variants (id, product_id, name, slug, price, compare_at_price, stock_status, is_default, sort_order) values
  ('e0000000-0000-4000-8000-000000000001', 'b0000000-0000-4000-8000-000000000001', '512 vCPU', '512-vcpu', 290.00, null, 'in_stock', true, 1),
  ('e0000000-0000-4000-8000-000000000002', 'b0000000-0000-4000-8000-000000000002', '256 vCPU', '256-vcpu', 180.00, null, 'in_stock', true, 1),
  ('e0000000-0000-4000-8000-000000000003', 'b0000000-0000-4000-8000-000000000003', '128 vCPU', '128-vcpu', 110.00, null, 'in_stock', true, 1),
  ('e0000000-0000-4000-8000-000000000004', 'b0000000-0000-4000-8000-000000000004', '64 vCPU', '64-vcpu', 70.00, null, 'in_stock', true, 1),
  ('e0000000-0000-4000-8000-000000000005', 'b0000000-0000-4000-8000-000000000005', '32 vCPU', '32-vcpu', 38.00, 420.00, 'in_stock', true, 1),
  ('e0000000-0000-4000-8000-000000000006', 'b0000000-0000-4000-8000-000000000006', '8 vCPU', '8-vcpu', 20.00, 890.00, 'in_stock', true, 1),
  ('e0000000-0000-4000-8000-000000000007', 'b0000000-0000-4000-8000-000000000007', 'Free Trial', 'free-trial', 15.00, null, 'in_stock', true, 1)
on conflict (id) do nothing;

insert into product_specifications (product_id, label, value, sort_order) values
  ('b0000000-0000-4000-8000-000000000001', 'Compute', '512 vCPU', 1),
  ('b0000000-0000-4000-8000-000000000002', 'Compute', '256 vCPU', 1),
  ('b0000000-0000-4000-8000-000000000003', 'Compute', '128 vCPU', 1),
  ('b0000000-0000-4000-8000-000000000004', 'Compute', '64 vCPU', 1),
  ('b0000000-0000-4000-8000-000000000005', 'Compute', '32 vCPU', 1),
  ('b0000000-0000-4000-8000-000000000005', 'Price Range', '$38 – $420', 2),
  ('b0000000-0000-4000-8000-000000000006', 'Compute', '8 vCPU', 1),
  ('b0000000-0000-4000-8000-000000000006', 'Price Range', '$20 – $890', 2),
  ('b0000000-0000-4000-8000-000000000007', 'Access', 'Free Trial', 1);

-- =========================================================
-- AWS AI Accounts (category a...0002)
-- =========================================================
insert into products (id, category_id, provider, name, slug, short_description, base_price, status, featured, badge, sort_order) values
  ('c0000000-0000-4000-8000-000000000001', 'a0000000-0000-4000-8000-000000000002', 'AWS', 'Buy AWS Account — 10 RPM | 32 vCPU | Gmail | N. Virginia | 2FA + API', '10-rpm-32-vcpu', 'AWS AI account with 10 RPM, 32 vCPU, Gmail login, and N. Virginia region.', 70.00, 'active', true, null, 1),
  ('c0000000-0000-4000-8000-000000000002', 'a0000000-0000-4000-8000-000000000002', 'AWS', 'Buy AWS Account — 50 RPM | Kiro Working | 32 vCPU | Gmail | 2FA + API', '50-rpm-kiro-32-vcpu', 'AWS AI account with 50 RPM, Kiro-working status, 32 vCPU, and Gmail login.', 220.00, 'active', true, null, 2),
  ('c0000000-0000-4000-8000-000000000003', 'a0000000-0000-4000-8000-000000000002', 'AWS', 'Buy AWS Account — 10K RPM | 4.6 Support | 5 vCPU | Multi-Year Aged', '10k-rpm-5-vcpu-aged', 'Multi-year aged AWS AI account with 10K RPM, 5 vCPU, and 4.6-rated support.', 220.00, 'active', false, 'Aged', 3),
  ('c0000000-0000-4000-8000-000000000004', 'a0000000-0000-4000-8000-000000000002', 'AWS', 'Buy AWS Account — 10K RPM | 4.6 Support | 96 vCPU | Multi-Year Aged', '10k-rpm-96-vcpu-aged', 'Multi-year aged AWS AI account with 10K RPM, 96 vCPU, and 4.6-rated support.', 350.00, 'active', false, 'Aged', 4),
  ('c0000000-0000-4000-8000-000000000005', 'a0000000-0000-4000-8000-000000000002', 'AWS', 'Buy AWS Account — 10K RPM | 4.6 Support | 128 vCPU | Multi-Year Aged', '10k-rpm-128-vcpu-aged', 'Multi-year aged AWS AI account with 10K RPM, 128 vCPU, and 4.6-rated support.', 850.00, 'active', false, 'Aged', 5),
  ('c0000000-0000-4000-8000-000000000006', 'a0000000-0000-4000-8000-000000000002', 'AWS', 'Buy AWS Account — 10K RPM | 4.6 Support | 256 vCPU | Multi-Year Aged', '10k-rpm-256-vcpu-aged', 'Multi-year aged AWS AI account with 10K RPM, 256 vCPU, and 4.6-rated support.', 900.00, 'active', true, 'Aged', 6)
on conflict (id) do nothing;

insert into product_variants (id, product_id, name, slug, price, stock_status, is_default, sort_order) values
  ('f0000000-0000-4000-8000-000000000001', 'c0000000-0000-4000-8000-000000000001', 'Standard', 'standard', 70.00, 'in_stock', true, 1),
  ('f0000000-0000-4000-8000-000000000002', 'c0000000-0000-4000-8000-000000000002', 'Standard', 'standard', 220.00, 'in_stock', true, 1),
  ('f0000000-0000-4000-8000-000000000003', 'c0000000-0000-4000-8000-000000000003', 'Standard', 'standard', 220.00, 'in_stock', true, 1),
  ('f0000000-0000-4000-8000-000000000004', 'c0000000-0000-4000-8000-000000000004', 'Standard', 'standard', 350.00, 'in_stock', true, 1),
  ('f0000000-0000-4000-8000-000000000005', 'c0000000-0000-4000-8000-000000000005', 'Standard', 'standard', 850.00, 'in_stock', true, 1),
  ('f0000000-0000-4000-8000-000000000006', 'c0000000-0000-4000-8000-000000000006', 'Standard', 'standard', 900.00, 'in_stock', true, 1)
on conflict (id) do nothing;

insert into product_specifications (product_id, label, value, sort_order) values
  ('c0000000-0000-4000-8000-000000000001', 'Rate Limit', '10 RPM', 1),
  ('c0000000-0000-4000-8000-000000000001', 'Compute', '32 vCPU', 2),
  ('c0000000-0000-4000-8000-000000000001', 'Email', 'Gmail', 3),
  ('c0000000-0000-4000-8000-000000000001', 'Region', 'N. Virginia', 4),
  ('c0000000-0000-4000-8000-000000000001', 'Security', '2FA', 5),
  ('c0000000-0000-4000-8000-000000000001', 'Access', 'API', 6),

  ('c0000000-0000-4000-8000-000000000002', 'Rate Limit', '50 RPM', 1),
  ('c0000000-0000-4000-8000-000000000002', 'Status', 'Kiro Working', 2),
  ('c0000000-0000-4000-8000-000000000002', 'Compute', '32 vCPU', 3),
  ('c0000000-0000-4000-8000-000000000002', 'Email', 'Gmail', 4),
  ('c0000000-0000-4000-8000-000000000002', 'Security', '2FA', 5),
  ('c0000000-0000-4000-8000-000000000002', 'Access', 'API', 6),

  ('c0000000-0000-4000-8000-000000000003', 'Rate Limit', '10K RPM', 1),
  ('c0000000-0000-4000-8000-000000000003', 'Support', '4.6 Support', 2),
  ('c0000000-0000-4000-8000-000000000003', 'Compute', '5 vCPU', 3),
  ('c0000000-0000-4000-8000-000000000003', 'Account Age', 'Multi-Year Aged', 4),

  ('c0000000-0000-4000-8000-000000000004', 'Rate Limit', '10K RPM', 1),
  ('c0000000-0000-4000-8000-000000000004', 'Support', '4.6 Support', 2),
  ('c0000000-0000-4000-8000-000000000004', 'Compute', '96 vCPU', 3),
  ('c0000000-0000-4000-8000-000000000004', 'Account Age', 'Multi-Year Aged', 4),

  ('c0000000-0000-4000-8000-000000000005', 'Rate Limit', '10K RPM', 1),
  ('c0000000-0000-4000-8000-000000000005', 'Support', '4.6 Support', 2),
  ('c0000000-0000-4000-8000-000000000005', 'Compute', '128 vCPU', 3),
  ('c0000000-0000-4000-8000-000000000005', 'Account Age', 'Multi-Year Aged', 4),

  ('c0000000-0000-4000-8000-000000000006', 'Rate Limit', '10K RPM', 1),
  ('c0000000-0000-4000-8000-000000000006', 'Support', '4.6 Support', 2),
  ('c0000000-0000-4000-8000-000000000006', 'Compute', '256 vCPU', 3),
  ('c0000000-0000-4000-8000-000000000006', 'Account Age', 'Multi-Year Aged', 4);

-- =========================================================
-- AWS Credit Accounts (category a...0003)
-- =========================================================
insert into products (id, category_id, provider, name, slug, short_description, base_price, status, featured, sort_order) values
  ('d0000000-0000-4000-8000-000000000001', 'a0000000-0000-4000-8000-000000000003', 'AWS', 'Buy AWS 1k Credit Account', '1k-credit', 'AWS account pre-loaded with $1,000 of promotional credit.', 240.00, 'active', true, 1),
  ('d0000000-0000-4000-8000-000000000002', 'a0000000-0000-4000-8000-000000000003', 'AWS', 'Buy AWS 5k Credit Account', '5k-credit', 'AWS account pre-loaded with $5,000 of promotional credit.', 1199.00, 'active', true, 2),
  ('d0000000-0000-4000-8000-000000000003', 'a0000000-0000-4000-8000-000000000003', 'AWS', 'Buy AWS 10k Credit Account', '10k-credit', 'AWS account pre-loaded with $10,000 of promotional credit.', 2399.00, 'active', true, 3),
  ('d0000000-0000-4000-8000-000000000004', 'a0000000-0000-4000-8000-000000000003', 'AWS', 'Buy AWS 25k Credit Account', '25k-credit', 'AWS account pre-loaded with $25,000 of promotional credit.', 4999.00, 'active', false, 4),
  ('d0000000-0000-4000-8000-000000000005', 'a0000000-0000-4000-8000-000000000003', 'AWS', 'Buy AWS 50k Credit Account', '50k-credit', 'AWS account pre-loaded with $50,000 of promotional credit.', 7499.00, 'active', false, 5),
  ('d0000000-0000-4000-8000-000000000006', 'a0000000-0000-4000-8000-000000000003', 'AWS', 'Buy AWS 100k Credit Account', '100k-credit', 'AWS account pre-loaded with $100,000 of promotional credit.', 12999.00, 'active', false, 6)
on conflict (id) do nothing;

insert into product_variants (id, product_id, name, slug, price, stock_status, is_default, sort_order) values
  ('10000000-0000-4000-8000-000000000001', 'd0000000-0000-4000-8000-000000000001', '1,000 Credit', '1000-credit', 240.00, 'in_stock', true, 1),
  ('10000000-0000-4000-8000-000000000002', 'd0000000-0000-4000-8000-000000000002', '5,000 Credit', '5000-credit', 1199.00, 'in_stock', true, 1),
  ('10000000-0000-4000-8000-000000000003', 'd0000000-0000-4000-8000-000000000003', '10,000 Credit', '10000-credit', 2399.00, 'in_stock', true, 1),
  ('10000000-0000-4000-8000-000000000004', 'd0000000-0000-4000-8000-000000000004', '25,000 Credit', '25000-credit', 4999.00, 'in_stock', true, 1),
  ('10000000-0000-4000-8000-000000000005', 'd0000000-0000-4000-8000-000000000005', '50,000 Credit', '50000-credit', 7499.00, 'in_stock', true, 1),
  ('10000000-0000-4000-8000-000000000006', 'd0000000-0000-4000-8000-000000000006', '100,000 Credit', '100000-credit', 12999.00, 'in_stock', true, 1)
on conflict (id) do nothing;

insert into product_specifications (product_id, label, value, sort_order) values
  ('d0000000-0000-4000-8000-000000000001', 'Credit Amount', '1,000 Credit', 1),
  ('d0000000-0000-4000-8000-000000000002', 'Credit Amount', '5,000 Credit', 1),
  ('d0000000-0000-4000-8000-000000000003', 'Credit Amount', '10,000 Credit', 1),
  ('d0000000-0000-4000-8000-000000000004', 'Credit Amount', '25,000 Credit', 1),
  ('d0000000-0000-4000-8000-000000000005', 'Credit Amount', '50,000 Credit', 1),
  ('d0000000-0000-4000-8000-000000000006', 'Credit Amount', '100,000 Credit', 1);

-- =========================================================
-- Cloud Accounts (category a...0004)
-- "Multiple Variants" products are seeded with one placeholder "Standard"
-- variant holding the given price range — no individual variant breakdown
-- was provided, so none is invented. Real variants can be added later via
-- the same product_variants table.
-- =========================================================
insert into products (id, category_id, provider, name, slug, short_description, base_price, status, featured, badge, sort_order) values
  ('20000000-0000-4000-8000-000000000001', 'a0000000-0000-4000-8000-000000000004', 'OVHCloud', 'Buy OVHCloud Account', 'ovhcloud-account', 'OVHCloud account available in multiple configuration tiers.', 35.00, 'active', false, 'Multiple Variants', 1),
  ('20000000-0000-4000-8000-000000000002', 'a0000000-0000-4000-8000-000000000004', 'IBM Cloud', 'Buy IBM Cloud Account', 'ibm-cloud-account', 'Standard IBM Cloud account, ready to use.', 40.00, 'active', false, null, 2),
  ('20000000-0000-4000-8000-000000000003', 'a0000000-0000-4000-8000-000000000004', 'iCloud', 'Buy Verified iCloud Account', 'verified-icloud-account', 'Verified iCloud account available in multiple configuration tiers.', 25.00, 'active', false, 'Multiple Variants', 3),
  ('20000000-0000-4000-8000-000000000004', 'a0000000-0000-4000-8000-000000000004', 'Alibaba Cloud', 'Buy Alibaba Cloud Account', 'alibaba-cloud-account', 'Alibaba Cloud account available in multiple configuration tiers.', 60.00, 'active', false, 'Multiple Variants', 4),
  ('20000000-0000-4000-8000-000000000005', 'a0000000-0000-4000-8000-000000000004', 'UpCloud', 'Buy UpCloud Account', 'upcloud-account', 'Standard UpCloud account, ready to use.', 30.00, 'active', false, null, 5),
  ('20000000-0000-4000-8000-000000000006', 'a0000000-0000-4000-8000-000000000004', 'Kamatera', 'Buy Kamatera Account', 'kamatera-account', 'Kamatera account available in multiple configuration tiers.', 25.00, 'active', false, 'Multiple Variants', 6),
  ('20000000-0000-4000-8000-000000000007', 'a0000000-0000-4000-8000-000000000004', 'Oracle Cloud', 'Buy Oracle Cloud Account', 'oracle-cloud-account', 'Oracle Cloud account available in multiple configuration tiers.', 40.00, 'active', false, 'Multiple Variants', 7),
  ('20000000-0000-4000-8000-000000000008', 'a0000000-0000-4000-8000-000000000004', 'Google Cloud', 'Buy Google Cloud Account', 'google-cloud-account', 'Google Cloud account available in multiple configuration tiers.', 80.00, 'active', true, 'Multiple Variants', 8),
  ('20000000-0000-4000-8000-000000000009', 'a0000000-0000-4000-8000-000000000004', 'Linode', 'Buy Linode Account', 'linode-account', 'Linode account available in multiple configuration tiers.', 25.00, 'active', false, 'Multiple Variants', 9),
  ('20000000-0000-4000-8000-000000000010', 'a0000000-0000-4000-8000-000000000004', 'Vultr', 'Buy Vultr Account', 'vultr-account', 'Vultr account available in multiple configuration tiers.', 30.00, 'active', true, 'Multiple Variants', 10),
  ('20000000-0000-4000-8000-000000000011', 'a0000000-0000-4000-8000-000000000004', 'Hetzner', 'Buy Hetzner Account', 'hetzner-account', 'Hetzner account available in multiple configuration tiers.', 40.00, 'active', false, 'Multiple Variants', 11),
  ('20000000-0000-4000-8000-000000000012', 'a0000000-0000-4000-8000-000000000004', 'DigitalOcean', 'Buy Digital Ocean Account', 'digital-ocean-account', 'DigitalOcean account available in multiple configuration tiers.', 20.00, 'active', true, 'Multiple Variants', 12),
  ('20000000-0000-4000-8000-000000000013', 'a0000000-0000-4000-8000-000000000004', 'Azure', 'Buy Azure Accounts', 'azure-accounts', 'Azure account available in multiple configuration tiers.', 20.00, 'active', true, 'Multiple Variants', 13)
on conflict (id) do nothing;

insert into product_variants (id, product_id, name, slug, price, compare_at_price, stock_status, is_default, sort_order) values
  ('30000000-0000-4000-8000-000000000001', '20000000-0000-4000-8000-000000000001', 'Standard', 'standard', 35.00, 999.00, 'in_stock', true, 1),
  ('30000000-0000-4000-8000-000000000002', '20000000-0000-4000-8000-000000000002', 'Standard', 'standard', 40.00, null, 'in_stock', true, 1),
  ('30000000-0000-4000-8000-000000000003', '20000000-0000-4000-8000-000000000003', 'Standard', 'standard', 25.00, 399.00, 'in_stock', true, 1),
  ('30000000-0000-4000-8000-000000000004', '20000000-0000-4000-8000-000000000004', 'Standard', 'standard', 60.00, 99.00, 'in_stock', true, 1),
  ('30000000-0000-4000-8000-000000000005', '20000000-0000-4000-8000-000000000005', 'Standard', 'standard', 30.00, null, 'in_stock', true, 1),
  ('30000000-0000-4000-8000-000000000006', '20000000-0000-4000-8000-000000000006', 'Standard', 'standard', 25.00, 40.00, 'in_stock', true, 1),
  ('30000000-0000-4000-8000-000000000007', '20000000-0000-4000-8000-000000000007', 'Standard', 'standard', 40.00, 130.00, 'in_stock', true, 1),
  ('30000000-0000-4000-8000-000000000008', '20000000-0000-4000-8000-000000000008', 'Standard', 'standard', 80.00, 1499.00, 'in_stock', true, 1),
  ('30000000-0000-4000-8000-000000000009', '20000000-0000-4000-8000-000000000009', 'Standard', 'standard', 25.00, 130.00, 'in_stock', true, 1),
  ('30000000-0000-4000-8000-000000000010', '20000000-0000-4000-8000-000000000010', 'Standard', 'standard', 30.00, 99.00, 'in_stock', true, 1),
  ('30000000-0000-4000-8000-000000000011', '20000000-0000-4000-8000-000000000011', 'Standard', 'standard', 40.00, 999.00, 'in_stock', true, 1),
  ('30000000-0000-4000-8000-000000000012', '20000000-0000-4000-8000-000000000012', 'Standard', 'standard', 20.00, 299.00, 'in_stock', true, 1),
  ('30000000-0000-4000-8000-000000000013', '20000000-0000-4000-8000-000000000013', 'Standard', 'standard', 20.00, 40.00, 'in_stock', true, 1)
on conflict (id) do nothing;

insert into product_specifications (product_id, label, value, sort_order) values
  ('20000000-0000-4000-8000-000000000001', 'Price Range', '$35 – $999', 1),
  ('20000000-0000-4000-8000-000000000003', 'Price Range', '$25 – $399', 1),
  ('20000000-0000-4000-8000-000000000004', 'Price Range', '$60 – $99', 1),
  ('20000000-0000-4000-8000-000000000006', 'Price Range', '$25 – $40', 1),
  ('20000000-0000-4000-8000-000000000007', 'Price Range', '$40 – $130', 1),
  ('20000000-0000-4000-8000-000000000008', 'Price Range', '$80 – $1,499', 1),
  ('20000000-0000-4000-8000-000000000009', 'Price Range', '$25 – $130', 1),
  ('20000000-0000-4000-8000-000000000010', 'Price Range', '$30 – $99', 1),
  ('20000000-0000-4000-8000-000000000011', 'Price Range', '$40 – $999', 1),
  ('20000000-0000-4000-8000-000000000012', 'Price Range', '$20 – $299', 1),
  ('20000000-0000-4000-8000-000000000013', 'Price Range', '$20 – $40', 1);

-- =========================================================
-- Amazon AWS (category a...0005)
-- Same 19 products/prices/variants as AWS Accounts, AWS AI Accounts, and
-- AWS Credit Accounts above, re-hosted under their own category/route
-- (/buy-aws-accounts). Nothing here is new data — see buy-aws-accounts.ts.
-- =========================================================
insert into products (id, category_id, provider, name, slug, short_description, base_price, status, featured, badge, sort_order) values
  ('40000000-0000-4000-8000-000000000001', 'a0000000-0000-4000-8000-000000000005', 'Amazon AWS', 'Buy AWS 512vCPU Account', '512-vcpu-account', 'High-capacity Amazon AWS account for large, demanding workloads.', 290.00, 'active', true, null, 1),
  ('40000000-0000-4000-8000-000000000002', 'a0000000-0000-4000-8000-000000000005', 'Amazon AWS', 'Buy AWS 256vCPU Account', '256-vcpu-account', 'High-capacity Amazon AWS account for heavy compute workloads.', 180.00, 'active', true, null, 2),
  ('40000000-0000-4000-8000-000000000003', 'a0000000-0000-4000-8000-000000000005', 'Amazon AWS', 'Buy AWS 128 vCPU Account', '128-vcpu-account', 'Mid-to-high tier Amazon AWS account for scaling workloads.', 110.00, 'active', false, null, 3),
  ('40000000-0000-4000-8000-000000000004', 'a0000000-0000-4000-8000-000000000005', 'Amazon AWS', 'Buy AWS 64 vCPU Account', '64-vcpu-account', 'Balanced Amazon AWS account for general-purpose workloads.', 70.00, 'active', false, null, 4),
  ('40000000-0000-4000-8000-000000000005', 'a0000000-0000-4000-8000-000000000005', 'Amazon AWS', 'Buy AWS 32 vCPU Account', '32-vcpu-account', 'Amazon AWS account available in multiple configuration tiers.', 38.00, 'active', true, 'Multiple Variants', 5),
  ('40000000-0000-4000-8000-000000000006', 'a0000000-0000-4000-8000-000000000005', 'Amazon AWS', 'Buy AWS 8 vCPU Account', '8-vcpu-account', 'Entry-level Amazon AWS account available in multiple configuration tiers.', 20.00, 'active', false, 'Multiple Variants', 6),
  ('40000000-0000-4000-8000-000000000007', 'a0000000-0000-4000-8000-000000000005', 'Amazon AWS', 'Buy AWS Free Trial Account', 'free-trial-account', 'Free trial Amazon AWS account to evaluate before purchasing.', 15.00, 'active', false, null, 7),
  ('40000000-0000-4000-8000-000000000008', 'a0000000-0000-4000-8000-000000000005', 'Amazon AWS', 'Buy AWS 1k Credit Account', '1k-credit-account', 'Amazon AWS account pre-loaded with 1,000 of promotional credit.', 240.00, 'active', true, null, 8),
  ('40000000-0000-4000-8000-000000000009', 'a0000000-0000-4000-8000-000000000005', 'Amazon AWS', 'Buy AWS 5k Credit Account', '5k-credit-account', 'Amazon AWS account pre-loaded with 5,000 of promotional credit.', 1199.00, 'active', true, null, 9),
  ('40000000-0000-4000-8000-000000000010', 'a0000000-0000-4000-8000-000000000005', 'Amazon AWS', 'Buy AWS 10k Credit Account', '10k-credit-account', 'Amazon AWS account pre-loaded with 10,000 of promotional credit.', 2399.00, 'active', true, null, 10),
  ('40000000-0000-4000-8000-000000000011', 'a0000000-0000-4000-8000-000000000005', 'Amazon AWS', 'Buy AWS 25k Credit Account', '25k-credit-account', 'Amazon AWS account pre-loaded with 25,000 of promotional credit.', 4999.00, 'active', false, null, 11),
  ('40000000-0000-4000-8000-000000000012', 'a0000000-0000-4000-8000-000000000005', 'Amazon AWS', 'Buy AWS 50k Credit Account', '50k-credit-account', 'Amazon AWS account pre-loaded with 50,000 of promotional credit.', 7499.00, 'active', false, null, 12),
  ('40000000-0000-4000-8000-000000000013', 'a0000000-0000-4000-8000-000000000005', 'Amazon AWS', 'Buy AWS 100k Credit Account', '100k-credit-account', 'Amazon AWS account pre-loaded with 100,000 of promotional credit.', 12999.00, 'active', false, null, 13),
  ('40000000-0000-4000-8000-000000000014', 'a0000000-0000-4000-8000-000000000005', 'Amazon AWS', 'Buy AWS Account — 10 RPM | 32 vCPU | Gmail | N. Virginia | 2FA + API', '10-rpm-32-vcpu-account', 'Amazon AWS account with 10 RPM, 32 vCPU, Gmail login, and N. Virginia region.', 70.00, 'active', true, null, 14),
  ('40000000-0000-4000-8000-000000000015', 'a0000000-0000-4000-8000-000000000005', 'Amazon AWS', 'Buy AWS Account — 50 RPM | Kiro Working | 32 vCPU | Gmail | 2FA + API', '50-rpm-kiro-32-vcpu-account', 'Amazon AWS account with 50 RPM, Kiro-working status, 32 vCPU, and Gmail login.', 220.00, 'active', true, null, 15),
  ('40000000-0000-4000-8000-000000000016', 'a0000000-0000-4000-8000-000000000005', 'Amazon AWS', 'Buy AWS Account — 10K RPM | 4.6 Support | 5 vCPU | Multi-Year Aged', '10k-rpm-5-vcpu-aged-account', 'Multi-year aged Amazon AWS account with 10K RPM, 5 vCPU, and 4.6-rated support.', 220.00, 'active', false, 'Aged', 16),
  ('40000000-0000-4000-8000-000000000017', 'a0000000-0000-4000-8000-000000000005', 'Amazon AWS', 'Buy AWS Account — 10K RPM | 4.6 Support | 96 vCPU | Multi-Year Aged', '10k-rpm-96-vcpu-aged-account', 'Multi-year aged Amazon AWS account with 10K RPM, 96 vCPU, and 4.6-rated support.', 350.00, 'active', false, 'Aged', 17),
  ('40000000-0000-4000-8000-000000000018', 'a0000000-0000-4000-8000-000000000005', 'Amazon AWS', 'Buy AWS Account — 10K RPM | 4.6 Support | 128 vCPU | Multi-Year Aged', '10k-rpm-128-vcpu-aged-account', 'Multi-year aged Amazon AWS account with 10K RPM, 128 vCPU, and 4.6-rated support.', 850.00, 'active', false, 'Aged', 18),
  ('40000000-0000-4000-8000-000000000019', 'a0000000-0000-4000-8000-000000000005', 'Amazon AWS', 'Buy AWS Account — 10K RPM | 4.6 Support | 256 vCPU | Multi-Year Aged', '10k-rpm-256-vcpu-aged-account', 'Multi-year aged Amazon AWS account with 10K RPM, 256 vCPU, and 4.6-rated support.', 900.00, 'active', true, 'Aged', 19)
on conflict (id) do nothing;

insert into product_variants (id, product_id, name, slug, price, compare_at_price, stock_status, is_default, sort_order) values
  ('50000000-0000-4000-8000-000000000001', '40000000-0000-4000-8000-000000000001', '512 vCPU', '512-vcpu-account', 290.00, null, 'in_stock', true, 1),
  ('50000000-0000-4000-8000-000000000002', '40000000-0000-4000-8000-000000000002', '256 vCPU', '256-vcpu-account', 180.00, null, 'in_stock', true, 1),
  ('50000000-0000-4000-8000-000000000003', '40000000-0000-4000-8000-000000000003', '128 vCPU', '128-vcpu-account', 110.00, null, 'in_stock', true, 1),
  ('50000000-0000-4000-8000-000000000004', '40000000-0000-4000-8000-000000000004', '64 vCPU', '64-vcpu-account', 70.00, null, 'in_stock', true, 1),
  ('50000000-0000-4000-8000-000000000005', '40000000-0000-4000-8000-000000000005', '32 vCPU', '32-vcpu-account', 38.00, 420.00, 'in_stock', true, 1),
  ('50000000-0000-4000-8000-000000000006', '40000000-0000-4000-8000-000000000006', '8 vCPU', '8-vcpu-account', 20.00, 890.00, 'in_stock', true, 1),
  ('50000000-0000-4000-8000-000000000007', '40000000-0000-4000-8000-000000000007', 'Free Trial', 'free-trial-account', 15.00, null, 'in_stock', true, 1),
  ('50000000-0000-4000-8000-000000000008', '40000000-0000-4000-8000-000000000008', '1,000 Credit', '1k-credit-account', 240.00, null, 'in_stock', true, 1),
  ('50000000-0000-4000-8000-000000000009', '40000000-0000-4000-8000-000000000009', '5,000 Credit', '5k-credit-account', 1199.00, null, 'in_stock', true, 1),
  ('50000000-0000-4000-8000-000000000010', '40000000-0000-4000-8000-000000000010', '10,000 Credit', '10k-credit-account', 2399.00, null, 'in_stock', true, 1),
  ('50000000-0000-4000-8000-000000000011', '40000000-0000-4000-8000-000000000011', '25,000 Credit', '25k-credit-account', 4999.00, null, 'in_stock', true, 1),
  ('50000000-0000-4000-8000-000000000012', '40000000-0000-4000-8000-000000000012', '50,000 Credit', '50k-credit-account', 7499.00, null, 'in_stock', true, 1),
  ('50000000-0000-4000-8000-000000000013', '40000000-0000-4000-8000-000000000013', '100,000 Credit', '100k-credit-account', 12999.00, null, 'in_stock', true, 1),
  ('50000000-0000-4000-8000-000000000014', '40000000-0000-4000-8000-000000000014', 'Standard', '10-rpm-32-vcpu-account', 70.00, null, 'in_stock', true, 1),
  ('50000000-0000-4000-8000-000000000015', '40000000-0000-4000-8000-000000000015', 'Standard', '50-rpm-kiro-32-vcpu-account', 220.00, null, 'in_stock', true, 1),
  ('50000000-0000-4000-8000-000000000016', '40000000-0000-4000-8000-000000000016', 'Standard', '10k-rpm-5-vcpu-aged-account', 220.00, null, 'in_stock', true, 1),
  ('50000000-0000-4000-8000-000000000017', '40000000-0000-4000-8000-000000000017', 'Standard', '10k-rpm-96-vcpu-aged-account', 350.00, null, 'in_stock', true, 1),
  ('50000000-0000-4000-8000-000000000018', '40000000-0000-4000-8000-000000000018', 'Standard', '10k-rpm-128-vcpu-aged-account', 850.00, null, 'in_stock', true, 1),
  ('50000000-0000-4000-8000-000000000019', '40000000-0000-4000-8000-000000000019', 'Standard', '10k-rpm-256-vcpu-aged-account', 900.00, null, 'in_stock', true, 1)
on conflict (id) do nothing;

insert into product_specifications (product_id, label, value, sort_order) values
  ('40000000-0000-4000-8000-000000000001', 'Compute', '512 vCPU', 1),
  ('40000000-0000-4000-8000-000000000002', 'Compute', '256 vCPU', 1),
  ('40000000-0000-4000-8000-000000000003', 'Compute', '128 vCPU', 1),
  ('40000000-0000-4000-8000-000000000004', 'Compute', '64 vCPU', 1),
  ('40000000-0000-4000-8000-000000000005', 'Compute', '32 vCPU', 1),
  ('40000000-0000-4000-8000-000000000005', 'Price Range', '$38 – $420', 2),
  ('40000000-0000-4000-8000-000000000006', 'Compute', '8 vCPU', 1),
  ('40000000-0000-4000-8000-000000000006', 'Price Range', '$20 – $890', 2),
  ('40000000-0000-4000-8000-000000000007', 'Access', 'Free Trial', 1),
  ('40000000-0000-4000-8000-000000000008', 'Credit Amount', '1,000 Credit', 1),
  ('40000000-0000-4000-8000-000000000009', 'Credit Amount', '5,000 Credit', 1),
  ('40000000-0000-4000-8000-000000000010', 'Credit Amount', '10,000 Credit', 1),
  ('40000000-0000-4000-8000-000000000011', 'Credit Amount', '25,000 Credit', 1),
  ('40000000-0000-4000-8000-000000000012', 'Credit Amount', '50,000 Credit', 1),
  ('40000000-0000-4000-8000-000000000013', 'Credit Amount', '100,000 Credit', 1),
  ('40000000-0000-4000-8000-000000000014', 'Rate Limit', '10 RPM', 1),
  ('40000000-0000-4000-8000-000000000014', 'Compute', '32 vCPU', 2),
  ('40000000-0000-4000-8000-000000000014', 'Email', 'Gmail', 3),
  ('40000000-0000-4000-8000-000000000014', 'Region', 'N. Virginia', 4),
  ('40000000-0000-4000-8000-000000000014', 'Security', '2FA', 5),
  ('40000000-0000-4000-8000-000000000014', 'Access', 'API', 6),
  ('40000000-0000-4000-8000-000000000015', 'Rate Limit', '50 RPM', 1),
  ('40000000-0000-4000-8000-000000000015', 'Status', 'Kiro Working', 2),
  ('40000000-0000-4000-8000-000000000015', 'Compute', '32 vCPU', 3),
  ('40000000-0000-4000-8000-000000000015', 'Email', 'Gmail', 4),
  ('40000000-0000-4000-8000-000000000015', 'Security', '2FA', 5),
  ('40000000-0000-4000-8000-000000000015', 'Access', 'API', 6),
  ('40000000-0000-4000-8000-000000000016', 'Rate Limit', '10K RPM', 1),
  ('40000000-0000-4000-8000-000000000016', 'Support', '4.6 Support', 2),
  ('40000000-0000-4000-8000-000000000016', 'Compute', '5 vCPU', 3),
  ('40000000-0000-4000-8000-000000000016', 'Account Age', 'Multi-Year Aged', 4),
  ('40000000-0000-4000-8000-000000000017', 'Rate Limit', '10K RPM', 1),
  ('40000000-0000-4000-8000-000000000017', 'Support', '4.6 Support', 2),
  ('40000000-0000-4000-8000-000000000017', 'Compute', '96 vCPU', 3),
  ('40000000-0000-4000-8000-000000000017', 'Account Age', 'Multi-Year Aged', 4),
  ('40000000-0000-4000-8000-000000000018', 'Rate Limit', '10K RPM', 1),
  ('40000000-0000-4000-8000-000000000018', 'Support', '4.6 Support', 2),
  ('40000000-0000-4000-8000-000000000018', 'Compute', '128 vCPU', 3),
  ('40000000-0000-4000-8000-000000000018', 'Account Age', 'Multi-Year Aged', 4),
  ('40000000-0000-4000-8000-000000000019', 'Rate Limit', '10K RPM', 1),
  ('40000000-0000-4000-8000-000000000019', 'Support', '4.6 Support', 2),
  ('40000000-0000-4000-8000-000000000019', 'Compute', '256 vCPU', 3),
  ('40000000-0000-4000-8000-000000000019', 'Account Age', 'Multi-Year Aged', 4);

-- =========================================================
-- Shared product features (applied to every seeded product)
-- =========================================================
insert into product_features (product_id, label, icon, sort_order)
select id, f.label, f.icon, f.sort_order
from products
cross join (
  values
    ('Premium cloud access', 'shield-check', 1),
    ('Professional support', 'headset', 2),
    ('Secure delivery', 'lock', 3)
) as f(label, icon, sort_order);

-- =========================================================
-- Shared product FAQs (applied to every seeded product)
-- Content can be overridden per-product later via the admin.
-- =========================================================
insert into product_faqs (product_id, question, answer, sort_order)
select id, q.question, q.answer, q.sort_order
from products
cross join (
  values
    ('What is included with the product?', 'You receive the account configuration described on this page, matching the variant you select at checkout.', 1),
    ('How does ordering work?', 'Select a variant, confirm the price, and place your order through our order flow. We will follow up with next steps.', 2),
    ('How quickly is the product delivered?', 'Delivery timing is confirmed with you after your order is placed.', 3),
    ('Can I choose a specific variant?', 'Yes — use the variant selector on this page to choose the configuration that fits your needs before ordering.', 4),
    ('What happens if I need support?', 'Our support team is available to help with questions before and after your order.', 5)
) as q(question, answer, sort_order);

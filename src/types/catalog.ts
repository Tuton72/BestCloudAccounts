/**
 * Domain types for the product catalog.
 *
 * These are the shapes the UI consumes — decoupled from raw Supabase row
 * shapes on purpose. The data-access layer (`src/lib/data/*`) is
 * responsible for mapping DB rows onto these types, so swapping the
 * fixture-backed implementation for live Supabase queries later never
 * touches a single UI component.
 */

export type StockStatus = "in_stock" | "limited" | "out_of_stock";
export type ProductStatus = "draft" | "active" | "archived";

/** Category slugs double as the product route prefix, e.g. /aws-accounts/[slug]. */
export type CategorySlug =
  | "cloud-accounts"
  | "aws-accounts"
  | "aws-ai-accounts"
  | "aws-credit-accounts"
  | "buy-aws-accounts";

/** Top-level category slugs that group other categories under a shared nav/breadcrumb parent (e.g. AWS). */
export type CategoryGroupSlug = "aws";

export interface Category {
  id: string;
  name: string;
  slug: CategorySlug;
  description: string | null;
  parentId: string | null;
  sortOrder: number;
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductFeature {
  label: string;
  /** lucide-react icon name */
  icon?: string;
}

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface ProductVariant {
  id: string;
  productId: string;
  name: string;
  slug: string;
  price: number;
  /**
   * Optional comparison price. For single-configuration products this is a
   * conventional "was / now" strikethrough price. For products spanning
   * multiple configurations where no individual variant breakdown was
   * provided, its presence instead signals a price range — see
   * `Product.compareAtPrice` — and the UI renders "$min – $max".
   */
  compareAtPrice?: number | null;
  sku?: string | null;
  specifications: Record<string, string>;
  stockStatus: StockStatus;
  isDefault: boolean;
  sortOrder: number;
}

export interface Product {
  id: string;
  categoryId: string;
  categorySlug: CategorySlug;
  /** Cloud provider this account is for, e.g. "AWS", "Google Cloud", "Hetzner". Shown as a badge on cards/detail pages. */
  provider: string;
  name: string;
  slug: string;
  /**
   * URL-facing slug generated once from `name` (see slugifyProductTitle /
   * fixtures/index.ts) and stored on the product — every product link and
   * the product-detail route (`/[productSlug]`) use this, never `slug` +
   * `categorySlug` directly. Stable once assigned: this codebase only ever
   * (re)computes it when a product has none yet, matching the "don't
   * reslug an already-indexed product" rule.
   */
  productSlug: string;
  shortDescription: string | null;
  description?: string | null;
  basePrice: number;
  compareAtPrice?: number | null;
  image?: string | null;
  status: ProductStatus;
  featured: boolean;
  badge?: string | null;
  sortOrder: number;
  seoTitle?: string | null;
  seoDescription?: string | null;
  specifications: ProductSpecification[];
  features: ProductFeature[];
  faqs: ProductFaq[];
  variants: ProductVariant[];
}

/**
 * Shape of a product fixture *before* `productSlug` is attached. The
 * per-category fixture files (src/lib/data/fixtures/*.ts) build products in
 * this shape; `fixtures/index.ts` is the single place that computes and
 * attaches `productSlug` for every one of them, so no fixture file has to
 * do it by hand and no product can be added without automatically getting
 * one.
 */
export type ProductSeed = Omit<Product, "productSlug">;

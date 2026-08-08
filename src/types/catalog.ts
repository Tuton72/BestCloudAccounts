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
  | "aws-accounts"
  | "aws-ai-accounts"
  | "aws-credit-accounts";

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
   * conventional "was / now" strikethrough price. For products explicitly
   * marked as spanning multiple configurations (badge === "Multiple
   * Configurations") it instead represents the top of the advertised price
   * range, since no individual variant breakdown was provided.
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
  name: string;
  slug: string;
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

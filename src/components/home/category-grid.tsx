import { CategoryCard } from "@/components/home/category-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Category, Product } from "@/types/catalog";

interface CategoryGridProps {
  categories: Category[];
  products: Product[];
  eyebrow?: string;
  heading?: string;
  subheading?: string;
}

export function CategoryGrid({
  categories,
  products,
  eyebrow = "Browse by Category",
  heading = "Find the Right Account Type",
  subheading = "Cloud accounts across major providers, plus a focused AWS lineup — each category covers a different way to run in the cloud.",
}: CategoryGridProps) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow={eyebrow} heading={heading} subheading={subheading} className="mb-12" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              productCount={products.filter((p) => p.categorySlug === category.slug).length}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

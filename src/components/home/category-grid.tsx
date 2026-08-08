import { CategoryCard } from "@/components/home/category-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Category, Product } from "@/types/catalog";

interface CategoryGridProps {
  categories: Category[];
  products: Product[];
}

export function CategoryGrid({ categories, products }: CategoryGridProps) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Browse by Category"
          heading="Find the Right Account Type"
          subheading="Three focused product lines, each covering a different way to run on AWS."
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
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

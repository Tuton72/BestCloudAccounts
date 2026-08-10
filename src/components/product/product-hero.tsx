import Image from "next/image";
import { AbstractCloudVisual } from "@/components/shared/abstract-cloud-visual";
import { cn } from "@/lib/utils";

interface ProductHeroProps {
  /**
   * Optional product image path (e.g. "/images/products/azure-account.webp").
   * Reuses `Product.image` from the catalog type — no separate media system.
   * When not set (the case for every product today, since no image assets
   * exist yet in the project), falls back to the existing abstract
   * illustration with no visual change.
   */
  image?: string | null;
  /** Accessible label for the image. Ignored when `image` is not set. */
  imageAlt?: string;
}

/** Same frame every product-hero visual (illustration or real image) shares, so swapping one for the other never changes the panel's size/proportions. */
const FRAME_CLASSES = "aspect-square w-full sm:aspect-[4/3] lg:aspect-square";

/** Large visual for the left column of the product detail page. */
export function ProductHero({ image, imageAlt }: ProductHeroProps) {
  if (image) {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-border bg-canvas-secondary",
          FRAME_CLASSES,
        )}
      >
        <Image
          src={image}
          alt={imageAlt ?? ""}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain p-6"
        />
      </div>
    );
  }

  return <AbstractCloudVisual className={FRAME_CLASSES} />;
}

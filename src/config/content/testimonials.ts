export interface Testimonial {
  quote: string;
  name: string;
  role?: string;
}

/**
 * Testimonials are data-driven and intentionally empty until real customer
 * testimonials are provided — the Testimonials section renders nothing
 * (rather than placeholder/fake quotes) while this stays empty.
 */
export const testimonials: Testimonial[] = [];

import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps<T extends ElementType> {
  as?: T;
  className?: string;
  children: React.ReactNode;
}

/** Consistent max-width + horizontal padding wrapper used by every section. */
export function Container<T extends ElementType = "div">({
  as,
  className,
  children,
  ...rest
}: ContainerProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ContainerProps<T>>) {
  const Component = as ?? "div";
  return (
    <Component
      className={cn("mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8", className)}
      {...rest}
    >
      {children}
    </Component>
  );
}

import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost";
type Size = "md" | "sm";
type Shared = { variant?: Variant; size?: Size };

const sizes = {
  md: { box: "h-12 text-sm [--cut:7px]", pad: "px-7", inner: "[--cut:6.41px]" },
  sm: { box: "h-9 text-xs [--cut:5px]", pad: "px-4", inner: "[--cut:4.41px]" },
};

const base =
  "clip-tech group relative inline-flex cursor-pointer items-center justify-center font-display font-semibold tracking-wide uppercase transition duration-300";

function outerClass(variant: Variant, size: Size, className?: string) {
  const s = sizes[size];
  return variant === "ghost"
    ? cn(base, s.box, "bg-white/15 p-px text-ink hover:bg-cyan/60", className)
    : cn(base, s.box, s.pad, "gap-2 bg-linear-to-r from-cyan to-violet text-void hover:brightness-110", className);
}

/**
 * clip-path also trims borders at the cut corners, so the ghost stroke is an
 * outer shape with an inner clipped shape inset by 1px (inner cut = outer - 0.59px
 * keeps the diagonal stroke 1px wide too).
 */
function Body({ variant, size, children }: Required<Shared> & { children: ReactNode }) {
  if (variant !== "ghost") return children;
  return (
    <span
      className={cn(
        "clip-tech flex size-full items-center justify-center gap-2 bg-[#0a0e1b] transition-colors duration-300 group-hover:bg-[#101727]",
        sizes[size].pad,
        sizes[size].inner,
      )}
    >
      {children}
    </span>
  );
}

export function ButtonLink({ variant = "primary", size = "md", className, children, ...props }: Shared & ComponentProps<"a">) {
  return (
    <a className={outerClass(variant, size, className)} {...props}>
      <Body variant={variant} size={size}>{children}</Body>
    </a>
  );
}

export function Button({ variant = "primary", size = "md", className, children, ...props }: Shared & ComponentProps<"button">) {
  return (
    <button className={outerClass(variant, size, className)} {...props}>
      <Body variant={variant} size={size}>{children}</Body>
    </button>
  );
}

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Spark({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`absolute size-4 -translate-x-1/2 -translate-y-1/2 text-cyan ${className}`} fill="currentColor">
      <path d="M12 0c.8 6.6 5.4 11.2 12 12-6.6.8-11.2 5.4-12 12-.8-6.6-5.4-11.2-12-12 6.6-.8 11.2-5.4 12-12Z" />
    </svg>
  );
}

/** Page section with the shared structural lines (top rule + two vertical rules). */
export function Section({
  id,
  children,
  className,
  flush = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  flush?: boolean;
}) {
  return (
    <section id={id} className="relative scroll-mt-20 border-t border-line">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="mx-auto h-full max-w-6xl">
          <div className="relative h-full">
            <div className="absolute inset-y-0 left-4 w-px bg-white/[0.07] lg:left-8" />
            <div className="absolute inset-y-0 right-4 w-px bg-white/[0.07] lg:right-8" />
            <Spark className="top-0 left-4 lg:left-8" />
            <Spark className="top-0 right-4 lg:right-8" />
          </div>
        </div>
      </div>
      <div className={cn("relative mx-auto max-w-6xl px-10 lg:px-14", flush ? "py-10" : "py-24", className)}>{children}</div>
    </section>
  );
}

export function SectionHeading({
  label,
  title,
  description,
  center = false,
}: {
  label: string;
  title: ReactNode;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      <p className={cn("mb-4 flex items-center gap-3 text-xs font-medium tracking-[0.2em] text-cyan uppercase", center && "justify-center")}>
        <span className="h-px w-8 bg-cyan/60" />
        {label}
      </p>
      <h2 className="font-display text-[clamp(1.6rem,2.8vw,2.3rem)] leading-[1.15] font-semibold tracking-tight">{title}</h2>
      {description && <p className="mt-4 text-[15px] leading-relaxed text-muted">{description}</p>}
    </div>
  );
}

import { site } from "@/lib/site";
import { ButtonLink } from "./button";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function FinalCta() {
  return (
    <Section id="cta" className="py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-azure/45 blur-[140px]" />
      </div>
      <Reveal className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] font-semibold tracking-tight">
          Let’s build something that <span className="text-gradient">moves your business forward.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-muted">
          Have an idea, a challenge or a deadline? Get in touch and we’ll take it from here.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href={`mailto:${site.email}`}>Message Us</ButtonLink>
          <ButtonLink href="#contact" variant="ghost">Start a Project</ButtonLink>
        </div>
      </Reveal>
    </Section>
  );
}

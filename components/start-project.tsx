import { site } from "@/lib/site";
import { CutCard } from "./cut-card";
import { ProjectForm } from "./project-form";
import { Reveal } from "./reveal";
import { Section } from "./section";

const steps = [
  { title: "We review", text: "Within one business day, a real person reads your brief." },
  { title: "Discovery call", text: "A short call to align on goals, scope and timeline." },
  { title: "Proposal", text: "A clear plan, timeline and quote — no surprises." },
];

export function StartProject() {
  return (
    <Section id="contact">
      <div className="relative">
        <div aria-hidden className="pointer-events-none absolute -top-20 -left-32 size-96 rounded-full bg-teal/40 blur-[130px]" />
        <div className="relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-xs font-medium tracking-[0.2em] text-cyan uppercase">
              <span className="h-px w-8 bg-cyan/60" />
              Start a Project
            </p>
            <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.1] font-semibold tracking-tight">
              Tell us what you’re building. <span className="text-gradient">We’ll make it real.</span>
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
              Share a few details about your project and we’ll come back with ideas, a timeline and a clear next step.
            </p>

            <dl className="mt-9 space-y-5 border-t border-line pt-8 text-sm">
              {[
                ["Email", site.email, `mailto:${site.email}`],
                ["Phone", site.phone, `tel:${site.phone.replace(/[^+\d]/g, "")}`],
                ["Location", site.location, undefined],
              ].map(([label, value, href]) => (
                <div key={label} className="flex gap-6">
                  <dt className="w-20 shrink-0 text-muted">{label}</dt>
                  <dd>{href ? <a href={href} className="transition-colors hover:text-cyan">{value}</a> : value}</dd>
                </div>
              ))}
            </dl>

            <ol className="mt-9 space-y-5 border-t border-line pt-8">
              {steps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="font-display text-sm text-cyan">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block font-display text-[15px] font-semibold">{s.title}</span>
                    <span className="block text-[13px] text-muted">{s.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={120}>
            <CutCard cut={18}>
              <ProjectForm />
            </CutCard>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

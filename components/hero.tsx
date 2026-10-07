import { ButtonLink } from "./button";
import { Spark } from "./section";

const strip = ["Graphic Design", "Web Development", "Video Editing", "Branding", "UI/UX Design", "Motion Graphics"];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <Backdrop />
      <Lines />

      <div className="mx-auto flex min-h-[calc(100vh-4.5rem)] max-w-6xl items-center justify-center px-10 pt-36 pb-20 text-center lg:px-14">
        <div className="flex max-w-2xl flex-col items-center">
          <h1
            className="animate-rise font-display text-[clamp(1.75rem,3.3vw,2.6rem)] leading-[1.15] font-semibold tracking-tight uppercase"
            style={{ animationDelay: "0.1s" }}
          >
            We build digital experiences that{" "}
            <span className="text-gradient">move businesses forward.</span>
          </h1>

          <p
            className="animate-rise mt-5 max-w-lg text-[15px] leading-relaxed text-muted"
            style={{ animationDelay: "0.25s" }}
          >
            We help businesses grow and reach their full potential through creativity,
            technology, and innovation.
          </p>

          <div
            className="animate-rise mt-8 flex flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: "0.4s" }}
          >
            <ButtonLink href="#contact">
              Get Started
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </ButtonLink>
            <ButtonLink href="#work" variant="ghost">
              View Our Work
            </ButtonLink>
          </div>
        </div>

      </div>

      {/* services strip, divided by vertical lines */}
      <div className="relative border-y border-line bg-surface/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-stretch overflow-x-auto px-10 lg:px-14">
          <span className="flex shrink-0 items-center pr-6 text-[11px] tracking-widest text-muted uppercase">
            What we do
          </span>
          {strip.map((s) => (
            <span
              key={s}
              className="flex shrink-0 items-center border-l border-line px-6 py-5 font-display text-sm text-ink/70 transition-colors hover:text-cyan"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -top-48 -right-48 h-[620px] w-[760px] rounded-full bg-azure/60 blur-[150px]" />
      <div className="absolute -bottom-48 -left-48 h-[560px] w-[700px] rounded-full bg-teal/50 blur-[150px]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-void/80 to-transparent" />
    </div>
  );
}

/** Structural lines: one horizontal rule under the nav, two vertical rules, sparkles at the crossings. */
function Lines() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-x-0 top-[5.5rem] h-px bg-white/10" />
      <div className="mx-auto h-full max-w-6xl">
        <div className="relative h-full">
          <div className="absolute inset-y-0 left-4 w-px bg-white/10 lg:left-8" />
          <div className="absolute inset-y-0 right-4 w-px bg-white/10 lg:right-8" />
          <Spark className="top-[5.5rem] left-4 lg:left-8" />
          <Spark className="top-[5.5rem] right-4 lg:right-8" />
          <Spark className="bottom-0 left-4 lg:left-8" />
          <Spark className="bottom-0 right-4 lg:right-8" />
        </div>
      </div>
    </div>
  );
}

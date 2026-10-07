"use client";

import { useRef } from "react";
import { CutCard } from "./cut-card";
import { Reveal } from "./reveal";
import { Section, SectionHeading } from "./section";

// Placeholder testimonials — replace with real client quotes.
const testimonials = [
  { quote: "They understood our product faster than we expected and shipped a site that our customers immediately noticed.", name: "Alex Morgan", role: "CEO", company: "Northwind" },
  { quote: "Communication was clear at every step. The dashboard they built now runs our whole operation.", name: "Priya Sharma", role: "COO", company: "Helix Labs" },
  { quote: "From brand identity to launch video, everything felt cohesive. It's rare to get design and engineering this aligned.", name: "Daniel Okafor", role: "Founder", company: "Lumina" },
  { quote: "Our app went from a rough idea to the app store in record time, and the quality never dipped.", name: "Sofia Lindqvist", role: "Product Lead", company: "Orbitly" },
  { quote: "Reliable, sharp and genuinely invested in our growth. They feel like part of our team.", name: "Marcus Chen", role: "Head of Growth", company: "Vantage" },
];

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).join("");
}

export function Testimonials() {
  const scroller = useRef<HTMLUListElement>(null);

  function go(dir: 1 | -1) {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.6), behavior: "smooth" });
  }

  return (
    <Section id="testimonials">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading label="Testimonials" title="What our clients say." />
        <div className="flex gap-2">
          {([-1, 1] as const).map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => go(d)}
              aria-label={d === -1 ? "Previous testimonials" : "Next testimonials"}
              className="grid size-10 cursor-pointer place-items-center rounded-md border border-line bg-white/[0.03] text-ink/80 transition hover:border-cyan/60 hover:text-cyan"
            >
              {d === -1 ? "←" : "→"}
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal delay={120}>
        <ul
          ref={scroller}
          className="-mx-2 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-2 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <li key={t.name} className="w-[min(86vw,400px)] shrink-0 snap-start">
              <CutCard cut={12} className="h-full" innerClassName="flex h-full flex-col p-7">
                <span aria-hidden className="font-display text-5xl leading-none text-cyan/70">“</span>
                <p className="mt-1 flex-1 text-[15px] leading-relaxed text-ink/90">{t.quote}</p>
                <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span className="grid size-10 place-items-center rounded-full bg-linear-to-br from-cyan to-violet font-display text-sm font-semibold text-void">
                    {initials(t.name)}
                  </span>
                  <span>
                    <span className="block font-display text-sm font-semibold">{t.name}</span>
                    <span className="block text-xs text-muted">{t.role}, {t.company}</span>
                  </span>
                </div>
              </CutCard>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}

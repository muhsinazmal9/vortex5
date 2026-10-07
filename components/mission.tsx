import { Reveal } from "./reveal";
import { MissionTree } from "./mission-tree";
import { Section, SectionHeading } from "./section";

const values = [
  { name: "Craft", text: "We sweat the details, from pixels to performance." },
  { name: "Trust", text: "Honest timelines, clear pricing, no surprises." },
  { name: "Growth", text: "We measure success by your business moving forward." },
  { name: "Impact", text: "We build things meant to last, not just to launch." },
];

export function Mission() {
  return (
    <Section id="about">
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <Reveal>
            <SectionHeading label="Our Mission" title="Growing businesses through creativity and technology." />
          </Reveal>

          <Reveal delay={100} className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-sm font-semibold tracking-[0.15em] text-cyan uppercase">Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                To help businesses grow and reach their full potential by pairing creative thinking with reliable, modern technology.
              </p>
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold tracking-[0.15em] text-cyan uppercase">Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                To be the partner businesses trust for long-term digital progress, building roots deep enough to keep growing for years.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <ul className="mt-10 grid border-t border-line sm:grid-cols-2">
              {values.map((v, i) => (
                <li key={v.name} className={`border-b border-line py-5 ${i % 2 === 0 ? "sm:border-r sm:pr-6" : "sm:pl-6"}`}>
                  <p className="font-display text-base font-semibold">{v.name}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-muted">{v.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <MissionTree />
        </Reveal>
      </div>
    </Section>
  );
}

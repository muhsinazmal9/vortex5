import { Section } from "./section";

// Placeholder names — replace with real client logos.
const brands = ["Northwind", "Lumina", "Helix Labs", "Orbitly", "Kinetic", "Vantage", "Nova & Co", "Pixelforge", "Atlas", "Zenith"];

export function Brands() {
  return (
    <Section id="brands" flush>
      <p className="text-center text-xs font-medium tracking-[0.2em] text-muted uppercase">Brands we’ve worked with</p>
      <div
        className="mt-8 overflow-hidden"
        style={{ maskImage: "linear-gradient(to right, transparent, #000 15%, #000 85%, transparent)" }}
      >
        <ul className="animate-marquee flex w-max items-center">
          {[...brands, ...brands].map((b, i) => (
            <li
              key={`${b}-${i}`}
              aria-hidden={i >= brands.length}
              className="px-10 font-display text-xl font-semibold tracking-tight whitespace-nowrap text-ink/35 transition-colors hover:text-cyan"
            >
              {b}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

import { site } from "@/lib/site";
import { services } from "./services";
import { Logo } from "./logo";

const col = "mb-4 text-xs font-medium tracking-[0.2em] text-muted uppercase";
const link = "text-sm text-ink/70 transition-colors hover:text-cyan";

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-surface/60">
      <div className="mx-auto max-w-6xl px-10 pt-16 pb-8 lg:px-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.1fr]">
          <div>
            <Logo tagline />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              A creative and technology studio helping businesses grow through web, apps, design and video.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className={link}>{s.label} ↗</a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Quick links">
            <p className={col}>Quick links</p>
            <ul className="space-y-3">
              {site.quickLinks.map((l) => (
                <li key={l.label}><a href={l.href} className={link}>{l.label}</a></li>
              ))}
            </ul>
          </nav>

          <div>
            <p className={col}>Services</p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.key}><a href="#services" className={link}>{s.name}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className={col}>Contact</p>
            <ul className="space-y-3 text-sm text-ink/70">
              <li><a href={`mailto:${site.email}`} className="transition-colors hover:text-cyan">{site.email}</a></li>
              <li>{site.phone}</li>
              <li>{site.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {site.legal.map((l) => (
              <li key={l.label}><a href={l.href} className="transition-colors hover:text-ink">{l.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

import { ButtonLink } from "./button";
import { Logo } from "./logo";

const links = [
  { href: "#", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="glass mx-auto flex h-14 max-w-6xl items-center justify-between rounded-xl pr-2 pl-5">
        <a href="#" aria-label="Vortex5 home">
          <Logo />
        </a>
        <ul className="hidden items-center gap-8 text-sm text-muted md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <ButtonLink href="#contact" size="sm">
          Get Started
        </ButtonLink>
      </nav>
    </header>
  );
}

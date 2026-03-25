import { siteContent } from '../lib/content';
import { Button } from './Button';

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/85 backdrop-blur">
      <nav className="section-shell flex h-20 items-center justify-between gap-6">
        <a href="#top" className="group">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-ash group-hover:text-white">ASW</p>
          <p className="text-base font-black text-white md:text-lg">American Spinning Works</p>
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {siteContent.navLinks.map((link) => (
            <li key={link.href}>
              <a className="text-sm font-medium text-ash transition hover:text-white" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button href="#contact" className="hidden md:inline-flex">
          Partner With ASW
        </Button>
      </nav>
    </header>
  );
}

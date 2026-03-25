import { siteContent } from '../lib/content';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#040b16] py-12">
      <div className="section-shell grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-black text-white">American Spinning Works</h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ash/85">
            Restoring domestic spinning infrastructure to secure resilient, high-quality, and strategic American textile production.
          </p>
        </div>
        <div className="md:justify-self-end">
          <ul className="grid grid-cols-2 gap-3 text-sm text-ash/85">
            {siteContent.navLinks.map((link) => (
              <li key={link.href}>
                <a className="hover:text-white" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="section-shell mt-10 border-t border-white/10 pt-6 text-xs text-ash/70">
        © {year} American Spinning Works. All rights reserved.
      </div>
    </footer>
  );
}

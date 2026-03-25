import { siteContent } from '../lib/content';
import { Button } from '../components/Button';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Replace this placeholder image path with production photography of your spinning or mill operation. */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/hero-mill-placeholder.svg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true" />

      <div className="section-shell relative py-24 md:py-32 lg:py-36">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.32em] text-ash/90">American Spinning Works</p>
        <h1 className="max-w-4xl text-4xl font-black leading-[0.95] text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">{siteContent.hero.lines[0]}</span>
          <span className="mt-2 block">{siteContent.hero.lines[1]}</span>
          <span className="mt-2 block text-signal">{siteContent.hero.lines[2]}</span>
          <span className="mt-2 block">{siteContent.hero.lines[3]}</span>
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-ash md:text-lg">{siteContent.hero.subheadline}</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button href={siteContent.hero.primaryCta.href}>{siteContent.hero.primaryCta.label}</Button>
          <Button href={siteContent.hero.secondaryCta.href} variant="secondary">
            {siteContent.hero.secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}

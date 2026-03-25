import { SectionHeading } from '../components/SectionHeading';
import { StatCard } from '../components/StatCard';
import { siteContent } from '../lib/content';

export function InfrastructureSection() {
  return (
    <section id="infrastructure" className="bg-ink py-20 md:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Infrastructure Gap"
          title="The Bottleneck Is Clear — and So Is the Opportunity"
          description="Domestic textile infrastructure weakened over decades. Spinning capacity disappeared, import dependence rose, and lead times stretched. Rebuilding this layer unlocks the rest of the supply chain."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {siteContent.infrastructureStats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} detail={stat.detail} />
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr,1fr]">
          <div className="panel p-6 md:p-8">
            <h3 className="text-lg font-bold text-white">Timeline: How We Got Here</h3>
            <ol className="mt-6 space-y-5 border-l border-white/20 pl-5">
              {siteContent.timeline.map((step) => (
                <li key={step.period} className="relative">
                  <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full bg-signal" aria-hidden="true" />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-signal">{step.period}</p>
                  <p className="mt-1 text-base font-bold text-white">{step.title}</p>
                  <p className="mt-1 text-sm text-ash/85">{step.note}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="panel flex min-h-72 flex-col items-center justify-center p-8 text-center">
            {/* Replace with infographic/diagram asset showing domestic vs import-dependent textile flow. */}
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-signal">Diagram Placeholder</p>
            <p className="mt-3 text-lg font-bold text-white">Supply Chain Infrastructure Map</p>
            <p className="mt-3 max-w-sm text-sm text-ash/85">
              Insert future data visualization or partner deck graphic to illustrate spinning as the strategic bottleneck.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

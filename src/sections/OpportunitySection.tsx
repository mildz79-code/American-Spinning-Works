import { SectionHeading } from '../components/SectionHeading';
import { siteContent } from '../lib/content';

export function OpportunitySection() {
  return (
    <section id="opportunity" className="bg-ink py-20 md:py-24">
      <div className="section-shell grid gap-8 lg:grid-cols-[1.15fr,1fr] lg:items-center">
        <SectionHeading
          eyebrow="Opportunity"
          title="Why Now: The Strategic Case for Rebuilding Spinning in America"
          description="Market pressure, industrial policy, and procurement priorities are converging. Domestic spinning is no longer optional — it is a competitive advantage."
        />

        <div className="panel p-7">
          <ul className="space-y-4">
            {siteContent.opportunityBullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-signal" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-ash/90">{bullet}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

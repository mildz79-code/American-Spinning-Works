import { FeatureCard } from '../components/FeatureCard';
import { SectionHeading } from '../components/SectionHeading';
import { siteContent } from '../lib/content';

export function MissionSection() {
  return (
    <section id="mission" className="bg-navy py-20 md:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Mission"
          title="Rebuild U.S. Spinning Capacity with Purpose and Precision"
          description={siteContent.mission.blurb}
        />

        <div className="grid gap-5 md:grid-cols-3">
          {siteContent.mission.features.map((feature) => (
            <FeatureCard key={feature.title} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { CapabilityCard } from '../components/CapabilityCard';
import { SectionHeading } from '../components/SectionHeading';
import { siteContent } from '../lib/content';

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="bg-navy py-20 md:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Capabilities"
          title="What American Spinning Works Is Built to Support"
          description="A modern industrial platform designed for operational reliability, product quality, and strategic domestic textile growth."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteContent.capabilities.map((capability) => (
            <CapabilityCard
              key={capability.title}
              icon={capability.icon}
              title={capability.title}
              description={capability.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

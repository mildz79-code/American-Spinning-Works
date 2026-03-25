import { SectionHeading } from '../components/SectionHeading';

export function MediaSection() {
  return (
    <section className="bg-navy py-20 md:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Media"
          title="See the Vision in Motion"
          description="Reserve this space for a short promotional overview, documentary segment, or technical explainer video."
          align="center"
        />

        <div className="panel mx-auto max-w-5xl overflow-hidden p-3">
          {/* Insert a future embedded player (YouTube/Vimeo/custom host) when final media is ready. */}
          <div className="relative flex aspect-video items-center justify-center rounded-xl border border-white/15 bg-[#02060f]">
            <img
              src="/assets/video/video-placeholder.svg"
              alt="Video placeholder for American Spinning Works promotional media"
              className="h-full w-full object-cover opacity-45"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy/45">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/60 bg-white/10 text-xl">▶</div>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.26em] text-white">Promotional Video Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

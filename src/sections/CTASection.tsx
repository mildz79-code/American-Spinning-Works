import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';

export function CTASection() {
  return (
    <section id="contact" className="bg-ink py-20 md:py-24">
      <div className="section-shell">
        <div className="panel grid gap-10 p-8 md:grid-cols-2 md:p-10">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s Rebuild the Backbone of American Textiles."
            description="Connect with American Spinning Works to discuss partnerships, sourcing strategy, or strategic investment collaboration."
          />

          <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
            {/* Future integration point: connect submit handler to Supabase or email API service. */}
            <div>
              <label className="mb-2 block text-sm font-medium text-ash" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-ash/60 focus:border-signal focus:outline-none"
                placeholder="Your full name"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-ash" htmlFor="company">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-ash/60 focus:border-signal focus:outline-none"
                placeholder="Company or organization"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-ash" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-ash/60 focus:border-signal focus:outline-none"
                placeholder="name@company.com"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-ash" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-ash/60 focus:border-signal focus:outline-none"
                placeholder="Tell us about your interest in partnering with ASW"
                required
              />
            </div>

            <Button type="submit">Submit Inquiry</Button>
          </form>
        </div>
      </div>
    </section>
  );
}

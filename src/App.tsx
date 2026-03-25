import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { CapabilitiesSection } from './sections/CapabilitiesSection';
import { CTASection } from './sections/CTASection';
import { Hero } from './sections/Hero';
import { InfrastructureSection } from './sections/InfrastructureSection';
import { MediaSection } from './sections/MediaSection';
import { MissionSection } from './sections/MissionSection';
import { OpportunitySection } from './sections/OpportunitySection';

function App() {
  return (
    <div className="bg-ink text-white">
      <Navbar />
      <main>
        <Hero />
        <MissionSection />
        <InfrastructureSection />
        <CapabilitiesSection />
        <OpportunitySection />
        <MediaSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

const sections = [
  {
    id: 'mission',
    title: 'Mission',
    body: 'We are rebuilding strategic textile capacity in the United States with resilient domestic manufacturing systems.'
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    body: 'Integrated spinning, quality assurance, and logistics operations are designed to support critical supply chains.'
  },
  {
    id: 'capabilities',
    title: 'Capabilities',
    body: 'From pilot lots to scaled production, our team supports industrial, defense-adjacent, and specialized technical applications.'
  },
  {
    id: 'opportunity',
    title: 'Opportunity',
    body: 'American Spinning Works is positioned to accelerate near-shoring momentum and long-horizon industrial reinvestment.'
  }
];

function App() {
  return (
    <div className="site">
      <header className="hero">
        <nav>
          <h1>American Spinning Works</h1>
          <a href="#contact">Contact</a>
        </nav>
        <div className="hero-content">
          <p className="eyebrow">Built for Industrial Renewal</p>
          <h2>Resilient Domestic Fiber Manufacturing</h2>
          <p>
            Placeholder hero image area. Visual direction emphasizes bold industrial structure, American grit,
            and strategic manufacturing confidence.
          </p>
        </div>
      </header>

      <main>
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="content-section">
            <h3>{section.title}</h3>
            <p>{section.body}</p>
          </section>
        ))}

        <section id="media" className="content-section media-grid">
          <div>
            <h3>Media</h3>
            <p>Placeholder for diagram and process visuals.</p>
          </div>
          <div>
            <h3>Video</h3>
            <p>Placeholder for future video embed.</p>
          </div>
        </section>

        <section id="contact" className="content-section">
          <h3>Contact</h3>
          <form className="contact-form">
            <input type="text" placeholder="Name" aria-label="Name" />
            <input type="email" placeholder="Email" aria-label="Email" />
            <textarea placeholder="Message" aria-label="Message" rows={5} />
            <button type="button">Send Inquiry</button>
          </form>
          <p className="note">Contact form is UI-only for now.</p>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} American Spinning Works. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

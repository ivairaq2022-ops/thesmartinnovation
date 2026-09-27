const Hero = ({ setCurrentPage }) => (
  <section className="hero" id="home">
    <div className="container hero-content">
      <img src="/images/Vertical-white.png" alt="الابتكار الذكي — The Smart Innovation" className="hero-logo" />
      <p className="hero-tag">Technology solutions for critical operations</p>
      <h1>Integrated technology for the modern enterprise</h1>
      <p className="hero-desc">The Smart Innovation provides IT infrastructure, data centers, electronic gates, surveillance systems, cybersecurity, artificial intelligence, and custom software solutions for organizations and oil field operations.</p>
      <div className="hero-actions">
        <a href="#services" className="btn btn-primary" onClick={(e) => { e.preventDefault(); setCurrentPage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Explore Our Services</a>
        <a href="#contact" className="btn btn-outline" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Contact Us</a>
      </div>
    </div>
  </section>
);

export default Hero;

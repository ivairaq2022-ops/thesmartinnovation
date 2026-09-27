import { Target, Eye, Activity } from 'lucide-react';

const WhoWeAre = () => (
  <section className="section" id="who-we-are">
    <div className="container">
      <div className="section-header"><span className="section-label">About Us</span><h2>Technology aligned with your operations</h2></div>
      <div className="about-grid">
        <div className="about-text">
          <p><strong>The Smart Innovation</strong> delivers technology solutions for commercial and industrial organizations. Our scope spans IT infrastructure, fiber optic and wireless networks, data centers, electronic gates, CCTV, cybersecurity, AI, and software development.</p>
          <p>We work with clients to understand operational requirements, plan suitable systems, and bring together the technologies needed across facilities and oil field environments.</p>
        </div>
        <div className="about-cards">
          <article className="value-card"><span className="value-icon"><Target size={28} /></span><div><h3>Our Focus</h3><p>Technology that addresses practical operational needs.</p></div></article>
          <article className="value-card"><span className="value-icon"><Eye size={28} /></span><div><h3>Our Approach</h3><p>Clear requirements, considered design, and coordinated implementation.</p></div></article>
          <article className="value-card"><span className="value-icon"><Activity size={28} /></span><div><h3>Our Commitment</h3><p>Reliable communication and solutions tailored to each project.</p></div></article>
        </div>
      </div>
    </div>
  </section>
);

export default WhoWeAre;

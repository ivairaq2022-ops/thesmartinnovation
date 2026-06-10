import React from 'react';
import { Monitor, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'it',
      icon: <Monitor size={36} className="text-glow-cyan" style={{ color: 'var(--color-cyan)' }} />,
      title: 'IT Solutions',
      desc: 'Network design, cloud migration, help desk, system integration, and managed IT so your operations run smoothly day and night.',
      features: ['Infrastructure & cloud', 'Managed services', 'Digital workplace'],
      featured: false
    },
    {
      id: 'security',
      icon: <ShieldCheck size={36} className="text-glow-purple" style={{ color: 'var(--color-purple)' }} />,
      title: 'Cybersecurity',
      desc: 'Protect your data, users, and reputation with layered defense, monitoring, incident response, and security awareness programs.',
      features: ['Threat detection & response', 'Penetration testing', 'Compliance & governance'],
      featured: true
    },
    {
      id: 'ai',
      icon: <Cpu size={36} className="text-glow-cyan" style={{ color: 'var(--color-cyan)' }} />,
      title: 'Artificial Intelligence',
      desc: 'Deploy AI that matters — automation, analytics, chatbots, and custom models built responsibly and integrated with your existing systems.',
      features: ['Process automation', 'Predictive analytics', 'AI strategy & integration'],
      featured: false
    }
  ];

  return (
    <section className="section section-alt" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Services</span>
          <h2>What we do for you</h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article
              key={service.id}
              className={`service-card ${service.featured ? 'featured' : ''}`}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div className="service-icon">{service.icon}</div>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9px',
                  color: service.featured ? 'var(--color-purple)' : 'var(--color-cyan)',
                  background: service.featured ? 'var(--color-purple-dim)' : 'var(--color-cyan-dim)',
                  padding: '2px 8px',
                  borderRadius: '10px',
                  border: `1px solid ${service.featured ? 'rgba(189,0,255,0.2)' : 'rgba(0,240,255,0.2)'}`
                }}>
                  {service.featured ? 'CRITICAL_SHIELD' : 'GRID_CORE'}
                </span>
              </div>
              
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              
              <ul>
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <div style={{
                marginTop: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: service.featured ? 'var(--color-purple)' : 'var(--color-cyan)',
                cursor: 'pointer',
                opacity: 0.8,
                transition: 'opacity 0.2s'
              }}
              className="service-link"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              >
                <span>REQUEST DETAILS</span>
                <ArrowRight size={12} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

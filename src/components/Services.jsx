import { ArrowRight, BrainCircuit, Camera, Cable, Code2, Database, DoorOpen, ShieldCheck, Wifi } from 'lucide-react';

const services = [
  { icon: <DoorOpen size={32} />, title: 'Electronic Gates & Access Control', desc: 'Electronic gate systems and access control solutions for facilities, offices, and operational sites.', features: ['Entry and exit systems', 'Access control integration', 'Site security planning'] },
  { icon: <Database size={32} />, title: 'Data Centers & Server Infrastructure', desc: 'Design and implementation of data center and server environments to support business applications and critical operations.', features: ['Server and storage infrastructure', 'Virtualization and backup', 'Systems integration'] },
  { icon: <Camera size={32} />, title: 'CCTV & Surveillance', desc: 'Video surveillance and monitoring systems designed around the needs of commercial and industrial sites.', features: ['Camera system design', 'Recording and monitoring', 'Integration with access control'] },
  { icon: <Cable size={32} />, title: 'IT Infrastructure & Fiber Optics', desc: 'Structured cabling, fiber optic connectivity, and the network infrastructure that connects people, systems, and sites.', features: ['Fiber optic networks', 'Structured cabling', 'LAN and WAN design'] },
  { icon: <Wifi size={32} />, title: 'Wireless Connectivity', desc: 'Wireless networks and site connectivity for offices, facilities, and remote operational locations.', features: ['Wireless network design', 'Site-to-site connectivity', 'Network deployment'] },
  { icon: <ShieldCheck size={32} />, title: 'Cybersecurity', desc: 'Security solutions to help organizations protect their networks, systems, data, and users.', features: ['Security assessment', 'Network and endpoint protection', 'Monitoring and response'] },
  { icon: <BrainCircuit size={32} />, title: 'AI Solutions', desc: 'Practical artificial intelligence solutions for process automation, data analysis, and decision support.', features: ['Workflow automation', 'Data analytics', 'AI integration'] },
  { icon: <Code2 size={32} />, title: 'Software & Oil Field Systems', desc: 'Custom software development and systems integration for enterprise processes and oil field operations.', features: ['Custom applications', 'Operational dashboards', 'Oil field system integration'] }
];

const Services = ({ navigateToContact }) => (
  <section className="section section-alt" id="services">
    <div className="container">
      <div className="section-header">
        <span className="section-label">Our Services</span>
        <h2>Solutions for infrastructure, security, and operations</h2>
        <p>From physical infrastructure to software and AI, we help organizations plan and implement technology suited to their requirements.</p>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-icon" aria-hidden="true">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <ul>{service.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            <a className="service-link" href="#contact" onClick={(e) => { e.preventDefault(); navigateToContact(`I would like to learn more about ${service.title}.`); }}>Request details <ArrowRight size={16} /></a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;

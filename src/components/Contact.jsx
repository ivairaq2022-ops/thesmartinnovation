import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Terminal, CheckCircle2, ShieldAlert } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'it',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timestamp, setTimestamp] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setTimestamp(new Date().toISOString());
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: 'it',
      message: ''
    });
    setIsSubmitted(false);
  };

  const getSubjectText = (val) => {
    switch (val) {
      case 'it': return 'IT Solutions';
      case 'security': return 'Cybersecurity';
      case 'ai': return 'Artificial Intelligence';
      case 'courses': return 'Course enrollment';
      default: return 'General inquiry';
    }
  };

  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Contact Us</span>
          <h2>Let's build something smart together</h2>
        </div>

        <div className="contact-grid">
          {isSubmitted ? (
            /* Interactive success terminal console */
            <div className="terminal-success">
              <div className="terminal-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Terminal size={14} />
                  <span>TRANSMISSION_STATUS: SUCCESS</span>
                </div>
                <span>NODE_REF: {Math.floor(Math.random() * 89999 + 10000)}</span>
              </div>
              
              <div className="terminal-line" style={{ color: 'var(--color-cyan)', fontWeight: 'bold' }}>
                <span className="terminal-prompt">&gt;&gt;</span>
                <span>DATA PACKAGE SENT SUCCESSFULLY</span>
              </div>

              <div className="terminal-line">
                <span className="terminal-prompt">&gt;</span>
                <span>TIMESTAMP: {timestamp}</span>
              </div>

              <div className="terminal-line">
                <span className="terminal-prompt">&gt;</span>
                <span>SENDER_ID: {formData.name.toUpperCase().replace(/\s+/g, '_')}</span>
              </div>

              <div className="terminal-line">
                <span className="terminal-prompt">&gt;</span>
                <span>COMMS_CHANNEL: {formData.email}</span>
              </div>

              <div className="terminal-line">
                <span className="terminal-prompt">&gt;</span>
                <span>ROUTING_KEY: {formData.subject.toUpperCase()}</span>
              </div>

              <div className="terminal-line" style={{ marginTop: '16px', borderTop: '1px dashed rgba(0, 240, 255, 0.1)', paddingTop: '16px' }}>
                <span className="terminal-prompt">&gt;</span>
                <span style={{ color: 'var(--text-muted)' }}>
                  "Thank you, {formData.name}! We received your message regarding {getSubjectText(formData.subject)}. Our system agents will process this packet and establish contact shortly."
                </span>
              </div>

              <button
                className="btn btn-outline btn-sm"
                onClick={handleReset}
                style={{ marginTop: '28px' }}
              >
                OPEN NEW CHANNEL
              </button>
            </div>
          ) : (
            /* Contact form */
            <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="name">Full name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              
              <div className="form-row">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@company.com"
                />
              </div>

              <div className="form-row">
                <label htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="it">IT Solutions</option>
                  <option value="security">Cybersecurity</option>
                  <option value="ai">Artificial Intelligence</option>
                  <option value="courses">Course enrollment</option>
                  <option value="general">General inquiry</option>
                </select>
              </div>

              <div className="form-row">
                <label htmlFor="message">Message Payload</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-full">
                TRANSMIT MESSAGE
              </button>
            </form>
          )}

          <div className="contact-info">
            <div className="contact-block">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Mail size={16} style={{ color: 'var(--color-cyan)' }} />
                <h3>Email Secure Link</h3>
              </div>
              <a href="mailto:info@thesmartinnivation.com">info@thesmartinnivation.com</a>
            </div>

            <div className="contact-block">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Phone size={16} style={{ color: 'var(--color-cyan)' }} />
                <h3>Secure Phone Line</h3>
              </div>
              <a href="tel:+9647860808090">+964 786 080 8090</a>
            </div>

            <div className="contact-block">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <MapPin size={16} style={{ color: 'var(--color-cyan)' }} />
                <h3>Node Coordinates</h3>
              </div>
              <p>Almansour, Baghdad<br />Iraq</p>
            </div>

            <div className="contact-block">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Clock size={16} style={{ color: 'var(--color-cyan)' }} />
                <h3>Operational Cycles</h3>
              </div>
              <p>Monday – Friday: 9:00 AM – 6:00 PM<br />Emergency support: 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const CONTACT_EMAIL = 'info@thesmartinnivation.com';

const Contact = ({ initialMessage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'it',
    message: initialMessage || ''
  });
  const [emailOpened, setEmailOpened] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `${getSubjectText(formData.subject)} inquiry — The Smart Innovation`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    window.location.assign(`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    setEmailOpened(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: 'it',
      message: ''
    });
    setEmailOpened(false);
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
          <div>
            {emailOpened && <p role="status" className="contact-note">Your email app should open with the message ready. Please press Send there to complete your inquiry. If it did not open, email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> directly. <button type="button" onClick={handleReset}>Clear form</button></p>}
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
                OPEN EMAIL TO SEND
              </button>
            </form>
          </div>

          <div className="contact-info">
            <div className="contact-block">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Mail size={16} style={{ color: 'var(--color-cyan)' }} />
                <h3>Email Secure Link</h3>
              </div>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
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

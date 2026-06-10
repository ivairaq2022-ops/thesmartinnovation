import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Cpu } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'IT Solutions · Cybersecurity · Artificial Intelligence';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <img
          src="/images/Vertical-white.png"
          alt="الابتكار الذكي — The Smart Innovation"
          className="hero-logo"
        />
        
        <div>
          <p className="hero-tag">
            <span style={{ color: '#00f0ff', marginRight: '6px' }}>&gt;</span>
            {typedText}
            <span style={{ animation: 'blink 1s step-end infinite', color: '#00f0ff' }}>|</span>
          </p>
        </div>

        <h1 className="text-glow-cyan">
          Secure, Intelligent Technology For Your Business
        </h1>
        
        <p className="hero-desc">
          The Smart Innovation delivers end-to-end IT services, enterprise-grade cybersecurity,
          and practical AI that helps organizations grow with confidence.
        </p>
        
        <div className="hero-actions">
          <a
            href="#services"
            className="btn btn-primary"
            onClick={(e) => handleScrollTo(e, 'services')}
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="btn btn-outline"
            onClick={(e) => handleScrollTo(e, 'contact')}
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="hero-stats container">
        <div className="stat">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <Shield size={20} style={{ color: '#00f0ff', opacity: 0.8 }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'rgba(0, 240, 255, 0.4)' }}>LOG: ACTIVE</span>
          </div>
          <span className="stat-value">24/7</span>
          <span className="stat-label">Security monitoring</span>
        </div>

        <div className="stat" style={{ borderImage: 'linear-gradient(to right, #bd00ff, transparent) 1' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <Cpu size={20} style={{ color: '#bd00ff', opacity: 0.8 }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'rgba(189, 0, 255, 0.4)' }}>NODE: SYNC</span>
          </div>
          <span className="stat-value" style={{ textShadow: '0 0 10px var(--color-purple-glow)' }}>AI-POWERED</span>
          <span className="stat-label">Driven insights</span>
        </div>

        <div className="stat">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <Terminal size={20} style={{ color: '#00f0ff', opacity: 0.8 }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'rgba(0, 240, 255, 0.4)' }}>SYS: OPTIMAL</span>
          </div>
          <span className="stat-value">100%</span>
          <span className="stat-label">Client-focused</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

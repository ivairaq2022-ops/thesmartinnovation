import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const Header = ({ currentPage, setCurrentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, pageId) => {
    e.preventDefault();
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#home" className="logo" onClick={(e) => handleLinkClick(e, 'home')}>
          <img
            src="/images/Horizental-white-2.png"
            alt="الابتكار الذكي — The Smart Innovation"
            className="logo-img"
            onError={(e) => {
              e.target.style.display = 'none';
              const fallback = e.target.nextElementSibling;
              if (fallback) fallback.removeAttribute('hidden');
            }}
          />
          <span className="logo-fallback" hidden>
            <span className="logo-icon" aria-hidden="true">◇</span>
            <span className="logo-text">The Smart <strong>Innovation</strong></span>
          </span>
        </a>

        {/* System Diagnostics panel */}
        <div className="system-status">
          <div className="status-indicator">
            <span className="status-dot"></span>
            <span>SYS_ONLINE</span>
          </div>
          <span>|</span>
          <div className="status-indicator">
            <Shield size={12} className="text-glow-cyan" style={{ marginRight: '4px' }} />
            <span>SEC_LVL_MAX</span>
          </div>
          <span>|</span>
          <span>NET: ENCRYPTED</span>
        </div>

        <button
          className={`nav-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
          <a
            href="#home"
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={(e) => handleLinkClick(e, 'home')}
          >
            Home
          </a>
          <a
            href="#services"
            className={`nav-link ${currentPage === 'services' ? 'active' : ''}`}
            onClick={(e) => handleLinkClick(e, 'services')}
          >
            Services
          </a>
          <a
            href="#pricing"
            className={`nav-link ${currentPage === 'pricing' ? 'active' : ''}`}
            onClick={(e) => handleLinkClick(e, 'pricing')}
          >
            Pricing
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

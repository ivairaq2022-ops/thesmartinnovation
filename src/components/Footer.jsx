import React from 'react';

const Footer = ({ setCurrentPage }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, pageId) => {
    e.preventDefault();
    setCurrentPage(pageId);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img
            src="/images/Horizental-white-2.png"
            alt="الابتكار الذكي — The Smart Innovation"
            className="logo-img logo-img-footer"
            onError={(e) => {
              e.target.style.display = 'none';
              const fallback = e.target.nextElementSibling;
              if (fallback) fallback.removeAttribute('hidden');
            }}
          />
          <span className="logo-fallback" hidden>
            <span className="logo-icon" aria-hidden="true">◇</span>
            <span>The Smart Innovation</span>
          </span>
        </div>

        <nav className="footer-nav">
          <a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Home</a>
          <a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>Our Services</a>
          <a href="#pricing" onClick={(e) => handleLinkClick(e, 'pricing')}>Pricing Plans</a>
        </nav>

        <p className="footer-copy">
          &copy; {currentYear} The Smart Innovation. All rights reserved.
        </p>

        <div className="footer-diagnostics">
          SYSTEM_VER: 2.1.0 // CORE_ENGINE: VITE_REACT_19 // STYLING: VANILLA_CSS_CUSTOM // NODE: ACTIVE
        </div>
      </div>
    </footer>
  );
};

export default Footer;

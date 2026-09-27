
const Footer = ({ setCurrentPage, navigateToContact }) => {
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
          <a href="#contact" onClick={(e) => { e.preventDefault(); navigateToContact(); }}>Contact</a>
        </nav>

        <p className="footer-copy">
          &copy; {currentYear} The Smart Innovation. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;

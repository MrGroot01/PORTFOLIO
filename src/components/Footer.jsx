import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-divider" />
      <div className="container footer-inner">
        <div className="footer-left">
          <button className="footer-logo" onClick={scrollToTop}>
            <span className="logo-sym">&lt;</span>KDT<span className="logo-sym">/&gt;</span>
          </button>
          <p className="footer-tagline">
            Building scalable and user-friendly web applications.
          </p>
        </div>

        <div className="footer-links">
          {[
            { label: 'About', href: '#about' },
            { label: 'Skills', href: '#skills' },
            { label: 'Projects', href: '#projects' },
            { label: 'Contact', href: '#contact' },
          ].map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => {
                e.preventDefault();
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer-socials">
          <a href="https://github.com/MrGroot01" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fa-brands fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/kirandt/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in" />
          </a>
          <a href="mailto:kirand09876@gmail.com" aria-label="Email">
            <i className="fa-solid fa-envelope" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {currentYear} <span>Kiran D T</span>. All rights reserved.
        </p>
        <p className="footer-credit">
          Built with <span style={{ color: '#e55' }}>♥</span> using React.js &amp; Django
        </p>
      </div>

      <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
        <i className="fa-solid fa-chevron-up" />
      </button>
    </footer>
  );
};

export default Footer;

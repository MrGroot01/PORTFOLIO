import React, { useState, useEffect, useCallback } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
    const sections = navLinks.map(l => l.href.slice(1));
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && window.scrollY >= el.offsetTop - 120) {
        setActive(sections[i]);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a className="nav-logo" href="#hero" onClick={e => handleNavClick(e, '#hero')}>
          <span className="logo-sym">&lt;</span>KDT<span className="logo-sym">/&gt;</span>
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href.slice(1) ? 'active' : ''}
                onClick={e => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? (
              <i className="fa-solid fa-sun" />
            ) : (
              <i className="fa-solid fa-moon" />
            )}
          </button>
          <a
            href="#contact"
            className="btn btn-primary nav-cta"
            onClick={e => handleNavClick(e, '#contact')}
          >
            Hire Me
          </a>
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className={active === link.href.slice(1) ? 'active' : ''}
            onClick={e => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="btn btn-primary"
          style={{ marginTop: '0.5rem', justifyContent: 'center' }}
          onClick={e => handleNavClick(e, '#contact')}
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

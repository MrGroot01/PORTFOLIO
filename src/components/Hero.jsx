import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.classList.add('animate');
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-grid-lines" aria-hidden />
      <div className="container hero-container">
        <div className="hero-badge fade-up visible">
          <span className="badge-dot" />
          Available for opportunities
        </div>

        <h1 className="hero-title" ref={titleRef}>
          <span className="hero-greeting">Hi, I'm</span>
          <span className="hero-name">Kiran D T</span>
          <span className="hero-role">
            Python Full Stack Developer
            <span className="role-accent"> (Django | React.js)</span>
          </span>
        </h1>

        <p className="hero-tagline fade-up visible delay-2">
          Building scalable and user-friendly web applications
        </p>

        <div className="hero-stack fade-up visible delay-3">
          {['Python', 'Django', 'React.js', 'REST API', 'SQL'].map(tag => (
            <span key={tag} className="stack-tag">{tag}</span>
          ))}
        </div>

        <div className="hero-actions fade-up visible delay-4">
          <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
            <i className="fa-solid fa-rocket" /> View Projects
          </button>
          <button className="btn btn-outline" onClick={() => scrollTo('contact')}>
            <i className="fa-solid fa-paper-plane" /> Contact Me
          </button>
        </div>

        <div className="hero-socials fade-up visible delay-5">
          <a href="https://github.com/MrGroot01" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
            <i className="fa-brands fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/kirandt/" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in" />
          </a>
          <a href="mailto:kirand09876@gmail.com" className="social-link" aria-label="Email">
            <i className="fa-solid fa-envelope" />
          </a>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll Down</span>
      </div>

      {/* Decorative code block */}
      <div className="hero-code-decor" aria-hidden>
        <pre>{`class KiranDT:
  role = "Full Stack Dev"
  stack = ["Python", "Django",
           "React.js", "REST API"]
  status = "Open to Work ✓"`}</pre>
      </div>
    </section>
  );
};

export default Hero;

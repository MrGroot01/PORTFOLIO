import React from 'react';
import useScrollReveal from './useScrollReveal';
import './About.css';

const highlights = [
  { icon: 'fa-code', label: 'Languages', value: 'Python · JS · SQL' },
  { icon: 'fa-layer-group', label: 'Stack', value: 'Django · React.js' },
  { icon: 'fa-briefcase', label: 'Experience', value: 'Internship + Projects' },
  { icon: 'fa-graduation-cap', label: 'Status', value: 'Fresher · Open to Work' },
];

const About = () => {
  useScrollReveal();

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <p className="section-label fade-up">About Me</p>
            <h2 className="section-title fade-up delay-1">
              Passionate about building <span className="title-accent">impactful</span> products
            </h2>
            <p className="about-bio fade-up delay-2">
              Results-driven <strong>Python Full Stack Developer</strong> with hands-on experience in{' '}
              <strong>Django</strong> and <strong>React.js</strong>. Skilled in building end-to-end
              applications, REST API integration, and responsive UI design.
            </p>
            <p className="about-bio fade-up delay-3">
              As a fresher with internship experience, I bring fresh perspectives combined with
              practical knowledge gained through real-world projects. I thrive in collaborative
              environments and am committed to writing clean, maintainable code.
            </p>
            <div className="about-actions fade-up delay-4">
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={e => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}
              >
                <i className="fa-solid fa-paper-plane" /> Let's Connect
              </a>
              <a
                href="#projects"
                className="btn btn-outline"
                onClick={e => { e.preventDefault(); document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }); }}
              >
                View My Work
              </a>
            </div>
          </div>

          <div className="about-right">
            <div className="about-avatar-wrap fade-in delay-2">
              <div className="about-avatar">
                <div className="avatar-initials">KDT</div>
                <div className="avatar-ring" />
                <div className="avatar-ring ring-2" />
              </div>
              <div className="avatar-status">
                <span className="badge-dot" />
                Open to opportunities
              </div>
            </div>

            <div className="about-highlights">
              {highlights.map((h, i) => (
                <div key={h.label} className={`highlight-card fade-up delay-${i + 2}`}>
                  <div className="highlight-icon">
                    <i className={`fa-solid ${h.icon}`} />
                  </div>
                  <div>
                    <p className="highlight-label">{h.label}</p>
                    <p className="highlight-value">{h.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import useScrollReveal from './useScrollReveal';
import './Resume.css';

const highlights = [
  {
    icon: 'fa-briefcase',
    title: 'Internship Experience',
    desc: 'Hands-on experience with Django & React.js through internship projects',
    color: '#00d4aa',
  },
  {
    icon: 'fa-rocket',
    title: '3 Live Projects',
    desc: 'Deployed production applications on Vercel and Render',
    color: '#7c3aed',
  },
  {
    icon: 'fa-code-branch',
    title: 'Full Stack Proficiency',
    desc: 'End-to-end development from database to responsive UI',
    color: '#f59e0b',
  },
  {
    icon: 'fa-plug',
    title: 'API Integration',
    desc: 'REST API design, development, and seamless frontend integration',
    color: '#06b6d4',
  },
];

const Resume = () => {
  useScrollReveal();

  return (
    <section className="section resume-section" id="resume">
      <div className="container">
        <div className="resume-grid">
          <div className="resume-left fade-up">
            <p className="section-label">My Resume</p>
            <h2 className="section-title">
              Experience &amp; <span className="title-accent">Qualifications</span>
            </h2>
            <p className="resume-desc">
              Fresher Python Full Stack Developer with a strong foundation in web development,
              practical internship experience, and a portfolio of deployed projects.
            </p>
            <div className="resume-actions">
              <a
                href="/Kiran_DT_Resume.pdf"
                download
                className="btn btn-primary"
              >
                <i className="fa-solid fa-download" />
                Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/kirandt/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                <i className="fa-brands fa-linkedin-in" />
                LinkedIn Profile
              </a>
            </div>

            {/* Education */}
            <div className="resume-timeline fade-up delay-2">
              <h3 className="timeline-heading">Education</h3>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="timeline-date">2021 – 2025</span>
                  <h4>Bachelor of Engineering</h4>
                  <p>Computer Science &amp; Engineering</p>
                  <span className="timeline-status">Graduated</span>
                </div>
              </div>
            </div>
          </div>

          <div className="resume-right">
            <div className="resume-highlights">
              {highlights.map((h, i) => (
                <div key={h.title} className={`resume-card card fade-up delay-${i + 1}`} style={{ '--card-color': h.color }}>
                  <div className="resume-card-icon">
                    <i className={`fa-solid ${h.icon}`} />
                  </div>
                  <div>
                    <h3 className="resume-card-title">{h.title}</h3>
                    <p className="resume-card-desc">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills summary */}
            <div className="resume-skills-summary card fade-up delay-3">
              <h3 className="skills-sum-title">Core Competencies</h3>
              <div className="competencies-wrap">
                {[
                  'Python Programming', 'Django Framework', 'React.js',
                  'REST API Design', 'SQL & Databases', 'Git & Version Control',
                  'Responsive UI Design', 'Problem Solving',
                ].map(c => (
                  <span key={c} className="competency-tag">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

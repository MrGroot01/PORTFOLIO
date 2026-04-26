import React from 'react';
import useScrollReveal from './useScrollReveal';
import './Skills.css';

const skillGroups = [
  {
    category: 'Languages',
    icon: 'fa-code',
    color: '#00d4aa',
    skills: [
      { name: 'Python', level: 88 },
      { name: 'JavaScript', level: 80 },
      { name: 'SQL', level: 75 },
    ],
  },
  {
    category: 'Frontend',
    icon: 'fa-layer-group',
    color: '#7c3aed',
    skills: [
      { name: 'React.js', level: 82 },
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
    ],
  },
  {
    category: 'Backend',
    icon: 'fa-server',
    color: '#f59e0b',
    skills: [
      { name: 'Django', level: 85 },
      { name: 'REST API', level: 80 },
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: 'fa-screwdriver-wrench',
    color: '#06b6d4',
    skills: [
      { name: 'Git & GitHub', level: 82 },
      { name: 'Vercel', level: 78 },
      { name: 'Render', level: 72 },
    ],
  },
];

const techIcons = [
  { name: 'Python', icon: 'fa-brands fa-python', color: '#3776ab' },
  { name: 'Django', icon: 'fa-solid fa-d', color: '#0c4b33' },
  { name: 'React', icon: 'fa-brands fa-react', color: '#61dafb' },
  { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#f7df1e' },
  { name: 'HTML', icon: 'fa-brands fa-html5', color: '#e34f26' },
  { name: 'CSS', icon: 'fa-brands fa-css3-alt', color: '#1572b6' },
  { name: 'GitHub', icon: 'fa-brands fa-github', color: '#ffffff' },
  { name: 'Git', icon: 'fa-brands fa-git-alt', color: '#f05032' },
];

const Skills = () => {
  useScrollReveal();

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-header fade-up">
          <p className="section-label">Technical Expertise</p>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-subtitle">
            A curated stack of tools I use to build robust, production-ready applications.
          </p>
        </div>

        {/* Tech icon pills */}
        <div className="tech-icons-row fade-up delay-1">
          {techIcons.map(t => (
            <div key={t.name} className="tech-icon-pill">
              <i className={t.icon} style={{ color: t.color }} />
              <span>{t.name}</span>
            </div>
          ))}
        </div>

        {/* Skill cards with progress bars */}
        <div className="skills-grid">
          {skillGroups.map((group, gi) => (
            <div key={group.category} className={`skill-card card fade-up delay-${gi + 1}`}>
              <div className="skill-card-header">
                <div className="skill-icon" style={{ '--icon-color': group.color }}>
                  <i className={`fa-solid ${group.icon}`} />
                </div>
                <h3 className="skill-category">{group.category}</h3>
              </div>
              <div className="skill-bars">
                {group.skills.map(skill => (
                  <div key={skill.name} className="skill-bar-item">
                    <div className="skill-bar-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        style={{ '--target-width': `${skill.level}%`, '--bar-color': group.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

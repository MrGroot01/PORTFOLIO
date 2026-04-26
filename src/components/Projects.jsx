import React from 'react';
import useScrollReveal from './useScrollReveal';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Web Application',
    description:
      'Full-stack eCommerce platform with cart, authentication, and API integration. Features product listing, user auth, shopping cart, and order management.',
    tech: ['React.js', 'Django', 'REST API', 'Python'],
    live: 'https://ecomerce-website-gold.vercel.app/',
    github: 'https://github.com/MrGroot01',
    featured: true,
    color: '#00d4aa',
    icon: 'fa-cart-shopping',
    tag: 'Full Stack',
  },
  {
    id: 2,
    title: 'Book My Show Clone',
    description:
      'Movie booking web application with clean UI, navigation, and movie listing. Replicates the core booking experience with modern design.',
    tech: ['React.js', 'HTML5', 'CSS3', 'JavaScript'],
    live: 'https://book-my-show-gf7w.vercel.app/',
    github: 'https://github.com/MrGroot01',
    featured: false,
    color: '#f59e0b',
    icon: 'fa-ticket',
    tag: 'Frontend',
  },
  {
    id: 3,
    title: 'Event Management System',
    description:
      'CRUD-based Django application for creating, reading, updating, and deleting events. Includes admin dashboard and user management.',
    tech: ['Django', 'Python', 'SQL', 'HTML/CSS'],
    live: null,
    github: 'https://github.com/MrGroot01',
    featured: false,
    color: '#7c3aed',
    icon: 'fa-calendar-days',
    tag: 'Backend',
  },
];

const Projects = () => {
  useScrollReveal();

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header fade-up">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of real-world applications built with Django and React.js,
            showcasing end-to-end development capabilities.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className={`project-card card fade-up delay-${i + 1} ${project.featured ? 'featured' : ''}`}
              style={{ '--project-color': project.color }}
            >
              {/* Top bar */}
              <div className="project-topbar">
                <div className="project-icon-wrap">
                  <i className={`fa-solid ${project.icon}`} />
                </div>
                <span className="project-tag">{project.tag}</span>
                {project.featured && <span className="featured-badge">Featured</span>}
              </div>

              {/* Content */}
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                {/* Tech stack */}
                <div className="project-tech">
                  {project.tech.map(t => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="project-actions">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary project-btn"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square" />
                    Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline project-btn"
                >
                  <i className="fa-brands fa-github" />
                  Source Code
                </a>
              </div>

              {/* Decorative glowing accent */}
              <div className="project-glow" />
            </article>
          ))}
        </div>

        <div className="projects-cta fade-up">
          <a
            href="https://github.com/MrGroot01"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            <i className="fa-brands fa-github" />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

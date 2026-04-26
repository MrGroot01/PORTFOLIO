import React, { useState } from 'react';
import useScrollReveal from './useScrollReveal';
import './Contact.css';

const contactLinks = [
  {
    icon: 'fa-envelope',
    label: 'Email',
    value: 'kirand09876@gmail.com',
    href: 'mailto:kirand09876@gmail.com',
    color: '#00d4aa',
  },
  {
    icon: 'fa-brands fa-linkedin-in',
    label: 'LinkedIn',
    value: 'linkedin.com/in/kirandt',
    href: 'https://www.linkedin.com/in/kirandt/',
    color: '#0a66c2',
  },
  {
    icon: 'fa-brands fa-github',
    label: 'GitHub',
    value: 'github.com/MrGroot01',
    href: 'https://github.com/MrGroot01',
    color: '#f0f0f8',
  },
];

const Contact = () => {
  useScrollReveal();

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');

    // EmailJS integration (configure your credentials)
    // To enable: npm install @emailjs/browser
    // Then replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY
    try {
      // Simulating send for demo — replace with real EmailJS call:
      // await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY');
      await new Promise(res => setTimeout(res, 1500)); // simulate network
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Left: Info */}
          <div className="contact-left fade-up">
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title">
              Let's build something <span className="title-accent">great together</span>
            </h2>
            <p className="contact-desc">
              I'm actively looking for opportunities as a Python Full Stack Developer.
              Whether you have a project, internship, or full-time role — feel free to reach out!
            </p>

            <div className="contact-links">
              {contactLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="contact-link-card fade-up"
                  style={{ '--link-color': link.color }}
                >
                  <div className="contact-link-icon">
                    <i className={`fa-solid ${link.icon.includes('fa-brands') ? '' : ''}${link.icon}`} />
                  </div>
                  <div>
                    <p className="link-label">{link.label}</p>
                    <p className="link-value">{link.value}</p>
                  </div>
                  <i className="fa-solid fa-arrow-right link-arrow" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-right fade-up delay-2">
            <div className="contact-form-wrap card">
              <h3 className="form-title">Send a Message</h3>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Job Opportunity / Project Discussion"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <><i className="fa-solid fa-spinner fa-spin" /> Sending...</>
                  ) : (
                    <><i className="fa-solid fa-paper-plane" /> Send Message</>
                  )}
                </button>

                {status === 'success' && (
                  <div className="form-feedback success">
                    <i className="fa-solid fa-circle-check" />
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div className="form-feedback error">
                    <i className="fa-solid fa-circle-xmark" />
                    Something went wrong. Please try emailing directly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

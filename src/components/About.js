import React from 'react';
import './About.css';

const About = () => {
  const services = [
    {
      icon: 'backend',
      title: 'Backend Development',
      description: 'Building scalable APIs, databases, and server-side solutions'
    },
    {
      icon: 'frontend',
      title: 'Frontend Development',
      description: 'Creating responsive and modern user interfaces'
    },
    {
      icon: 'devops',
      title: 'DevOps',
      description: 'Deployment, cloud infrastructure, and CI/CD pipelines'
    }
  ];

  const stats = [
    { number: '10+', label: 'Completed Projects' },
    { number: '100%', label: 'Client satisfaction' },
    { number: '5+', label: 'Years of experience' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-services">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <div className="service-icon-wrapper">
                  {service.icon === 'backend' && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                      <path d="M7 8h10M7 12h10M7 16h4"></path>
                    </svg>
                  )}
                  {service.icon === 'frontend' && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                      <circle cx="7" cy="8" r="1"></circle>
                      <circle cx="12" cy="8" r="1"></circle>
                      <circle cx="17" cy="8" r="1"></circle>
                    </svg>
                  )}
                  {service.icon === 'devops' && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                      <rect x="2" y="8" width="4" height="4"></rect>
                      <rect x="6" y="6" width="4" height="4"></rect>
                      <rect x="10" y="4" width="4" height="4"></rect>
                      <circle cx="18" cy="6" r="1"></circle>
                    </svg>
                  )}
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
                {index < services.length - 1 && <div className="service-connector"></div>}
              </div>
            ))}
          </div>
          
          <div className="about-info">
            <h2 className="about-title">About me</h2>
            <div className="about-text">
              <p className="about-paragraph">
                I'm a <strong>full-stack developer and DevOps engineer</strong> with experience delivering <strong>10+ real-world projects</strong>, 
                building scalable, secure, and production-ready web applications. My expertise spans frontend development, 
                backend architecture, and DevOps practices, with a strong focus on clean architecture, performance, reliability, and infrastructure automation.
              </p>
              <p className="about-paragraph">
                I've built and deployed platforms including <strong>Vissioon</strong>, <strong>TalentSource</strong>, 
                <strong>Done Workspace</strong>, and <strong>MailCub</strong>, covering use cases like business websites, 
                SaaS platforms, admin dashboards, authentication systems, and third-party integrations. I handle the complete 
                development lifecycle from coding to deployment, including server setup, Dockerized deployments, Nginx configuration, 
                SSL management, CI/CD pipelines, and cloud infrastructure, ensuring applications run smoothly and efficiently in production.
              </p>
            </div>
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
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

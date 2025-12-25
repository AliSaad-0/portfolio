import React, { useState } from 'react';
import './Projects.css';

const ProjectCard = ({ project }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        {!imageError && (
          <img 
            src={project.image} 
            alt={project.name}
            className="project-image"
            style={{display: imageLoaded ? 'block' : 'none'}}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImageError(true);
              setImageLoaded(false);
            }}
          />
        )}
        {(imageError || !imageLoaded) && (
          <div className="project-image-placeholder">
            <div className="placeholder-content">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              <span>{project.name}</span>
            </div>
          </div>
        )}
        <div className="project-overlay">
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-overlay-link"
          >
            View Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
      <div className="project-content">
        <div className="project-header">
          <span className="project-category">{project.category}</span>
        </div>
        <h3 className="project-name">{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <a 
          href={project.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="project-link"
        >
          Visit Project
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      name: 'Vissioon',
      url: 'https://vissioon.co/',
      description: 'A comprehensive business platform with modern design and robust functionality.',
      category: 'Business Website',
      image: '/images/vissioon.png'
    },
    {
      name: 'TalentSource',
      url: 'https://talentsourceplatform.com/',
      description: 'A talent management and sourcing platform built for scalability and performance.',
      category: 'SaaS Platform',
      image: '/images/TalentSource.png'
    },
    {
      name: 'Done Workspace',
      url: 'https://doneworkspace.com/',
      description: 'A productivity and workspace management solution with intuitive user experience.',
      category: 'SaaS Platform',
      image: '/images/Done.png'
    },
    {
      name: 'MailCub',
      url: 'https://mailcub.com/',
      description: 'An email management and communication platform with advanced features.',
      category: 'SaaS Platform',
      image: '/images/mailcub.png'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Real-world applications built with modern technologies and deployed to production
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


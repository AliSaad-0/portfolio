import React from 'react';
import './Skills.css';

const Skills = () => {
  const technologies = [
    'HTML5',
    'CSS',
    'Javascript',
    'Node.js',
    'React',
    'Git',
    'Github',
    'DevOps'
  ];

  return (
    <section className="skills-bar">
      <div className="container">
        <div className="skills-list">
          {technologies.map((tech, index) => (
            <span key={index} className="skill-item">{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


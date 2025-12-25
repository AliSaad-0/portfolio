import React from 'react';
import './Hero.css';

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            Full-Stack Developer & DevOps Engineer
                        </h1>
                        <p className="hero-tech-stack">
                            Node.js • Express • MongoDB • React • Docker • AWS • CI/CD
                        </p>
                        <p className="hero-subtitle">
                            I build scalable, secure web applications and automate cloud infrastructure to production.
                        </p>
                        <div className="hero-buttons">
                            <button
                                className="btn btn-primary"
                                onClick={() => scrollToSection('projects')}
                            >
                                View Projects
                            </button>
                            <button
                                className="btn btn-secondary"
                                onClick={() => scrollToSection('contact')}
                            >
                                Get In Touch
                            </button>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="hero-image-wrapper">
                            <div className="glow-circle"></div>
                            <div className="profile-image-container">
                                <img
                                    src="/images/profile.png"
                                    alt="Saad - Full Stack Developer & DevOps Engineer"
                                    className="profile-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;


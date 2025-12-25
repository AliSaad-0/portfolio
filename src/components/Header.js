import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrollingProgrammatically, setIsScrollingProgrammatically] = useState(false);

  useEffect(() => {
    let scrollTimeout;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Skip active section detection if we're programmatically scrolling
      if (isScrollingProgrammatically) {
        return;
      }

      // Clear any pending timeout
      clearTimeout(scrollTimeout);

      // Debounce scroll detection to avoid multiple updates during smooth scroll
      scrollTimeout = setTimeout(() => {
        const sections = ['hero', 'about', 'projects', 'contact'];
        const scrollPosition = window.scrollY;
        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 80;
        const triggerPoint = scrollPosition + headerHeight + 200; // Point where section becomes active

        let currentSection = 'hero';

        // Find the section that the trigger point is currently in
        // Check from bottom to top to get the most recent section
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section) {
            const sectionTop = section.offsetTop;
            
            // If trigger point has passed this section's top, this is the active section
            if (triggerPoint >= sectionTop) {
              currentSection = sections[i];
              break;
            }
          }
        }

        // Update active section - this ensures only one section is active
        setActiveSection(currentSection);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on mount
    
    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrollingProgrammatically]);

  const scrollToSection = (sectionId) => {
    // Immediately update active section and disable scroll detection temporarily
    setActiveSection(sectionId);
    setIsScrollingProgrammatically(true);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const header = document.querySelector('.header');
      const headerHeight = header ? header.offsetHeight : 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = Math.max(0, elementPosition - headerHeight);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Re-enable scroll detection after scroll animation completes
      setTimeout(() => {
        setIsScrollingProgrammatically(false);
        // Force update active section after scroll
        setActiveSection(sectionId);
      }, 800); // Smooth scroll typically takes ~500-700ms
    } else {
      setIsScrollingProgrammatically(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="logo" onClick={() => scrollToSection('hero')}>
            Ali Saad
          </div>
          <ul className="nav-links">
            <li>
              <a 
                href="#hero" 
                className={activeSection === 'hero' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={activeSection === 'about' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className={activeSection === 'projects' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;


import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            © {currentYear} Ali Saad. All rights reserved.
          </p>
          <p className="footer-copyright">
            Node.js • Express • MongoDB • React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


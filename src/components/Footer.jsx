import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-brand">
          <img src="/iconRDD.png" alt="Red Darter Icon" className="footer-icon" />
          <span className="footer-title text-gradient">Red Darter Dev</span>
        </div>
        
        <div className="footer-links">
          <a href="#github" className="footer-link">GitHub</a>
          <a href="#linkedin" className="footer-link">LinkedIn</a>
          <a href="#twitter" className="footer-link">X / Twitter</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Red Darter Dev. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Merin</h3>
            <p>Full Stack Developer passionate about creating amazing web experiences.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <button className="social-btn" onClick={() => window.open('https://github.com/lilacmoon0', '_blank')}>GitHub</button>
              <button className="social-btn" onClick={() => window.open('https://linkedin.com', '_blank')}>LinkedIn</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Merin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

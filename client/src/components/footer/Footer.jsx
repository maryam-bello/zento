import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
      <div className="footer-left">
        <p>&copy; 2025 Zento. All rights reserved.</p>
      </div>
      <div className="footer-right">
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </div>
  </footer>
  );
};

export default Footer;

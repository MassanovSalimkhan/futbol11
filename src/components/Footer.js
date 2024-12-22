import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>FUTBOL11</h4>
          <ul>
            <li>About</li>
            <li>Advertising</li>
            <li>Contact us</li>
            <li>Terms</li>
            <li>Privacy Policy</li>
            <li>Settings</li>
            <li>Videos</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>CONTENT</h4>
          <ul>
            <li>Widgets</li>
            <li>Content</li>
          </ul>
          <h4>ODDS FORMAT</h4>
          <ul>
            <li>Decimal</li>
            <li>Fractional</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>MOBILE</h4>
          <ul>
            <li>iPhone</li>
            <li>Samsung</li>
          </ul>
          <h4>SOCIAL</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>STATS PERFORM BRANDS</h4>
          <ul>
            <li>The Analyst</li>
            <li>Premier League</li>
            <li>La Liga</li>
            <li>Serie A</li>
            <li>Ligue 1</li>
            <li>Bundesliga</li>
            <li>UEFA Champions League</li>
            <li>UEFA Europe Ligue</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright ©2024 All rights reserved.</p>
        <p>salimkhan & Ilimbek IT-122</p>
      </div>
    </footer>
  );
};

export default Footer;

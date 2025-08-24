import React from 'react';
import { FaTwitter, FaInstagram, FaDiscord, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    { icon: FaTwitter, url: 'https://x.com/saurabhhfxhist', label: 'Twitter' },
    { icon: FaInstagram, url: 'https://www.instagram.com/saurabhhfx/hist', label: 'Instagram' },
    { icon: FaDiscord, url: 'https://discordapp.com/users/789831160586436638', label: 'Discord' },
    { icon: FaEnvelope, url: 'mailto:deshmukhsaurabh915@gmail.com', label: 'Email' },
    { icon: FaPhone, url: 'tel:+918830097740', label: 'Phone' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Performance', href: '#stats' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Trading Signals',
    'Market Analysis',
    'Risk Management',
    'Portfolio Review',
    'Trading Mentorship',
    'Strategy Development'
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/logo.png" alt="Saurabh FX" className="footer-logo-img" />
              <span className="footer-logo-text">Saurabh<span className="highlight">FX</span></span>
            </div>
            <p className="footer-description">
              Professional forex trader with 5+ years of experience in global financial markets.
              Specializing in technical analysis, risk management, and profitable trading strategies.
            </p>
            <div className="follow-me-section">
              <h3>Follow Me</h3>
              <p className="follow-description">
                Stay updated with my latest trading insights and market analysis
              </p>
              <div className="social-media-grid">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-media-item"
                  >
                    <social.icon className="social-icon" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:deshmukhsaurabh915@gmail.com">
                  deshmukhsaurabh915@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <a href="tel:+918830097740">+91 8830097740</a>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Ranjangaon, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-section location-section">
          <h3>Our Location</h3>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30234.567890123456!2d74.2306278!3d18.7566879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc329b1b121b91d%3A0x3acc4c303bc3165e!2sRanjangaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123"
              width="100%"
              height="180"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ranjangaon Location"
            ></iframe>
          </div>
          <p className="location-text">
            <FaMapMarkerAlt className="location-icon" />
            Ranjangaon, Maharashtra, India
          </p>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>
              &copy; 2024 Saurabh Deshmukh. All rights reserved. |
              Professional Forex Trader & Market Analyst
            </p>
            <p className="footer-love">
              Made with <FaHeart className="heart-icon" /> for trading excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
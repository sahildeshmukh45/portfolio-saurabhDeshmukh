import React, { useState, useEffect } from 'react';
import { FaTwitter, FaInstagram, FaDiscord, FaEnvelope, FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { icon: FaTwitter, url: 'https://x.com/saurabhhfxhist', label: 'Twitter' },
    { icon: FaInstagram, url: 'https://www.instagram.com/saurabhhfx/hist', label: 'Instagram' },
    { icon: FaDiscord, url: 'https://discordapp.com/users/789831160586436638', label: 'Discord' },
    { icon: FaEnvelope, url: 'mailto:deshmukhsaurabh915@gmail.com', label: 'Email' },
    { icon: FaPhone, url: 'tel:+918830097740', label: 'Phone' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src="/logo.png" alt="Saurabh FX" className="logo-img" />
            <span className="logo-text">Saurabh<span className="highlight">FX</span></span>
          </div>

          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#stats" onClick={() => setIsMobileMenuOpen(false)}>Performance</a>
            <a href="#certificates" onClick={() => setIsMobileMenuOpen(false)}>Certificates</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          </nav>

          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.label}
              >
                <social.icon />
              </a>
            ))}
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import { FaChartLine, FaDollarSign, FaTrophy } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const handleVideoError = (e) => {
    console.error('Video failed to load:', e);
  };

  const handleVideoLoad = () => {
    console.log('Video loaded successfully');
  };

  return (
    <section id="home" className="hero">
      <div className="video-background">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls={false}
          onError={handleVideoError}
          onLoadedData={handleVideoLoad}
          src="/204292-923909617.mp4"
        >
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="name">Saurabh Deshmukh</span>
              <span className="subtitle">Forex + Prop Firm Trader</span>
            </h1>



            <div className="hero-stats">
              <div className="stat-item">
                <FaChartLine className="stat-icon" />
                <div className="stat-content">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
              </div>

              <div className="stat-item">
                <FaDollarSign className="stat-icon" />
                <div className="stat-content">
                  <span className="stat-number">85%</span>
                  <span className="stat-label">Win Rate</span>
                </div>
              </div>

              <div className="stat-item">
                <FaTrophy className="stat-icon" />
                <div className="stat-content">
                  <span className="stat-number">1000+</span>
                  <span className="stat-label">Successful Trades</span>
                </div>
              </div>
            </div>

            <div className="hero-actions">
              <a href="#contact" className="btn-primary">Get Trading Signals</a>
              <a href="#certificates" className="btn-secondary">View Credentials</a>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Hero;
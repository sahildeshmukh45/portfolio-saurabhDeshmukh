import React from 'react';
import { FaGraduationCap, FaChartBar, FaUsers, FaAward } from 'react-icons/fa';
import './About.css';

const About = () => {
  const skills = [
    { name: 'Technical Analysis', level: 95 },
    { name: 'Risk Management', level: 92 },
    { name: 'Market Psychology', level: 88 },
    { name: 'Algorithmic Trading', level: 85 },
    { name: 'Portfolio Management', level: 90 },
    { name: 'Financial Planning', level: 87 }
  ];

  const achievements = [
    {
      icon: FaGraduationCap,
      title: 'Certified Trader',
      description: 'Multiple professional trading certifications from recognized institutions'
    },
    {
      icon: FaChartBar,
      title: 'Consistent Performance',
      description: 'Maintained profitable trading record for over 5 consecutive years'
    },
    {
      icon: FaUsers,
      title: 'Mentorship',
      description: 'Guided 200+ aspiring traders to achieve their financial goals'
    },
    {
      icon: FaAward,
      title: 'Recognition',
      description: 'Featured in trading publications and forex community platforms'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="hero-description-section">
          <div className="description-card glass-effect">
            <p className="main-description">
              Transforming market volatility into consistent profits through advanced technical analysis,
              risk management, and years of trading expertise in the global forex markets.
            </p>
          </div>
        </div>
        
        <h2 className="section-title">About Saurabh</h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="intro-card glass-effect">
              <h3>Professional Journey</h3>
              <p>
                With over 5 years of dedicated experience in forex trading, I've developed a comprehensive 
                understanding of global financial markets. My journey began with a passion for understanding 
                market dynamics and has evolved into a successful trading career built on discipline, 
                continuous learning, and strategic risk management.
              </p>
              
              <p>
                Based in Ranjangaon, Maharashtra, I specialize in currency pair analysis, technical indicators, 
                and developing profitable trading strategies. My approach combines fundamental analysis with 
                advanced technical tools to identify high-probability trading opportunities.
              </p>
              
              <p>
                I believe in sharing knowledge and empowering others to achieve financial independence through 
                smart trading decisions. My trading philosophy centers around patience, discipline, and 
                continuous market education.
              </p>
            </div>
            
            <div className="skills-section">
              <h3>Trading Expertise</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="achievements-section">
            <h3>Key Achievements</h3>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card glass-effect">
                  <div className="achievement-icon">
                    <achievement.icon />
                  </div>
                  <h4>{achievement.title}</h4>
                  <p>{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
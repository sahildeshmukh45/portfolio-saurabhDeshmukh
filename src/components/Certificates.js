import React, { useState } from 'react';
import { FaAward, FaCertificate, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import './Certificates.css';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      title: 'Advanced Forex Trading Certification',
      issuer: 'Professional Trading Institute',
      date: '2025',
      image: '/Certificate/certificate.png',
      description: 'Comprehensive certification covering advanced forex trading strategies, risk management, and market analysis techniques.',
      skills: ['Technical Analysis', 'Risk Management', 'Market Psychology', 'Trading Strategies']
    },
    {
      id: 2,
      title: 'Funding Traders Funded Certificate',
      issuer: 'Funding Traders Academy',
      date: '2025',
      image: '/Certificate/FundingTraders_Funded_Certificate.jpg',
      description: 'Specialized certification demonstrating successful completion of funded trading program with proven profitability.',
      skills: ['Funded Trading', 'Risk Management', 'Profit Consistency', 'Professional Trading']
    },
    {
      id: 3,
      title: 'Professional Trading Certificate',
      issuer: 'Trading Excellence Institute',
      date: '2025',
      image: '/Certificate/Passed Certificate.jpg',
      description: 'Professional-level certification demonstrating expertise in trading methodologies and portfolio management.',
      skills: ['Portfolio Management', 'Trading Psychology', 'Advanced Charting', 'Risk Assessment']
    },
    {
      id: 4,
      title: 'Advanced Trading Certification',
      issuer: 'Global Trading Academy',
      date: '2025',
      image: '/Certificate/Certificate 48789ba5-0690-4baf-968c-dac6874fd3b8.jpg',
      description: 'Advanced certification in professional trading strategies and market analysis with focus on consistent profitability.',
      skills: ['Market Analysis', 'Trading Strategies', 'Risk Control', 'Performance Optimization']
    },
    {
      id: 5,
      title: 'Prop Firm Trading Certification',
      issuer: 'Elite Prop Trading Institute',
      date: '2025',
      image: '/Certificate/certificatenew.png',
      description: 'Specialized certification for proprietary firm trading with emphasis on capital preservation and consistent returns.',
      skills: ['Prop Trading', 'Capital Management', 'Drawdown Control', 'Scalping Strategies']
    },
    {
      id: 6,
      title: 'Risk Management Excellence',
      issuer: 'Financial Risk Management Academy',
      date: '2025',
      image: '/Certificate/CER1342739.png',
      description: 'Expert-level certification in financial risk management and portfolio protection strategies for professional traders.',
      skills: ['Risk Assessment', 'Portfolio Protection', 'Volatility Management', 'Loss Prevention']
    }
  ];

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <h2 className="section-title">Professional Certifications</h2>
        
        <div className="certificates-intro">
          <p>
            My commitment to professional excellence is demonstrated through continuous education 
            and certification from recognized trading institutions. These credentials validate my 
            expertise in forex trading, risk management, and financial market analysis.
          </p>
        </div>

        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card glass-effect">
              <div className="certificate-image">
                <img src={cert.image} alt={cert.title} />
                <div className="certificate-overlay">
                  <button 
                    className="view-certificate"
                    onClick={() => openModal(cert)}
                  >
                    <FaExternalLinkAlt />
                    View Certificate
                  </button>
                </div>
              </div>
              
              <div className="certificate-content">
                <div className="certificate-header">
                  <FaCertificate className="cert-icon" />
                  <div className="cert-info">
                    <h3>{cert.title}</h3>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                </div>
                
                <p className="cert-description">{cert.description}</p>
                
                <div className="cert-skills">
                  {cert.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="credentials-summary glass-effect">
          <div className="summary-content">
            <FaAward className="summary-icon" />
            <div className="summary-text">
              <h3>Verified Professional Credentials</h3>
              <p>
                All certifications are from accredited institutions and represent hundreds of hours 
                of advanced training in forex trading, technical analysis, and risk management. 
                These credentials ensure you're working with a qualified and knowledgeable trading professional.
              </p>
            </div>
          </div>
        </div>
      </div>

      {selectedCertificate && (
        <div className="certificate-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>
              <FaTimes />
            </button>
            <div className="modal-image">
              <img src={selectedCertificate.image} alt={selectedCertificate.title} />
            </div>
            <div className="modal-info">
              <h3>{selectedCertificate.title}</h3>
              <p className="modal-issuer">{selectedCertificate.issuer}</p>
              <p className="modal-date">Issued: {selectedCertificate.date}</p>
              <p className="modal-description">{selectedCertificate.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
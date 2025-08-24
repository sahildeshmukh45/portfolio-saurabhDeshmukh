import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'deshmukhsaurabh915@gmail.com',
      link: 'mailto:deshmukhsaurabh915@gmail.com'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 8830097740',
      link: 'tel:+918830097740'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Ranjangaon, Maharashtra, India',
      link: 'https://www.google.com/maps/place/Ranjangaon,+Maharashtra/@18.7566879,74.2306278,14z'
    }
  ];



  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-intro">
          <p>
            Ready to take your trading to the next level? Whether you're looking for trading signals, 
            mentorship, or have questions about forex markets, I'm here to help you succeed.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card glass-effect">
              <h3>Contact Information</h3>
              <div className="contact-methods">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index} 
                    href={info.link} 
                    className="contact-method"
                    target={info.label === 'Location' ? '_blank' : '_self'}
                    rel={info.label === 'Location' ? 'noopener noreferrer' : ''}
                  >
                    <div className="method-icon">
                      <info.icon />
                    </div>
                    <div className="method-content">
                      <span className="method-label">{info.label}</span>
                      <span className="method-value">{info.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>



            <div className="services-card glass-effect">
              <h3>Services Offered</h3>
              <ul className="services-list">
                <li>Daily Trading Signals</li>
                <li>One-on-One Mentorship</li>
                <li>Market Analysis Reports</li>
                <li>Risk Management Consultation</li>
                <li>Trading Strategy Development</li>
                <li>Portfolio Review & Optimization</li>
              </ul>
            </div>
          </div>

          <div className="contact-form-section">
            <form className="contact-form glass-effect" onSubmit={handleSubmit}>
              <h3>Send a Message</h3>
              
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
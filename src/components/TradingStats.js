import React from 'react';
import { FaChartLine, FaShieldAlt, FaClock, FaCoins } from 'react-icons/fa';
import './TradingStats.css';

const TradingStats = () => {
  const stats = [
    {
      icon: FaChartLine,
      value: '85%',
      label: 'Win Rate',
      description: 'Consistent profitable trades over 5 years'
    },
    {
      icon: FaShieldAlt,
      value: '2%',
      label: 'Max Drawdown',
      description: 'Excellent risk management practices'
    },
    {
      icon: FaClock,
      value: '1800+',
      label: 'Trading Hours',
      description: 'Dedicated market analysis time'
    },
    {
      icon: FaCoins,
      value: '15+',
      label: 'Currency Pairs',
      description: 'Diversified trading portfolio'
    }
  ];

  const tradingPairs = [
    { pair: 'EUR/USD', performance: '+12.5%', status: 'bullish' },
    { pair: 'GBP/JPY', performance: '+8.3%', status: 'bullish' },
    { pair: 'USD/CAD', performance: '+15.7%', status: 'bullish' },
    { pair: 'AUD/USD', performance: '+6.2%', status: 'bullish' },
    { pair: 'USD/CHF', performance: '+9.8%', status: 'bullish' },
    { pair: 'NZD/USD', performance: '+4.1%', status: 'neutral' }
  ];

  return (
    <section id="stats" className="trading-stats">
      <div className="container">
        <h2 className="section-title">Trading Performance</h2>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card glass-effect">
              <div className="stat-icon">
                <stat.icon />
              </div>
              <div className="stat-content">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-description">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="performance-section">
          <div className="performance-header">
            <h3>Recent Performance Overview</h3>
            <p>Monthly performance across major currency pairs</p>
          </div>
          
          <div className="pairs-grid">
            {tradingPairs.map((pair, index) => (
              <div key={index} className="pair-card glass-effect">
                <div className="pair-header">
                  <span className="pair-name">{pair.pair}</span>
                  <span className={`pair-status ${pair.status}`}></span>
                </div>
                <div className="pair-performance">
                  <span className="performance-value">{pair.performance}</span>
                  <span className="performance-period">30D</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="trading-philosophy glass-effect">
          <h3>Trading Philosophy</h3>
          <div className="philosophy-content">
            <div className="philosophy-item">
              <h4>Risk First Approach</h4>
              <p>Never risk more than 2% of capital on any single trade. Preservation of capital is the foundation of long-term success.</p>
            </div>
            <div className="philosophy-item">
              <h4>Technical Excellence</h4>
              <p>Combining multiple timeframe analysis with key support/resistance levels and momentum indicators for precise entries.</p>
            </div>
            <div className="philosophy-item">
              <h4>Emotional Discipline</h4>
              <p>Maintaining psychological control and sticking to predetermined trading plans regardless of market emotions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingStats;
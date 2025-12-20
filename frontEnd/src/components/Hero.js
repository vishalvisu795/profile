import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="gradient-text">Full Stack Developer</span>
              <br />
              & Freelancer
            </h1>
            <p className="hero-subtitle">
              Transforming ideas into powerful digital solutions through expert programming 
              and development services. Specializing in web development, automation, AI integration, 
              and cutting-edge technology solutions.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={scrollToContact}>
                Get In Touch
              </button>
              <a href="#services" className="btn-secondary">
                View Services
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card card-1">
              <div className="card-icon">⚡</div>
              <div className="card-text">Fast & Efficient</div>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">🚀</div>
              <div className="card-text">Modern Solutions</div>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">💡</div>
              <div className="card-text">Innovative Ideas</div>
            </div>
            <div className="code-block">
              <div className="code-header">
                <span className="code-dot red"></span>
                <span className="code-dot yellow"></span>
                <span className="code-dot green"></span>
              </div>
              <div className="code-content">
                <span className="code-line">
                  <span className="code-keyword">const</span> developer = {'{'}
                </span>
                <span className="code-line">
                  &nbsp;&nbsp;skills: <span className="code-string">'Full Stack'</span>,
                </span>
                <span className="code-line">
                  &nbsp;&nbsp;experience: <span className="code-number">'Expert'</span>,
                </span>
                <span className="code-line">
                  &nbsp;&nbsp;passion: <span className="code-string">'Coding'</span>
                </span>
                <span className="code-line">{'}'};</span>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


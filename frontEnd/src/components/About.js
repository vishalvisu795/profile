import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">About Me</h2>
            <p className="about-description">
              I'm a passionate full-stack developer and freelancer with a deep expertise in 
              modern web technologies, backend systems, and AI integration. With a strong foundation 
              in programming and development, I help businesses transform their ideas into 
              powerful digital solutions.
            </p>
            <p className="about-description">
              My approach combines technical excellence with practical problem-solving. Whether 
              it's building responsive websites with ReactJS, automating workflows with Python, 
              or integrating AI capabilities, I deliver solutions that are both innovative and 
              reliable.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="visual-card">
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="tech-stack">
                  <span className="tech-item">React</span>
                  <span className="tech-item">Python</span>
                  <span className="tech-item">Java</span>
                  <span className="tech-item">AWS</span>
                  <span className="tech-item">AI/ML</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


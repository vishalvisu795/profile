import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Website Development',
      description: 'Custom, responsive websites built with ReactJS and modern web technologies. From simple landing pages to complex web applications.',
      features: ['ReactJS Development', 'Responsive Design', 'Performance Optimization', 'SEO Friendly']
    },
    {
      icon: '🤖',
      title: 'Python Automation & Google Sheets',
      description: 'Automate repetitive tasks, data processing, and Google Sheets workflows using Python. Streamline your business processes.',
      features: ['Python Scripts', 'Google Sheets API', 'Data Processing', 'Workflow Automation']
    },
    {
      icon: '🔧',
      title: 'Application Debugging',
      description: 'Expert debugging services for web and mobile applications. Identify and fix bugs, optimize performance, and improve code quality.',
      features: ['Bug Fixing', 'Performance Tuning', 'Code Review', 'Error Resolution']
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications with modern frameworks. Native and hybrid solutions for iOS and Android.',
      features: ['React Native', 'Mobile UI/UX', 'API Integration', 'App Store Deployment']
    },
    {
      icon: '🤖',
      title: 'AI Integration & Chatbots',
      description: 'Build intelligent chatbots from scratch and integrate AI capabilities into your applications. Custom AI solutions tailored to your needs.',
      features: ['Custom Chatbots', 'AI Integration', 'Natural Language Processing', 'Machine Learning']
    },
    {
      icon: '☁️',
      title: 'Cloud & Backend Solutions',
      description: 'Scalable backend development with Java, Scala, Python. Cloud infrastructure setup on AWS with database optimization.',
      features: ['Backend APIs', 'AWS Services', 'Database Design', 'Microservices']
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="section-header">
          <h2 className="section-title">Services I Offer</h2>
          <p className="section-subtitle">
            Comprehensive development solutions tailored to your business needs
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="service-feature">
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


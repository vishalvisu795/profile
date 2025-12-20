import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: ['ReactJS', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design']
    },
    {
      category: 'Backend Development',
      skills: ['Java', 'Scala', 'Python', 'Node.js', 'RESTful APIs']
    },
    {
      category: 'Databases & Data',
      skills: ['PostgreSQL', 'Snowflake', 'Kafka', 'Elasticsearch', 'Data Modeling']
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS', 'Cloud Architecture', 'CI/CD', 'Infrastructure as Code']
    },
    {
      category: 'Automation & Scripting',
      skills: ['Google App Script', 'Python Automation', 'Workflow Automation', 'Data Processing']
    },
    {
      category: 'AI & Advanced',
      skills: ['AI Integration', 'Chatbot Development', 'Machine Learning', 'Natural Language Processing']
    },
    {
      category: 'System Programming',
      skills: ['C++', 'C', 'System Design', 'Performance Optimization']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            A comprehensive toolkit for building modern, scalable solutions
          </p>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="skills-highlight">
          <div className="highlight-content">
            <h3>Why Choose Me?</h3>
            <p>
              With expertise spanning from frontend ReactJS development to backend systems 
              in Java, Scala, and Python, I bring a full-stack perspective to every project. 
              My experience with modern databases, cloud infrastructure, and AI integration 
              ensures your project is built with cutting-edge technology and best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


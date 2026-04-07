import React from 'react';
import './TechStack.css';

const TechStack = () => {
  const techs = [
    "NEXT.JS",
    "TYPESCRIPT",
    "GRAPHQL",
    "DOCKER",
    "AWS",
    "REDIS",
    "REACT",
    "NODE.JS",
    "PYTHON"
  ];
  
  return (
    <section className="tech-stack-section">
      <div className="marquee-container">
        <div className="marquee-content">
          {techs.map((tech, index) => (
            <React.Fragment key={`tech1-${index}`}>
              <span className="tech-name">{tech}</span>
              <span className="dot-separator"></span>
            </React.Fragment>
          ))}
        </div>
        {/* Duplicate for seamless scrolling */}
        <div className="marquee-content" aria-hidden="true">
          {techs.map((tech, index) => (
            <React.Fragment key={`tech2-${index}`}>
              <span className="tech-name">{tech}</span>
              <span className="dot-separator"></span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
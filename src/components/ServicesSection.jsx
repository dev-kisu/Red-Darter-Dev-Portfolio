import React from 'react';
import { Layers, Smartphone, LayoutGrid, Database, ArrowRight } from 'lucide-react';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      title: "MERN Stack",
      desc: "Full-cycle development using MongoDB, Express, React, and Node.js for robust web applications.",
      Icon: Layers
    },
    {
      title: "React Native",
      desc: "High-performance cross-platform mobile apps with native-level smooth experiences and interactions.",
      Icon: Smartphone
    },
    {
      title: "Angular JS",
      desc: "Enterprise-grade single-page applications built for complexity and long-term scalability.",
      Icon: LayoutGrid
    },
    {
      title: "PostgreSQL",
      desc: "Advanced relational database design and optimization for mission-critical data integrity.",
      Icon: Database
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header-row">
          <div className="services-text-content">
            <h2 className="services-title">
              Mastering the <span className="highlight-text">Digital</span> Frontier
            </h2>
            <p className="services-subtitle">
              We don't just build websites; we create scalable digital architectures that serve as the backbone for your growth.
            </p>
          </div>
          <div className="services-bg-text">
            <span>SERVICES</span>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon-wrapper">
                <service.Icon className="service-icon" size={24} />
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.desc}</p>
              <div className="service-explore">
                <span>Explore</span>
                <ArrowRight className="explore-icon" size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
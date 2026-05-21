import React from 'react';
import { Layers, Smartphone, Database, ArrowRight, Brain, Cpu, ShieldCheck } from 'lucide-react';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      title: "MERN & Next.js Stack",
      desc: "Full-cycle responsive web environments using React 19, Next.js App Router, and scalable Node APIs.",
      Icon: Layers,
      tag: "SYS // FULLSTACK",
      specs: ["Next.js 15", "Server Components", "Express Node APIs", "Tailwind CSS"]
    },
    {
      title: "React Native & Flutter",
      desc: "High-frequency native cross-platform mobile apps with buttery interactions and native sensory triggers.",
      Icon: Smartphone,
      tag: "CORE // HYBRID-MOBILE",
      specs: ["Flutter 3.24", "React Native Core", "Swift/Kotlin Bridges", "Skia UI Canvas"]
    },
    {
      title: "AI Integration & Agents",
      desc: "Infusing models, autonomous reasoning pipelines, and structured search using OpenAI, Gemini, and LangChain.",
      Icon: Cpu,
      tag: "INTEL // AI-AGENT",
      specs: ["Gemini 1.5 API", "OpenAI Tool Calling", "LangChain Agents", "RAG Vector Flows"]
    },
    {
      title: "Machine Learning Pipelines",
      desc: "Predictive model ingestion grids, classification engines, and custom analytics arrays built with PyTorch.",
      Icon: Brain,
      tag: "DATA // COGNITIVE",
      specs: ["PyTorch Core", "Model Data Grids", "Predictive Classifiers", "CNN / RNN Architectures"]
    },
    {
      title: "Relational & Vector PostgreSQL",
      desc: "High-performance pgvector storage grids, transaction locking mechanics, and custom indexing schemas.",
      Icon: Database,
      tag: "STORAGE // VECTOR",
      specs: ["pgvector Databases", "Connection Pools", "JSONB Schemas", "Master-Slave Clusts"]
    },
    {
      title: "Rigorous QA & Testing",
      desc: "Bulletproof regression checking, automated Playwright/Jest test suites, and strict coverage gates.",
      Icon: ShieldCheck,
      tag: "PIPELINE // AUDIT",
      specs: ["E2E Playwright Gates", "Jest Mock Suites", "CI/CD Test Pipelines", "100% Core Target"]
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
              {/* Sci-Fi Neon Edge Indicator */}
              <div className="card-laser-line" />
              
              <div className="service-card-meta">
                <span className="meta-index">[ 0{index + 1} ]</span>
                <span className="meta-tag">{service.tag}</span>
              </div>

              <div className="service-icon-wrapper">
                <service.Icon className="service-icon" size={24} />
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.desc}</p>
              
              {/* Rich Technical Specs list */}
              <div className="card-specs-row">
                {service.specs.map((spec, sIdx) => (
                  <span className="card-spec-tag" key={sIdx}>{spec}</span>
                ))}
              </div>

              <div className="service-explore">
                <span>Explore Tech</span>
                <ArrowRight className="explore-icon" size={16} />
              </div>
              
              {/* Retro HUD crosshairs in the bottom corner */}
              <div className="card-hud-decor" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
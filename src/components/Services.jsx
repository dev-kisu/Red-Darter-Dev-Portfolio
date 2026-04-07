import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Layout, Cloud, Code } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      icon: <Layout size={40} className="service-icon" />,
      desc: "Crafting intuitive, highly engaging user interfaces that prioritize user experience and modern aesthetics."
    },
    {
      title: "React Web Development",
      icon: <Code size={40} className="service-icon" />,
      desc: "Building blazing-fast, interactive web applications using React, Vite, and cutting-edge state management."
    },
    {
      title: "React Native Mobile apps",
      icon: <Smartphone size={40} className="service-icon" />,
      desc: "Deploying high-performance, cross-platform mobile applications for iOS and Android with a single codebase."
    },
    {
      title: "Cloud & Deployment",
      icon: <Cloud size={40} className="service-icon" />,
      desc: "Architecting scalable cloud infrastructure, managing CI/CD pipelines, and handling seamless production deployments."
    }
  ];

  return (
    <section className="services-section section-padding">
      <motion.h2 
        className="section-title text-gradient"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Core Expertise
      </motion.h2>
      
      <div className="services-grid">
        {services.map((srv, idx) => (
          <motion.div 
            key={idx}
            className="glass-card service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            {srv.icon}
            <h3>{srv.title}</h3>
            <p>{srv.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;

import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server } from 'lucide-react';
import './ArchitectureHub.css';

const ArchitectureHub = () => {
  return (
    <section className="architecture-section section-padding">
      <motion.h2 
        className="section-title text-gradient"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        The Architecture Hub
      </motion.h2>
      <motion.p 
        className="section-subtitle"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Built on robust, scalable technologies.
      </motion.p>

      <div className="tech-grid">
        <motion.div 
          className="glass-card tech-card postgres-card"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover="hover"
          animate="drift"
          variants={{
            drift: {
              y: [0, -10, 0],
              transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            },
            hover: {
              y: 0,
              scale: 1.05,
              transition: { duration: 0.3 }
            }
          }}
        >
          <div className="data-pulse-bg"></div>
          <Database size={64} className="tech-icon" />
          <h3>PostgreSQL</h3>
          <p>Relational Data Architecture & Real-time Syncing</p>
        </motion.div>

        <motion.div 
          className="glass-card tech-card node-card"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover="hover"
          animate="drift"
          variants={{
            drift: {
              y: [0, 10, 0],
              transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            },
            hover: {
              y: 0,
              scale: 1.05,
              transition: { duration: 0.3 }
            }
          }}
        >
          <Server size={64} className="tech-icon" />
          <h3>Node.js</h3>
          <p>High-Performance Event-Driven Backend Loops</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectureHub;

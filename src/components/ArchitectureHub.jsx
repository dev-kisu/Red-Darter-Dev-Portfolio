import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Cpu, Activity, BarChart, HardDrive } from 'lucide-react';
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
        Enterprise-grade data infrastructure built for extreme horizontal scaling, concurrency, and security.
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
          <p>Relational Data Architecture, Custom pgvector Storage & Locking Mechanics</p>
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
          <p>High-Performance Event-Driven Backend Loops & High-Throughput Socket Gates</p>
        </motion.div>
      </div>

      {/* NEW SECTION: Breathtaking High-Tech Telemetry specifications dashboard */}
      <motion.div 
        className="glass-card arch-telemetry-panel"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, delay: 0.4 }}
      >
        <div className="telemetry-panel-header">
          <div className="telemetry-header-title">
            <Cpu size={16} className="telemetry-accent-icon" />
            <span>CORE SYSTEMS SPECIFICATION OVERVIEW</span>
          </div>
          <span className="telemetry-tag">ACTIVE READOUTS</span>
        </div>

        <div className="telemetry-columns">
          {/* Column 1: DB Metrics */}
          <div className="telemetry-col">
            <div className="col-meta-header">
              <HardDrive size={14} className="col-icon" />
              <span>DB INTEGRITY PARADIGMS</span>
            </div>
            
            <div className="telemetry-stat-row">
              <span className="stat-label">MAX CONNECTION POOLS</span>
              <span className="stat-value font-monospace">500 CONCURRENCY</span>
            </div>
            <div className="telemetry-stat-row">
              <span className="stat-label">REPLICATION MECHANICS</span>
              <span className="stat-value font-monospace">1 PRIMARY // 2 READ REPLICAS</span>
            </div>
            <div className="telemetry-stat-row">
              <span className="stat-label">VECTOR INDEX LATENCY</span>
              <span className="stat-value font-monospace val-glow">&lt; 4.8ms SEARCH SPEED</span>
            </div>
            <div className="telemetry-stat-row">
              <span className="stat-label">QUERY OPTIMIZATION TARGET</span>
              <span className="stat-value font-monospace">B-TREE / HASH SCHEMAS</span>
            </div>
          </div>

          {/* Column 2: Server Metrics */}
          <div className="telemetry-col">
            <div className="col-meta-header">
              <Activity size={14} className="col-icon" />
              <span>NODE RUNTIME METRICS</span>
            </div>

            <div className="telemetry-stat-row">
              <span className="stat-label">EVENT LOOP LATENCY</span>
              <span className="stat-value font-monospace val-green">0.12ms MAX DELAY</span>
            </div>
            <div className="telemetry-stat-row">
              <span className="stat-label">RATED REQUEST CAPACITY</span>
              <span className="stat-value font-monospace">12,400 REQ/SEC GATEWAYS</span>
            </div>
            <div className="telemetry-stat-row">
              <span className="stat-label">HEAP MEMORY LIMIT</span>
              <span className="stat-value font-monospace">142MB PEAK THRESHOLD</span>
            </div>
            <div className="telemetry-stat-row">
              <span className="stat-label">DISTRIBUTED CACHING</span>
              <span className="stat-value font-monospace">REDIS SYNC CLUSTER</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ArchitectureHub;

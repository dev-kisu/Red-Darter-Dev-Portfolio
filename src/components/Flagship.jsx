import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, LayoutDashboard, FileText, Brain, Network, Cpu } from 'lucide-react';
import './Flagship.css';

const Flagship = () => {
  return (
    <section id="flagship" className="flagship-section section-padding">
      {/* SECTION HEADER */}
      <div className="section-header-block">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Flagship Productions
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore production-ready client applications built with bulletproof design frameworks.
        </motion.p>
      </div>

      {/* ROW 1: Jewelry Management HUD (Text Left, Visual Right) */}
      <div className="flagship-container row-1">
        <div className="flagship-content">
          <div className="project-badge">SYSTEM // FULLSTACK</div>
          <motion.h3 
            className="flagship-title"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            Jewelry Management HUD
          </motion.h3>
          <motion.p 
            className="flagship-desc"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A comprehensive, client-ready dashboard simulating inventory tracking, sales analytics, and automated PDF invoicing logic. Configured with a responsive glassmorphic bento UI for speed and high-precision stock monitoring.
          </motion.p>

          <ul className="flagship-features">
            <motion.li initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.3 }}>
              <LayoutDashboard className="feature-icon" size={20}/> 
              <span>Real-Time Inventory Auditing // 10,000+ Items</span>
            </motion.li>
            <motion.li initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.4 }}>
              <BarChart3 className="feature-icon" size={20}/> 
              <span>Interactive Sales Graphs with Transaction History</span>
            </motion.li>
            <motion.li initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.5 }}>
              <FileText className="feature-icon" size={20}/> 
              <span>Automated PDF Invoicing Engine with Custom Tax Locks</span>
            </motion.li>
          </ul>
        </div>

        <motion.div 
          className="flagship-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
        >
          <div className="glass-card ghost-ui hud-layout">
            <div className="gui-sidebar">
               <div className="gui-box active"></div>
               <div className="gui-box"></div>
               <div className="gui-box"></div>
            </div>
            <div className="gui-main">
               <div className="gui-header">
                 <div className="gui-line long"></div>
                 <div className="gui-circle"></div>
               </div>
               <div className="gui-stats">
                 <div className="gui-stat-card"><div className="gui-line"></div></div>
                 <div className="gui-stat-card"><div className="gui-line"></div></div>
                 <div className="gui-stat-card"><div className="gui-line"></div></div>
               </div>
               <div className="gui-chart-container">
                 <div className="hud-grid-overlay"></div>
                 <div className="gui-chart">
                   <div className="gui-bar b1"></div>
                   <div className="gui-bar b2"></div>
                   <div className="gui-bar b3"></div>
                   <div className="gui-bar b4"></div>
                   <div className="gui-bar b5"></div>
                 </div>
               </div>
               
               <motion.div 
                 className="data-stream"
                 animate={{ left: ['-20%', '120%'] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
               />
               <motion.div 
                 className="data-stream horizontal"
                 animate={{ top: ['-20%', '120%'] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
               />
            </div>
          </div>
        </motion.div>
      </div>

      {/* ROW 2: Autonomous AI Cargo Router (Visual Left, Text Right) */}
      <div className="flagship-container row-2 reverse-layout">
        <motion.div 
          className="flagship-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
        >
          {/* Holographic Cargo Neural Router Map */}
          <div className="glass-card ghost-ui cargo-hud-layout">
            <div className="hud-grid-overlay"></div>
            
            {/* Center Core Pulsing Hub */}
            <div className="cargo-core-hub">
              <span className="core-glow-pulse"></span>
              <span className="core-title-label">AI_CORE</span>
            </div>

            {/* Orbiting Router Nodes */}
            <div className="cargo-node node-a">
              <div className="node-marker"></div>
              <span className="node-text">ROUTE_A // OK</span>
            </div>
            <div className="cargo-node node-b">
              <div className="node-marker err"></div>
              <span className="node-text">ROUTE_B // BLOCK</span>
            </div>
            <div className="cargo-node node-c">
              <div className="node-marker active-pulse"></div>
              <span className="node-text font-accent">ROUTE_C // DETOUR</span>
            </div>

            {/* Glowing Scan Ray */}
            <motion.div 
              className="cargo-scan-laser"
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* HUD Status Bar Overlay */}
            <div className="cargo-bar-overlay">
              <div className="overlay-left">
                <span>SYS // ACTIVE_ROUTING</span>
              </div>
              <div className="overlay-right">
                <span>CONGESTION: 12.4%</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flagship-content">
          <div className="project-badge">INTELLIGENCE // AI-AGENT</div>
          <motion.h3 
            className="flagship-title"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            Autonomous AI Cargo Router
          </motion.h3>
          <motion.p 
            className="flagship-desc"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            An autonomous logistics routing dashboard executing real-time global cargo shipping calculations, container packing balance configurations, and pricing model validations using pgvector schemas and LangChain agents.
          </motion.p>

          <ul className="flagship-features">
            <motion.li initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.3 }}>
              <Network className="feature-icon" size={20}/> 
              <span>Multi-Node Neural Congestion Mapping // Live Detours</span>
            </motion.li>
            <motion.li initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.4 }}>
              <Cpu className="feature-icon" size={20}/> 
              <span>Retrieval-Augmented (RAG) Price Matrix Estimator</span>
            </motion.li>
            <motion.li initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.5 }}>
              <Brain className="feature-icon" size={20}/> 
              <span>Autonomous Decision Agents Orchestrated in Sandbox</span>
            </motion.li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Flagship;

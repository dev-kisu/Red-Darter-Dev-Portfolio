import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, LayoutDashboard, FileText } from 'lucide-react';
import './Flagship.css';

const Flagship = () => {
  return (
    <section className="flagship-section section-padding">
      <div className="flagship-container">
        
        <div className="flagship-content">
          <motion.h2 
            className="section-title text-gradient"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'left' }}
          >
            Featured Systems
          </motion.h2>
          <motion.h3 
            className="flagship-title"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Jewelry Management HUD
          </motion.h3>
          <motion.p 
            className="flagship-desc"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A comprehensive dashboard simulating complex inventory tracking, sales analytics, and automated PDF invoicing logic. Designed for precision and speed.
          </motion.p>

          <ul className="flagship-features">
            <motion.li initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.5 }}>
              <LayoutDashboard className="feature-icon" size={24}/> Real-Time Inventory Tracking
            </motion.li>
            <motion.li initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.6 }}>
              <BarChart3 className="feature-icon" size={24}/> Interactive Sales Analytics
            </motion.li>
            <motion.li initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.7 }}>
              <FileText className="feature-icon" size={24}/> Automated PDF Invoicing Engine
            </motion.li>
          </ul>
        </div>

        <motion.div 
          className="flagship-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
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
    </section>
  );
};

export default Flagship;

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Terminal, Shield, Zap, Cpu, Play, HelpCircle } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 100, damping: 30 });
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set((event.clientX - centerX) / (rect.width / 2));
    y.set((event.clientY - centerY) / (rect.height / 2));
  };

  const rotateX = useTransform(springY, [-1, 1], [25, -25]);
  const rotateY = useTransform(springX, [-1, 1], [-25, 25]);
  const translateX = useTransform(springX, [-1, 1], [-30, 30]);
  const translateY = useTransform(springY, [-1, 1], [-30, 30]);

  // Live Updating Telemetry State (Simulating a real active dashboard cockpit)
  const [telemetry, setTelemetry] = useState({
    latency: '11ms',
    engineLoad: '98.2%',
    coreFreq: '5.80 GHz',
    activeNodes: 124,
    sector: 'RD-SPACE-01',
    compiler: 'READY'
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry({
        latency: `${Math.floor(Math.random() * 6) + 8}ms`,
        engineLoad: `${(96 + Math.random() * 3.8).toFixed(1)}%`,
        coreFreq: `${(5.75 + Math.random() * 0.22).toFixed(2)} GHz`,
        activeNodes: Math.floor(Math.random() * 15) + 118,
        sector: 'RD-SPACE-01',
        compiler: Math.random() > 0.1 ? 'ACTIVE // OK' : 'SYNCING...'
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const wordVariants = {
    hidden: { y: 100 },
    visible: {
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  return (
    <section className="hero-section" onMouseMove={handleMouseMove}>
      {/* Dynamic Moving Grid Background */}
      <div className="hero-cyber-grid" />
      <div className="hero-cyber-glow" />

      {/* Cyberpunk Grid Dots Overlay */}
      <div className="hud-dots-grid-overlay" />

      <div className="hero-container-split">
        {/* LEFT COLUMN: Deep Space Brutalist Information Panel */}
        <div className="hero-info-panel">
          {/* Cyber Status Tag */}
          <div className="hero-sys-tag">
            <span className="blink-dot"></span>
            <span>SYSTEM DIRECT // LEVEL: PRO</span>
          </div>

          <motion.h1 
            className="hero-headline"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="headline-line">
              <motion.span variants={wordVariants} className="line-word">Precision</motion.span>
              <motion.span variants={wordVariants} className="line-word text-red">Code.</motion.span>
            </div>
            <div className="headline-line">
              <motion.span variants={wordVariants} className="line-word">Intelligent</motion.span>
              <motion.span variants={wordVariants} className="line-word font-accent text-gradient-primary">Agents.</motion.span>
            </div>
          </motion.h1>
          
          <motion.p 
            className="hero-subheadline"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Senior MERN, Flutter & React Native Architect. Crafting high-frequency mobile applications, PyTorch machine learning pipelines, and autonomous AI-agent networks deployed on secure serverless clouds.
          </motion.p>

          {/* Quick Technical Specs Indicators */}
          <motion.div 
            className="hero-spec-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="spec-badge">
              <Terminal size={14} className="spec-icon" />
              <span>NEXTJS // FLUTTER</span>
            </div>
            <div className="spec-badge">
              <Cpu size={14} className="spec-icon" />
              <span>AI AGENTS // PYTORCH</span>
            </div>
            <div className="spec-badge">
              <Shield size={14} className="spec-icon" />
              <span>PLAYWRIGHT // TDD</span>
            </div>
          </motion.div>

          {/* Sci-Fi Call to Actions */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 1 }}
             className="hero-cta-wrapper"
          >
            <a href="#enquiry" className="hero-bracket-btn">
              <span className="bracket-decor l">[</span>
              <span className="btn-label-text">INITIATE LAUNCH</span>
              <span className="bracket-decor r">]</span>
            </a>
            
            <a href="#flagship" className="hero-ghost-btn">
              <span>EXPLORE CODEX</span>
              <Zap size={14} className="glow-icon" />
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Holographic Radar HUD Dashboard */}
        <div className="hero-hud-panel">
          <div className="hero-logo-wrapper">
            {/* Concentric Sci-Fi HUD Rings */}
            <div className="hud-ring outer-hud" />
            <div className="hud-ring middle-hud" />
            <div className="hud-ring inner-hud" />
            <div className="hud-radar-sweeper" />
            <div className="hud-crosshairs" />
            
            {/* Target Coordinate Circles */}
            <div className="hud-coord-node pos-1"></div>
            <div className="hud-coord-node pos-2"></div>
            <div className="hud-coord-node pos-3"></div>

            {/* Left Data Readout: System Spec Calibrations */}
            <div className="hud-data-readout l">
              <div className="hud-readout-line">
                <span className="readout-label">LATENCY:</span>
                <span className="readout-val val-green">{telemetry.latency}</span>
              </div>
              <div className="hud-readout-line">
                <span className="readout-label">ENGINE:</span>
                <span className="readout-val">{telemetry.engineLoad}</span>
              </div>
              <div className="hud-readout-line">
                <span className="readout-label">CORES:</span>
                <span className="readout-val">{telemetry.coreFreq}</span>
              </div>
            </div>

            {/* Right Data Readout: Network Telemetry Nodes */}
            <div className="hud-data-readout r">
              <div className="hud-readout-line">
                <span className="readout-label">ACTIVE NODES:</span>
                <span className="readout-val val-glow">{telemetry.activeNodes}</span>
              </div>
              <div className="hud-readout-line">
                <span className="readout-label">SECTOR:</span>
                <span className="readout-val">{telemetry.sector}</span>
              </div>
              <div className="hud-readout-line">
                <span className="readout-label">COMPILER:</span>
                <span className="readout-val val-green">{telemetry.compiler}</span>
              </div>
            </div>

            {/* Floating Hexagonal 3D Hover container */}
            <motion.div 
              className="hero-logo-container"
              style={{ rotateX, rotateY, x: translateX, y: translateY, transformStyle: "preserve-3d" }}
            >
              <img src="/logoRDD.png" alt="Red Darter Logo" className="hero-logo" />
            </motion.div>
          </div>
          
          {/* Base Telemetry Frame Indicator */}
          <div className="hud-bottom-telemetry">
            <span className="telemetry-tag">RDD_VER_8.04</span>
            <span className="telemetry-bar"></span>
            <span className="telemetry-tag">SECURE_SSL</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



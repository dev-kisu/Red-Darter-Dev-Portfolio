import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.css';

const techLoadingSteps = [
  "LAUNCHING PROPULSION SYSTEM...",
  "CALIBRATING MERN ENGINE...",
  "ALIGNING REACT CORE SYSTEMS...",
  "DEPLOYING INTELLIGENT ARCHITECTURE...",
  "SPEED REACHING MACH 5..."
];

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [stage, setStage] = useState('loading'); // 'loading' | 'launching' | 'complete'

  useEffect(() => {
    // Step indicator loop
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev < techLoadingSteps.length - 1 ? prev + 1 : prev));
    }, 800);

    // Progress counter simulation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(stepInterval);
          // Transition to launching stage
          setTimeout(() => {
            setStage('launching');
            // Complete loading state shortly after the sonic rip animation
            setTimeout(() => {
              setStage('complete');
              onComplete();
            }, 1200);
          }, 400);
          return 100;
        }
        // Random incremental value
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="preloader-overlay"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.6, ease: [0.77, 0, 0.175, 1] } 
      }}
    >
          {/* Animated Retro-futuristic Speed Lines */}
          <div className="speed-lines-container">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="speed-line"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 1.5}s`,
                  animationDuration: `${0.4 + Math.random() * 0.6}s`
                }}
              />
            ))}
          </div>

          <div className="preloader-content">
            {/* The Supersonic Red Dart Container */}
            <div className="dart-flight-path">
              <motion.div
                className={`supersonic-dart-wrapper ${stage === 'launching' ? 'sonic-blast' : ''}`}
                animate={stage === 'loading' ? {
                  y: [0, -10, 5, -5, 0],
                  rotateZ: [0, -2, 1, -1, 0],
                } : {}}
                transition={{
                  repeat: stage === 'loading' ? Infinity : 0,
                  duration: 2.5,
                  ease: "easeInOut"
                }}
              >
                {/* Custom Aerodynamic Red Dart Jet SVG */}
                <svg viewBox="0 0 100 100" className="supersonic-dart-svg">
                  <defs>
                    <linearGradient id="neonRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ff3344" />
                      <stop offset="50%" stopColor="#D92332" />
                      <stop offset="100%" stopColor="#8b0000" />
                    </linearGradient>
                    <filter id="plasmaGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Trail Flame Plasma Effect */}
                  {stage === 'launching' && (
                    <path
                      d="M 50 85 L 35 120 L 50 105 L 65 120 Z"
                      fill="url(#neonRedGrad)"
                      opacity="0.85"
                      filter="url(#plasmaGlow)"
                    />
                  )}
                  {/* Jet Body Wings */}
                  <path
                    d="M 50 10 L 20 85 L 50 70 L 80 85 Z"
                    fill="url(#neonRedGrad)"
                    filter="url(#plasmaGlow)"
                  />
                  {/* Canopy Cockpit Divider */}
                  <path
                    d="M 50 10 L 45 65 L 50 70 L 55 65 Z"
                    fill="#ffffff"
                    opacity="0.9"
                  />
                  {/* Rear wing stabilizers */}
                  <path
                    d="M 50 70 L 42 80 L 50 78 L 58 80 Z"
                    fill="#8b0000"
                  />
                </svg>

                {/* Jet Thruster Trail Lines */}
                <div className="thruster-exhaust" />
                <div className="thruster-exhaust side-l" />
                <div className="thruster-exhaust side-r" />
              </motion.div>
            </div>

            {/* Futuristic Tech Loading Grid */}
            <div className="loader-tech-panel">
              <div className="panel-header">
                <span className="blink-text">SYSTEM INITIATION</span>
                <span className="progress-percentage">{progress}%</span>
              </div>
              
              <div className="progress-bar-track">
                <motion.div 
                  className="progress-bar-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="step-text-container">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="step-text"
                  >
                    &gt; {techLoadingSteps[currentStep]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Cinematic Cinematic Split Wipes */}
          {stage === 'launching' && (
            <>
              <div className="sonic-rip-upper" />
              <div className="sonic-rip-lower" />
              <div className="sonic-shockwave" />
            </>
          )}
        </motion.div>
  );
};

export default Preloader;

import React from 'react';
import { motion } from 'framer-motion';
import './DarterFly.css';

const DarterFly = () => {
  // We define 4 flying dragonflies with unique paths, scaling, durations and delay intervals.
  const darters = [
    { id: 1, size: 48, delay: 0, duration: 25, pathY: [150, 300, 200, 400, 250], pathX: [-100, 350, 800, 1250, 1650] },
    { id: 2, size: 34, delay: 6, duration: 32, pathY: [450, 320, 520, 280, 480], pathX: [1650, 1150, 750, 350, -100] },
    { id: 3, size: 40, delay: 12, duration: 29, pathY: [280, 120, 380, 180, 220], pathX: [-100, 450, 850, 1150, 1650] },
    { id: 4, size: 30, delay: 18, duration: 36, pathY: [550, 420, 310, 490, 380], pathX: [1650, 1250, 850, 450, -100] }
  ];

  return (
    <div className="darter-swarm-container">
      {darters.map((d) => (
        <motion.div
          key={d.id}
          className="darter-fly-wrapper"
          style={{ width: d.size, height: d.size }}
          initial={{ x: d.pathX[0], y: d.pathY[0], opacity: 0 }}
          animate={{
            x: d.pathX,
            y: d.pathY,
            opacity: [0, 0.8, 0.8, 0.8, 0],
            rotate: d.pathX[0] < d.pathX[d.pathX.length - 1] ? [0, 12, -8, 15, 0] : [180, 168, 192, 168, 180]
          }}
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg viewBox="0 0 100 100" className="darter-fly-svg">
            <defs>
              <linearGradient id="neonRedGradFly" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff3344" />
                <stop offset="100%" stopColor="#8b0000" />
              </linearGradient>
              <filter id="glowFly" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Glowing tail / abdomen */}
            <path
              d="M 50 45 L 50 95"
              stroke="url(#neonRedGradFly)"
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#glowFly)"
            />
            
            {/* Abdomen segments */}
            <line x1="47" y1="58" x2="53" y2="58" stroke="#ff3344" strokeWidth="1.5" opacity="0.8" />
            <line x1="47" y1="68" x2="53" y2="68" stroke="#ff3344" strokeWidth="1.5" opacity="0.8" />
            <line x1="47" y1="78" x2="53" y2="78" stroke="#ff3344" strokeWidth="1.5" opacity="0.8" />
            <line x1="48" y1="88" x2="52" y2="88" stroke="#ff3344" strokeWidth="1.5" opacity="0.8" />

            {/* Thorax / Chest */}
            <ellipse cx="50" cy="38" rx="7" ry="10" fill="url(#neonRedGradFly)" filter="url(#glowFly)" />

            {/* Glowing Holographic Eyes */}
            <circle cx="44" cy="27" r="3.5" fill="#ffffff" filter="url(#glowFly)" />
            <circle cx="56" cy="27" r="3.5" fill="#ffffff" filter="url(#glowFly)" />

            {/* Left Wings */}
            <g className="wing-left-upper">
              <path
                d="M 45 35 C 20 18, 5 22, 10 30 C 15 38, 30 38, 45 37"
                fill="rgba(255, 51, 68, 0.22)"
                stroke="#ff3344"
                strokeWidth="1.2"
              />
            </g>
            <g className="wing-left-lower">
              <path
                d="M 45 40 C 23 34, 12 40, 15 47 C 18 53, 32 45, 45 42"
                fill="rgba(255, 51, 68, 0.18)"
                stroke="#ff3344"
                strokeWidth="1.0"
              />
            </g>

            {/* Right Wings */}
            <g className="wing-right-upper">
              <path
                d="M 55 35 C 80 18, 95 22, 90 30 C 85 38, 70 38, 55 37"
                fill="rgba(255, 51, 68, 0.22)"
                stroke="#ff3344"
                strokeWidth="1.2"
              />
            </g>
            <g className="wing-right-lower">
              <path
                d="M 55 40 C 77 34, 88 40, 85 47 C 82 53, 68 45, 55 42"
                fill="rgba(255, 51, 68, 0.18)"
                stroke="#ff3344"
                strokeWidth="1.0"
              />
            </g>
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default DarterFly;

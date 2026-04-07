import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
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

  const rotateX = useTransform(springY, [-1, 1], [30, -30]);
  const rotateY = useTransform(springX, [-1, 1], [-30, 30]);
  const translateX = useTransform(springX, [-1, 1], [-40, 40]);
  const translateY = useTransform(springY, [-1, 1], [-40, 40]);

  return (
    <section className="hero-section section-padding" onMouseMove={handleMouseMove}>
      <motion.div 
        className="hero-logo-container"
        style={{ rotateX, rotateY, x: translateX, y: translateY, transformStyle: "preserve-3d" }}
      >
        <img src="/logoRDD.png" alt="Red Darter Logo" className="hero-logo" />
      </motion.div>
      
      <div className="hero-content">
        <motion.h1 
          className="hero-headline"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          Precision Code.<br/> 
          <span className="text-gradient-primary">Agile Solutions.</span>
        </motion.h1>
        
        <motion.p 
          className="hero-subheadline text-gradient"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Senior MERN & React Native Engineer driving intelligent cloud architecture and mobile experiences.
        </motion.p>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 0.8 }}
           className="hero-cta-wrapper"
        >
          <motion.button 
            className="glow-btn hero-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

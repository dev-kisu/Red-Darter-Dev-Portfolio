import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import ArchitectureHub from './components/ArchitectureHub';
import Flagship from './components/Flagship';
import Timeline from './components/Timeline';
import Enquiry from './components/Enquiry';
import Footer from './components/Footer';
import StickyContact from './components/StickyContact';
import TechStack from './components/TechStack';
import DarterFly from './components/DarterFly';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="app-container">
      {/* Cinematic Intro Preloader */}
      <AnimatePresence>
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Ambient Space Orbs */}
      <div className="ambient-orb orb-1"></div>
      <div className="ambient-orb orb-2"></div>
      <div className="ambient-orb orb-3"></div>

      {/* Cyber Flying Darters Swarm */}
      <DarterFly />

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <Hero />
            <TechStack />
            <ServicesSection />
            <ArchitectureHub />
            <Flagship />
            <Timeline />
            <Enquiry />
            <Footer />
            <StickyContact />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;


import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import ArchitectureHub from './components/ArchitectureHub';
import Flagship from './components/Flagship';
import Timeline from './components/Timeline';
import Enquiry from './components/Enquiry';
import Footer from './components/Footer';
import StickyContact from './components/StickyContact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Ambient Space Orbs */}
      <div className="ambient-orb orb-1"></div>
      <div className="ambient-orb orb-2"></div>
      <div className="ambient-orb orb-3"></div>

      <Hero />
      <Services />
      <ArchitectureHub />
      <Flagship />
      <Timeline />
      <Enquiry />
      <Footer />
      <StickyContact />
    </div>
  );
}

export default App;

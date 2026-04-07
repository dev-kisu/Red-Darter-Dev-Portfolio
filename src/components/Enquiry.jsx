import React from 'react';
import { motion } from 'framer-motion';
import './Enquiry.css';

const Enquiry = () => {
  return (
    <section id="enquiry" className="enquiry-section section-padding">
      <div className="enquiry-container">
        <motion.div 
          className="glass-card enquiry-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-gradient">Let's Build Something.</h2>
          <p className="enquiry-subtitle">Have a complex technical problem? Need a robust architecture? Send an enquiry.</p>
          
          <form className="enquiry-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group row">
              <input type="text" placeholder="Name" required className="form-input" />
              <input type="email" placeholder="Email Address" required className="form-input" />
            </div>
            <div className="form-group">
              <select className="form-input" required defaultValue="">
                <option value="" disabled>Select Project Type...</option>
                <option value="web">Web Application / SaaS</option>
                <option value="mobile">Mobile App (React Native)</option>
                <option value="backend">Backend Architecture / API</option>
                <option value="consulting">General Consulting</option>
              </select>
            </div>
            <div className="form-group">
              <textarea placeholder="Describe your project requirements..." rows="5" required className="form-input"></textarea>
            </div>
            <button type="submit" className="glow-btn submit-btn">Send Enquiry</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Enquiry;

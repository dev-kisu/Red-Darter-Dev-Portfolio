import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import './StickyContact.css';

const StickyContact = () => {
  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      className="sticky-contact"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <button className="sticky-btn" onClick={scrollToEnquiry}>
        <MessageSquare size={20} />
        <span>Ready to Build?</span>
      </button>
    </motion.div>
  );
};

export default StickyContact;

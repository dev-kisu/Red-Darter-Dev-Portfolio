import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Timeline.css';

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const milestones = [
    { year: "Year 1", title: "Complex RDBMS Architecture", desc: "Mastered PostgreSQL for complex queries and transaction management." },
    { year: "Year 2", title: "Full-Stack Node.js", desc: "Built scalable event-driven backend systems to handle high data throughput." },
    { year: "Year 3", title: "Mobile Deployment", desc: "Transitioned skills seamlessly into React Native for high-performance iOS/Android apps." }
  ];

  return (
    <section className="timeline-section section-padding" ref={containerRef}>
      <motion.h2 
        className="section-title text-gradient"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        The Professional Timeline
      </motion.h2>

      <div className="timeline-container">
        <div className="timeline-line-bg"></div>
        <motion.div className="timeline-line-active" style={{ height: lineHeight }}></motion.div>

        {milestones.map((item, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <motion.div 
              className="glass-card timeline-content"
              initial={{ opacity: 0, scale: 0.9, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="timeline-dot"></div>
              <span className="timeline-year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code2, Cpu, Globe, Zap, ChevronDown } from 'lucide-react';
import './Hero.css';

/* ─────────────────────────────────────────
   Animated typewriter cycling words
───────────────────────────────────────── */
const CYCLING_WORDS = ['AI Agents', 'Mobile Apps', 'ML Pipelines', 'Web Platforms', 'Automation'];

/* ─────────────────────────────────────────
   Floating particle for the orb
───────────────────────────────────────── */
const OrbParticle = ({ angle, radius, size, duration, color }) => {
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  return (
    <motion.div
      className="orb-particle"
      style={{ width: size, height: size, background: color, left: '50%', top: '50%' }}
      animate={{
        x: [x, x * 1.15, x * 0.88, x],
        y: [y, y * 0.88, y * 1.15, y],
        opacity: [0.5, 1, 0.6, 0.5],
        scale: [1, 1.4, 0.8, 1],
      }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
};

const Hero = () => {
  /* ── 3D parallax logo ── */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 25 });
  const rotateX = useTransform(springY, [-1, 1], [18, -18]);
  const rotateY = useTransform(springX, [-1, 1], [-18, 18]);
  const translateX = useTransform(springX, [-1, 1], [-22, 22]);
  const translateY = useTransform(springY, [-1, 1], [-22, 22]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) / (rect.width / 2));
    mouseY.set((e.clientY - rect.top - rect.height / 2) / (rect.height / 2));
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  /* ── Cycling headline word ── */
  const [wordIdx, setWordIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setWordIdx(i => (i + 1) % CYCLING_WORDS.length), 2400);
    return () => clearInterval(t);
  }, []);

  /* ── Live telemetry counter ── */
  const [tele, setTele] = useState({ lat: '11ms', load: '98.4%', nodes: 124, status: 'ONLINE' });
  useEffect(() => {
    const t = setInterval(() => setTele({
      lat: `${(Math.random() * 6 + 8).toFixed(0)}ms`,
      load: `${(96 + Math.random() * 3.8).toFixed(1)}%`,
      nodes: Math.floor(Math.random() * 15 + 118),
      status: Math.random() > 0.08 ? 'ONLINE' : 'SYNCING',
    }), 1600);
    return () => clearInterval(t);
  }, []);

  /* ── Orb particles ── */
  const particles = Array.from({ length: 16 }, (_, i) => ({
    angle: (i / 16) * Math.PI * 2,
    radius: 150 + (i % 3) * 30,
    size: i % 4 === 0 ? 5 : i % 3 === 0 ? 3 : 2,
    duration: 3 + (i % 5) * 0.8,
    color: i % 3 === 0
      ? 'rgba(217,35,50,0.85)'
      : i % 3 === 1
      ? 'rgba(255,100,80,0.5)'
      : 'rgba(255,255,255,0.25)',
  }));

  /* ── Word animation variants ── */
  const wordAnim = {
    hidden: { y: 120, opacity: 0, rotateX: -45 },
    visible: (i) => ({
      y: 0, opacity: 1, rotateX: 0,
      transition: { duration: 0.9, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section className="hero-section" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>

      {/* ── Background layers ── */}
      <div className="hero-bg-grid" />
      <div className="hero-bg-vignette" />
      <div className="hero-bg-radial" />

      {/* ── Scanline accent ── */}
      <motion.div
        className="hero-scanline"
        animate={{ y: ['-100%', '200%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear', repeatDelay: 4 }}
      />

      {/* ════════════════════════════════════════════
          MAIN SPLIT LAYOUT
      ════════════════════════════════════════════ */}
      <div className="hero-split">

        {/* ────────── LEFT ────────── */}
        <div className="hero-left">

          {/* Status chip */}
          <motion.div
            className="hero-status-chip"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="chip-pulse" />
            <Code2 size={12} />
            <span>AVAILABLE FOR PROJECTS</span>
            <span className="chip-divider" />
            <span className="chip-loc">REMOTE · GLOBAL</span>
          </motion.div>

          {/* ── Main headline ── */}
          <div className="hero-headline" aria-label="I build precision code for the future">
            {[
              { words: ['I', 'BUILD'], accent: false },
              { words: ['PRECISION'], accent: false },
              { words: ['CODE'], accent: true },
            ].map((line, li) => (
              <div className="hero-hl-line" key={li}>
                {line.words.map((w, wi) => (
                  <motion.span
                    key={w}
                    custom={li * 2 + wi}
                    variants={wordAnim}
                    initial="hidden"
                    animate="visible"
                    className={`hero-hl-word${line.accent ? ' word-accent' : ''}`}
                  >
                    {w}
                  </motion.span>
                ))}
              </div>
            ))}

            {/* Cycling animated word */}
            <div className="hero-hl-line hero-hl-cycling">
              <span className="cycle-prefix">FOR</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIdx}
                  className="cycle-word"
                  initial={{ y: 60, opacity: 0, filter: 'blur(8px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: -60, opacity: 0, filter: 'blur(8px)' }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {CYCLING_WORDS[wordIdx]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Sub-description */}
          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            Senior architect delivering MERN, Flutter &amp; React Native systems,
            PyTorch ML pipelines, and autonomous AI agents — shipped fast,
            built to last.
          </motion.p>

          {/* ── Stat ticker strip ── */}
          <motion.div
            className="hero-ticker"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            {[
              { icon: <Zap size={13} />, label: 'LATENCY', val: tele.lat, cls: 'green' },
              { icon: <Cpu size={13} />, label: 'ENGINE', val: tele.load, cls: '' },
              { icon: <Globe size={13} />, label: 'NODES', val: tele.nodes, cls: 'red' },
              { icon: null, label: 'STATUS', val: tele.status, cls: 'green' },
            ].map((s, i) => (
              <React.Fragment key={s.label}>
                {i > 0 && <span className="ticker-sep" />}
                <div className="ticker-item">
                  {s.icon && <span className="ticker-icon">{s.icon}</span>}
                  <span className="ticker-label">{s.label}</span>
                  <motion.span
                    key={s.val}
                    className={`ticker-val ${s.cls}`}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {s.val}
                  </motion.span>
                </div>
              </React.Fragment>
            ))}
          </motion.div>

          {/* ── CTAs ── */}
          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <a href="#enquiry" className="cta-primary" id="hero-cta-launch">
              <span>INITIATE LAUNCH</span>
              <ArrowRight size={16} className="cta-arrow" />
            </a>
            <a href="#flagship" className="cta-ghost" id="hero-cta-codex">
              <span>EXPLORE CODEX</span>
            </a>
          </motion.div>

          {/* Tech stack chips */}
          <motion.div
            className="hero-chips"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.55 }}
          >
            {['NEXT.JS', 'FLUTTER', 'PYTORCH', 'NODE', 'PLAYWRIGHT', 'AWS'].map(t => (
              <span key={t} className="hero-chip">{t}</span>
            ))}
          </motion.div>
        </div>

        {/* ────────── RIGHT: 3D Orb ────────── */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-orb-stage">
            {/* Outer glow rings */}
            <div className="orb-ring orb-ring-1" />
            <div className="orb-ring orb-ring-2" />
            <div className="orb-ring orb-ring-3" />

            {/* Orbiting particles */}
            {particles.map((p, i) => <OrbParticle key={i} {...p} />)}

            {/* Sweeper */}
            <div className="orb-sweeper" />

            {/* HUD coord nodes */}
            <div className="orb-node n1" />
            <div className="orb-node n2" />
            <div className="orb-node n3" />

            {/* 3D Parallax Logo */}
            <motion.div
              className="orb-logo-wrap"
              style={{ rotateX, rotateY, x: translateX, y: translateY, transformStyle: 'preserve-3d' }}
            >
              <img src="/logoRDD.png" alt="Red Darter Dev Logo" className="orb-logo" />
              <div className="orb-logo-glow" />
            </motion.div>

            {/* Floating data cards */}
            <motion.div
              className="orb-badge orb-badge-tl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="badge-dot green" />
              <span>API LATENCY {tele.lat}</span>
            </motion.div>

            <motion.div
              className="orb-badge orb-badge-br"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <span className="badge-dot red" />
              <span>{tele.nodes} NODES LIVE</span>
            </motion.div>
          </div>

          {/* Bottom telemetry bar */}
          <div className="orb-footer-bar">
            <span className="ofb-tag">RDD_VER_8.04</span>
            <span className="ofb-line" />
            <span className="ofb-tag ofb-green">SECURE_SSL</span>
          </div>
        </motion.div>
      </div>

      {/* ── Scroll cue ── */}
      <motion.div
        className="hero-scroll-cue"
        animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={20} />
      </motion.div>

    </section>
  );
};

export default Hero;

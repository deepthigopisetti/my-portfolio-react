import React from 'react';
import { motion } from 'framer-motion';
import { HiDownload, HiMail, HiPhone } from 'react-icons/hi';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import profileImg from '../assets/profile.jpg'; // Change this line
import './Hero.css';

const Hero = () => {
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/deepthigopisetti', label: 'GitHub' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com/in/deepthi-gopisetti-a49870292', label: 'LinkedIn' },
    { icon: <HiMail />, url: 'mailto:your.email@example.com', label: 'Email' },
    { icon: <HiPhone />, url: 'tel:+919618512758', label: 'Phone' }
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="hero-greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            👋 Hello, I'm
          </motion.span>
          
          <motion.h1 
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Deepthi Gopisetti
          </motion.h1>
          
          <motion.h2 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            B.Tech Student | Full Stack Developer | Team Lead
          </motion.h2>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Passionate developer with experience in Python, HTML, CSS, and JavaScript.
            Currently leading ML projects and building responsive web applications.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a 
              href="#contact" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>
            
            <motion.a 
              href="/resume.pdf" 
              download="Deepthi_Gopisetti_Resume.pdf"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiDownload /> Download Resume
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="hero-social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="image-wrapper"
            animate={{ 
              y: [0, -20, 0],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img src={profileImg} alt="Deepthi Gopisetti" className="profile-image" />
          </motion.div>
          
          {/* Floating elements */}
          <motion.div 
            className="floating-element element-1"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🐍
          </motion.div>
          
          <motion.div 
            className="floating-element element-2"
            animate={{
              y: [0, -20, 0],
              rotate: [0, -10, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            🤖
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { motion } from 'framer-motion';
import { HiHeart } from 'react-icons/hi';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-social">
            <a href="https://github.com/deepthigopisetti" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/deepthi-gopisetti-a49870292/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <FiLinkedin />
            </a>
          </div>
          <p className="copyright">
            © {currentYear} Deepthi Gopisetti. All rights reserved.
          </p>
          <p className="made-with">
            Made with <HiHeart className="heart-icon" /> using React
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
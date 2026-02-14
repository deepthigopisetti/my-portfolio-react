import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiUser, HiCode, HiAcademicCap, HiBriefcase } from 'react-icons/hi';
import profileImg from '../assets/profile.jpg'; // Change this line
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const stats = [
    { icon: <HiBriefcase />, value: '2+', label: 'Projects' },
    { icon: <HiCode />, value: '4', label: 'Certifications' },
    { icon: <HiUser />, value: 'Team', label: 'Lead' },
    { icon: <HiAcademicCap />, value: 'B.Tech', label: '2023-2027' },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div 
          ref={ref}
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <h3>I'm Deepthi Gopisetti, B.Tech Student at KIETW, Kakinada</h3>
            <p>
              I'm currently pursuing my B.Tech at Kakinada Institute of Engineering and Technology for Women.
              I have experience in Python, HTML, CSS, and JavaScript. I've completed several virtual internships
              including Google Android Developer, Altair Data Science Master, and Google AI-ML through AICTE EDUSKILLS.
            </p>
            <p>
              I've worked on projects like Online Learning Platform, Weather Forecasting App, and ChatbotAI using Flask.
              Currently, I'm leading the AURALENS ML training project as Team Lead. I'm passionate about learning new
              technologies and creating user-friendly applications.
            </p>
            
            <div className="personal-info">
              <div className="info-item">
                <span className="info-label">Name:</span>
                <span className="info-value">Deepthi Gopisetti</span>
              </div>
              <div className="info-item">
                <span className="info-label">Phone:</span>
                <span className="info-value">+91 9618512758</span>
              </div>
              <div className="info-item">
                <span className="info-label">Education:</span>
                <span className="info-value">B.Tech (2023-2027)</span>
              </div>
              <div className="info-item">
                <span className="info-label">College:</span>
                <span className="info-value">KIETW, Kakinada</span>
              </div>
              <div className="info-item">
                <span className="info-label">Skills:</span>
                <span className="info-value">Python, HTML, CSS, JS</span>
              </div>
              <div className="info-item">
                <span className="info-label">Current Project:</span>
                <span className="info-value">AURALENS (Team Lead)</span>
              </div>
            </div>

            <motion.a 
              href="#contact" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.a>
          </motion.div>

          <motion.div className="about-right" variants={itemVariants}>
            {/* Image Section */}
            <div className="about-image-container">
              <motion.div 
                className="about-image-wrapper"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={profileImg} alt="Deepthi Gopisetti" className="about-profile-image" />
              </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-card"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
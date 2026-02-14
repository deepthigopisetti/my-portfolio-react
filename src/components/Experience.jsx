import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiBriefcase, HiAcademicCap } from 'react-icons/hi';
import { experience, education } from '../data';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Check if data exists
  if (!experience || !education) {
    return <div>Loading...</div>;
  }

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Experience & Education
        </motion.h2>

        <div className="experience-content" ref={ref}>
          <motion.div 
            className="experience-column"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="column-title">
              <HiBriefcase className="column-icon" /> Work Experience
            </h3>
            
            <div className="timeline">
              {experience.map((exp, index) => (
                <motion.div 
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4 className="timeline-title">{exp.position}</h4>
                      <span className="timeline-period">{exp.period}</span>
                    </div>
                    <h5 className="timeline-company">{exp.company}</h5>
                    <p className="timeline-description">{exp.description}</p>
                    <ul className="timeline-achievements">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="experience-column"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="column-title">
              <HiAcademicCap className="column-icon" /> Education
            </h3>
            
            <div className="timeline">
              <motion.div 
                className="timeline-item"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h4 className="timeline-title">{education.degree}</h4>
                    <span className="timeline-period">{education.year}</span>
                  </div>
                  <h5 className="timeline-company">{education.institution}</h5>
                  <p className="timeline-description">{education.location}</p>
                  <ul className="timeline-achievements">
                    {education.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
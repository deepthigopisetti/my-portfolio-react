import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiOutlineExternalLink, HiCode } from 'react-icons/hi';
import { projects } from '../data';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => 
        filter === 'featured' ? project.featured : true
      );

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <motion.div 
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'featured' ? 'active' : ''}`}
            onClick={() => setFilter('featured')}
          >
            Featured
          </button>
        </motion.div>

        <motion.div 
          ref={ref}
          className="projects-grid"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                layout
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <div className="project-image-placeholder">
                    {project.image}
                  </div>
                  <div className="project-overlay">
                    <div className="project-links">
                      <motion.a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <HiCode />
                      </motion.a>
                      <motion.a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <HiOutlineExternalLink />
                      </motion.a>
                    </div>
                  </div>
                </div>
                
                <div className="project-info">
  <div className="project-header">
    <h3 className="project-title">{project.title}</h3>
    {project.year && <span className="project-year">{project.year}</span>}
  </div>
  <p className="project-description">{project.description}</p>
  <div className="project-tech">
    {project.technologies.map((tech, i) => (
      <span key={i} className="tech-tag">{tech}</span>
    ))}
  </div>
</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
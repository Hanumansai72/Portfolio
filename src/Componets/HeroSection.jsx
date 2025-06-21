import React from 'react';
import Navbar from './Navbar';
import '../Styles/HeroSection.css';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import ContactSection from './Contactsection';
import SkillSection from './Skills';
import About from './Aboutus';
import ProjectSection from './Projectsection';

function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <><Navbar />
    <div className="hero-section-wrapper text-light">
      
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{ fontSize: '40px' }}
            >
              Hi, I'm{' '}
              <span className="typewriter-name text-primary fw-bold">
                <Typewriter
                  words={['Hanuman Sai']}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={150}
                  delaySpeed={2000}
                />
              </span>
              <span className="dot text-purple">.</span>
            </motion.h1>
            <h4 className="sub-title text-secondary">Full Stack Developer</h4>
            <p className="hero-description">
              I create exceptional digital experiences with clean code and modern design.
            </p>
            <div className="hero-buttons mb-3">
              <button className="btn btn-primary me-3">View My Work</button>
              <button className="btn btn-outline-light">Contact Me</button>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-md-6 text-center">
            <img
              src="https://img.freepik.com/premium-photo/3d-futuristic-woman-with-holographic-display_1325322-243.jpg?semt=ais_hybrid&w=740"
              alt="Profile"
              className="img-fluid rounded-circle mb-3 hero-profile-img"
              style={{ maxWidth: '280px', border: '4px solid #1e90ff' }}
            />
            <div className="social-icons">
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin fa-2x text-light mx-2"></i>
              </a>
              <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github fa-2x text-light mx-2"></i>
              </a>
              <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram fa-2x text-light mx-2"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bouncing Arrow */}
        <motion.div
          className="text-center mt-5"
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: 'easeInOut',
          }}
        >
          <div
            className="circle bg-primary text-white rounded-circle d-inline-flex justify-content-center align-items-center"
            style={{ width: '50px', height: '50px', cursor: 'pointer' }}
            onClick={scrollToNext}
          >
            <i className="fa-solid fa-angle-down fa-lg"></i>
          </div>
        </motion.div>
      </div>

      {/* Animated Sections */}
      <motion.div
        id="about-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <About />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ProjectSection></ProjectSection>
      </motion.div>



      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <SkillSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ContactSection />
      </motion.div>

      {/* Footer */}
      <footer className="footer text-center py-3">
        <p>&copy; {new Date().getFullYear()} Hanuman Sai. All rights reserved.</p>
      </footer>
    </div></>
  );
}

export default HeroSection;

import React from 'react';

function About() {
  return (
    <section id="about-section" className="about-section  text-light py-5" style={{backgroundColor:"black"}}>
      <div className="container">
        <h2 className="text-center mb-5">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <h4 className="text-primary mb-3">My Journey</h4>
            <p>
              I’m a passionate full-stack developer currently pursuing a B.Tech in Computer Science with a focus on AI & ML at Samskruti College of Engineering and Technology, Hyderabad.
            </p>
            <p>
              I’ve worked on innovative projects like <strong>CareerScape</strong>, a job platform built with Flask and MongoDB, and <strong>Apna Mestri</strong>, an ongoing freelance React-based marketplace for civil engineering supplies.
            </p>
            <p>
              With experience in manual testing at ATG Company, I bring both development and quality assurance skills to the table. I'm highly focused on clean design, responsive UIs, and creating seamless user experiences.
            </p>
            <div className="social-icons mt-3">
              <a href="https://www.linkedin.com/in/v-hanumansai-378120254/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin fa-lg text-light me-3"></i>
              </a>
              <a href="https://github.com/Hanumansai72" target="_blank" rel="noreferrer">
                <i className="fab fa-github fa-lg text-light me-3"></i>
              </a>
              <a href="mailto:Hanumansai41@gamil.com">
                <i className="fas fa-envelope fa-lg text-light"></i>
              </a>
            </div>
          </div>

          {/* You can keep a timeline or experience card on the right */}
          <div className="col-md-6">
            <div className="timeline-item mb-4">
              <div className="dot"></div>
              <div className="card bg-black text-light p-3">
                <h5 className="text-primary">Freelance React Developer</h5>
                <small className="text-muted">Apr 2025 – Present</small>
                <p>
                  Building a civil supplies marketplace with ReactJS, Bootstrap 5, and Node.js. Focused on responsive UIs and client collaboration.
                </p>
              </div>
            </div>
            <div className="timeline-item mb-4">
              <div className="dot"></div>
              <div className="card bg-black text-light p-3">
                <h5 className="text-primary">Manual Tester – ATG Company</h5>
                <small className="text-muted">Dec 2024 – Present</small>
                <p>
                  Tested web applications, reported bugs, and assisted in test case creation and verification during sprints.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="dot"></div>
              <div className="card bg-black text-light p-3">
                <h5 className="text-primary">CareerScape Project</h5>
                <small className="text-muted">2024</small>
                <p>
                  Built a job platform using Flask and MongoDB with advanced filters, login/signup, and dynamic job listings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

import React from 'react';
import '../Styles/Projects.css';

const projects = [
  {
    title: 'Apna Mestri',
    description:
      'A full-stack civil and freelance service platform using React, Node.js, and MongoDB. Includes authentication, product management, and user dashboards.',
    tags: ['ReactJS', 'Node.js', 'MongoDB', 'Bootstrap'],
    image: 'https://img.freepik.com/premium-photo/3d-modern-user-interface-ux-graphic-screen-mobile-application_31965-73641.jpg',
    demo: '#',
    code: '#',
    featured: true,
  },
  {
    title: 'CareerScape',
    description:
      'Job listing platform with filtering, login/signup, and skill-based search. Built using Flask, MongoDB, and Python.',
    tags: ['Flask', 'MongoDB', 'Python'],
    image: 'https://img.freepik.com/free-vector/job-search-concept_52683-40306.jpg',
    demo: '#',
    code: '#',
  },
  {
    title: 'Portfolio Website',
    description:
      'A personal website to showcase my resume, projects, and contact details with smooth animations and responsive UI.',
    tags: ['ReactJS', 'Framer Motion', 'Bootstrap'],
    image: 'https://img.freepik.com/premium-photo/3d-website-interface-design-web-page-application_31965-65138.jpg',
    demo: '#',
    code: '#',
  },
];

function Projects() {
  return (
    <section id="projects" className="py-5  text-light" style={{backgroundColor:"black"}}>
      <div className="container">
        <h2 className="text-center mb-5">
          My <span className="text-primary">Projects</span>
        </h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card project-card h-100 bg-black text-light border-0 shadow">
                <div className="position-relative">
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.title}
                    style={{ height: '180px', objectFit: 'cover' }}
                  />
                  {project.featured && (
                    <span className="badge bg-primary position-absolute top-0 end-0 m-2">Featured</span>
                  )}
                </div>
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="mb-3">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="badge bg-secondary me-2 mb-1">{tag}</span>
                    ))}
                  </div>
                  <div className="d-flex justify-content-between">
                    <a href={project.demo} className="text-decoration-none text-primary">
                      <i className="fas fa-link me-1"></i>Demo
                    </a>
                    <a href={project.code} className="text-decoration-none text-primary">
                      <i className="fas fa-code me-1"></i>Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

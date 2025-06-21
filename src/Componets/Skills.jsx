import React from 'react';
import '../Styles/Skills.css';

function SkillSection() {
  const frontend = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
  ];

  const backend = [
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'MongoDB', level: 75 },
  ];

  const tools = [
    { name: 'Git/GitHub', level: 90 },
  ];

  const renderSkills = (skills, colorClass) =>
    skills.map((skill, i) => (
      <div key={i} className="mb-3">
        <div className="d-flex justify-content-between">
          <span>{skill.name}</span>
          <span>{skill.level}%</span>
        </div>
        <div className="progress">
          <div
            className={`progress-bar ${colorClass}`}
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      </div>
    ));

  return (
    <section className="skill-section py-5  text-light" style={{backgroundColor:"black"}}>
      <div className="container">
        <h2 className="text-center mb-5">
          My <span className="text-primary border-bottom">Skills</span>
        </h2>
        <div className="row justify-content-center">
          {/* Frontend */}
          <div className="col-md-4 mb-4">
            <div className="skill-card p-4 rounded bg-black shadow">
              <h5><i className="fas fa-code me-2 text-primary"></i>Frontend</h5>
              {renderSkills(frontend, 'bg-primary')}
            </div>
          </div>

          {/* Backend */}
          <div className="col-md-4 mb-4">
            <div className="skill-card p-4 rounded bg-black shadow">
              <h5><i className="fas fa-database me-2 text-purple"></i>Backend</h5>
              {renderSkills(backend, 'bg-purple')}
            </div>
          </div>

          {/* Tools & Others */}
          <div className="col-md-4 mb-4">
            <div className="skill-card p-4 rounded bg-black shadow">
              <h5><i className="fas fa-tools me-2 text-info"></i>Tools & Others</h5>
              {renderSkills(tools, 'bg-purple')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillSection;

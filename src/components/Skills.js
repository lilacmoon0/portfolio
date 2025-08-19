import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "HTML/CSS", level: 95 },
    { name: "GraphQL", level: 90 },
    { name: "Redux", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "REST APIs", level: 80 },
    { name: "Bootstrap", level: 80 },
    { name: "Git", level: 70 },
    { name: "Docker", level: 60 },
    { name: "Styled Components", level: 60 },
    { name: "Figma", level: 50 },
    { name: "Ant Design", level: 40 },
    { name: "MongoDB", level: 30 },
    { name: "TypeScript", level: 20 },
  ];

  const tools = [
    "VsCode",
    "Git",
    "Postman",
    "Docker",
    "Hasura",
    "SourceTree",
    "Heroku",
    "Netlify",
    "Vercel",
    "Render",
    "MongoDB Atlas",
    "AWS",
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-content">
          <div className="skills-section">
            <h3>Technical Skills</h3>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="tools-section">
            <h3>Tools & Technologies</h3>
            <div className="tools-grid">
              {tools.map((tool, index) => (
                <div key={index} className="tool-item">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

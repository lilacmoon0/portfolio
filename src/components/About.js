import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>
              I'm a self-taught developer who loves creating digital experiences
            </h3>
            <p>
              I specialize in creating modern, responsive, and user-friendly
              applications. I'm passionate about learning new technologies and
              solving complex problems.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source projects, or sharing knowledge with
              the developer community.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h4>50+</h4>
                <p>Projects Completed</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src="./me1.jpg" alt="About me" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

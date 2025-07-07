import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2>About Me</h2>
         <p>
            I am a dedicated <strong>web developer</strong> with a strong foundation in problem solving, programming, and modern software development. I specialize in building responsive and high-quality web applications using technologies like <strong>React, JavaScript, and Angular</strong>.
        </p>
        <p>
            I am skilled at designing clean user interfaces and writing efficient, maintainable code. My experience includes developing several projects that demonstrate my ability to turn ideas into effective solutions.
        </p>
          <p>
            I am always eager to learn new tools and frameworks to enhance my skills. My goal is to create web experiences that are intuitive, engaging, and impactful.
        </p>

          <a href={`${process.env.PUBLIC_URL}/Madhu_Resume.pdf`} download>
            <button className="resume-button">Download My Resume</button>
          </a>
        </div>
        <div className="about-image">
          <img src={`${process.env.PUBLIC_URL}/madhu1.jpg`} alt="About Me" />
        </div>
      </div>
    </section>
  );
};

export default About;

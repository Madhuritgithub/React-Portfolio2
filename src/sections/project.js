import React from 'react';
import './project.css';

const Projects = () => {
  const projects = [
    {
      title: 'Image Generator',
      description: 'A simple image generator using HTML, CSS, and JS.',
      image: 'image-generator.jpg',
      link: 'https://github.com/Madhuritgithub/my_project',
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio built using Html, Css, and Js.',
      image: 'madhu.jpg',
      link: 'https://github.com/Madhuritgithub/myportfolio',
    },
    {
      title: 'Todo App (Angular)',
      description: 'A clean and functional todo list application built using Angular.',
      image: 'image2.png',
      link: 'https://github.com/Madhuritgithub/angular-todo-app',
    },
    {
  title: 'Email OTP Verification',
  description: 'A secure email OTP verification system built using HTML, CSS, and JavaScript.',
  image: 'madhu3.png',
  link: 'https://github.com/Madhuritgithub/email-otp-verification',
},
{
  title: 'Portfolio Website (React)',
  description: 'A modern, responsive portfolio website built using React and styled with CSS modules.',
  image: 'madhu2.png', // Make sure you have an image for this in your public folder
  link: 'https://github.com/Madhuritgithub/react-portfolio',
},

    {
      title: 'AI Mock Interview Platform (MERN)',
      description: 'AI-powered mock interview platform built with MongoDB, Express, React, and Node.js.',
      image: 'image3.jpg',
      link: 'https://github.com/Madhuritgithub/AI-Mock-Interview-Platform',
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={`${process.env.PUBLIC_URL}/${project.image}`}
              alt={project.title}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

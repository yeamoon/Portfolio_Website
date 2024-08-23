import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'E-Commerce Website',
    techStack: 'Python Django, React, PostgreSQL, JavaScript, HTML, CSS, Docker, Kubernetes, AWS',
    github: 'https://github.com/yeamoon/E-Commerce-Website-using-Python-Django-and-React'
  },
  {
    name: 'Student Result Processing System',
    techStack: 'ASP.NET, C#, JavaScript, HTML, CSS, SQL',
    github: 'https://github.com/yeamoon/Student-Result-Processing-System-using-ASP.NET-MVC'
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>Tech Stack: {project.techStack}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

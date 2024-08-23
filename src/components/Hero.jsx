import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import codingAnimation from '../assets/coding-animation.json';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Hero.css'; // Add your CSS styles for the hero section here

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    'Software Engineer',
    'Full-Stack Developer',
    'Cloud Enthusiast',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prevTitle) => (prevTitle + 1) % titles.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [titles.length]); // Add titles.length to the dependency array

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Hi, I'm Yeamon Sultana</h1>
        <h2>{titles[currentTitle]}</h2>
        <p>
          Crafting innovative software solutions with a passion for full-stack development and cloud computing.
        </p>
        <div className="hero-buttons">
          <a href="/resume" className="cta-button">View My Resume</a>
          <a href="#contact" className="cta-link">Get in Touch</a>
        </div>
        <div className="hero-social-icons">
          <a href="https://www.linkedin.com/in/yeamonsultana" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&amp;logo=linkedin&amp;logoColor=white" height="30" alt=""/>
    </a>
    <a href="https://github.com/yeamoon" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&amp;logo=github&amp;logoColor=white" height="30" alt=""/>
    </a>
        </div>
      </div>
      <div className="hero-image">
        <Lottie animationData={codingAnimation} loop={true} />
      </div>
    </section>
  );
};

export default Hero;

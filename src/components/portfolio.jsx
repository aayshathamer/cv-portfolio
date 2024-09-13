import React, { useState } from 'react';
import './portfolio.css'; // Link to your CSS file for styling
import profilePic from './pictures/9.jpg'; // Profile picture path
import { FaEnvelope, FaGithub, FaTelegram, FaYoutube } from 'react-icons/fa'; // Import icons

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('education');
  const [activeProjectTab, setActiveProjectTab] = useState('projects');

  return (
    <div className="portfolio-container">
      <div className="top-sections">
        {/* Profile Section - Left Side */}
        <div className="profile-section">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <div className="profile-info">
            <h1>Layla Rami</h1>
            <p>Recent software engineering graduate, eager to apply skills in real-world projects and grow in the tech industry.</p>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="contact-section">
          <div className="info-columns">
            <div className="left-info">
              <p><strong>Location:</strong> somewhere</p>
              <p><strong>Availability:</strong> Thursday</p>
              <p><strong>Experience:</strong> 1+ years</p>
            </div>
          </div>
          <div className="contact-icons">
            <a href="mailto:my@gmail.com" className="contact-link">
              <FaEnvelope />
            </a>
            <a href="https://github.com/yourgithubprofile" className="contact-link" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://telegram.me/yourtelegramprofile" className="contact-link" target="_blank" rel="noopener noreferrer">
              <FaTelegram />
            </a>
            <a href="https://youtube.com/youryoutubechannel" className="contact-link" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="content">
        {/* Left Side - Rectangular Section with Navigation */}
        <div className="left-section">
          <div className="nav-tabs">
            <button
              className={`tab-button ${activeSection === 'education' ? 'active' : ''}`}
              onClick={() => setActiveSection('education')}
            >
              Education
            </button>
            <button
              className={`tab-button ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveSection('experience')}
            >
              Experience
            </button>
            <button
              className={`tab-button ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveSection('skills')}
            >
              Skills
            </button>
          </div>

          <div className="section-content">
            {activeSection === 'education' && (
              <section id="education" className="section">
                <h2>Education</h2>
                <div className="education">
                  <h3>Name University, somewhere — Software Engineering</h3>
                  <p><strong>November 2021 - November 2024</strong></p>
                  <p>Studied software development, coding, and systems design, gaining hands-on experience through collaborative projects and real-world applications.</p>
                </div>
              </section>
            )}

            {activeSection === 'experience' && (
              <section id="experience" className="section">
                <h2>Experience</h2>
                <div className="job">
                  <h3>Educational Charity Academy, somewhere — Data Entry</h3>
                  <p><strong>December 2022 - 2024</strong></p>
                  <p>Responsible for managing and organizing student records, academic data, and administrative information in digital formats using code.</p>
                </div>
              </section>
            )}

            {activeSection === 'skills' && (
              <section id="skills" className="section">
                <h3>Skills</h3>
                <div className="skills-container">
                  <span className="skill-box">Web Development</span>
                  <span className="skill-box">Database Management</span>
                  <span className="skill-box">Testing and Debugging</span>
                  <span className="skill-box">Software Development</span>
                  <span className="skill-box">UI/UX Design</span>
                </div>

                <h3>Programming Languages</h3>
                <div className="skills-container">
                  <span className="skill-box">PHP - Proficient</span>
                  <span className="skill-box">C++ & C# - Competent</span>
                  <span className="skill-box">Python - Competent</span>
                  <span className="skill-box">Java & JavaScript - Skilled</span>
                  <span className="skill-box">SQL - Proficient</span>
                  <span className="skill-box">Ruby - Skilled</span>
                  <span className="skill-box">Swift - Skilled</span>
                </div>
              </section>
            )}
          </div>
        </div>

        {/* Right Side - Projects Section with Products and Services */}
        <div className="right-section">
          <div className="nav-tabs">
            <button
              className={`tab-button ${activeProjectTab === 'projects' ? 'active' : ''}`}
              onClick={() => setActiveProjectTab('projects')}
            >
              Projects
            </button>
            <button
              className={`tab-button ${activeProjectTab === 'products' ? 'active' : ''}`}
              onClick={() => setActiveProjectTab('products')}
            >
              Products
            </button>
            <button
              className={`tab-button ${activeProjectTab === 'services' ? 'active' : ''}`}
              onClick={() => setActiveProjectTab('services')}
            >
              Services
            </button>
          </div>

          <div className="section-content">
            {activeProjectTab === 'projects' && (
              <section id="projects" className="section">
                <h2>Projects</h2>
                <div className="project">
                  <h3>Portfolio Website — Personal Portfolio</h3>
                  <p>Showcasing creativity, innovation, and expertise—explore my journey and projects in software engineering.</p>
                </div>
                <div className="project">
                  <h3>Charity Website — Graduation Project</h3>
                  <p>Transforming lives through compassion and action—join us in making a difference one step at a time.</p>
                </div>
                <div className="project">
                  <h3>Online Classroom — MVC Class Project</h3>
                  <p>Empowering students with interactive, engaging, and accessible online education for a brighter future.</p>
                </div>
              </section>
            )}

            {activeProjectTab === 'products' && (
              <section id="products" className="section">
                <h2>Products</h2>
                <p>Details about the products you have developed or worked on.</p>
              </section>
            )}

            {activeProjectTab === 'services' && (
              <section id="services" className="section">
                <h2>Services</h2>
                <p>Details about the services you offer.</p>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

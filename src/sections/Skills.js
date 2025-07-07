import React from 'react';
import './Skills.css';
import { FaExternalLinkAlt } from "react-icons/fa";

const Skills = () => {
  const skills = {
    Languages: ['C', 'Python', 'C++', 'Java'],
    'Web Technologies': ['HTML', 'CSS', 'JS', 'React', 'Angular', 'Node.js', 'Express.js'],
    Tools: ['Git & GitHub', 'MongoDB', 'VS Code'],
    'Soft Skills': ['Problem Solving', 'Teamwork', 'Communication', 'Adaptability'],
  };

  const codingPlatforms = ['LeetCode', 'HackerRank', 'CodeChef', 'GeeksforGeeks'];

  const platformLinks = {
    LeetCode: 'https://leetcode.com/u/M_a_d_h_u_123/',
    HackerRank: 'https://www.hackerrank.com/profile/madhumylapalli11',
    CodeChef: 'https://www.codechef.com/users/madhumylapalli',
    GeeksforGeeks: 'https://www.geeksforgeeks.org/user/madhumyla9977/',
  };

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-wrapper">
        {Object.entries(skills).map(([category, items], index) => (
          <div key={index} className="skills-category">
            <h3>{category}</h3>
            <ul className="skills-list">
              {items.map((skill, idx) => (
                <li key={idx} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="coding-platforms">
        <h2>My Coding Profiles</h2>
        <ul className="platforms-list">
          {codingPlatforms.map((platform, idx) => (
            <li key={idx} className="platform-item">
              <a
                href={platformLinks[platform]}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-link"
              >
                {platform}
                <FaExternalLinkAlt size={12} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;

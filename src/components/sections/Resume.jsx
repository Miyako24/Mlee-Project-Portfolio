import React from "react";

const Resume = () => {
  return (
    <section>
      <h1>Resume</h1>
      <section style={{ textAlign: "left", marginLeft: "2rem" }}></section>
      <a href="Miyako Lee Resume 2025.docx" target="_blank" rel="noopener noreferrer">
        📄 Download My Resume
      </a>

      <h2>Skills</h2>
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Python</li>
        <li>React</li>
        <li>MERN Stack</li>
        <li>SQL</li>
        <li>APIs</li>
        <li>Web/Mobile Development</li>
      </ul>

      <h2>Education</h2>
      <p><strong>University of Central Florida, Orlando, FL</strong></p>
      <p>UCF Coding Boot Camp – Software Engineering & Web Development</p>
      <p>Expected Graduation: <strong>June 2025</strong></p>
      <p>Certification (In Progress): Objective Minimum Qualifications (OMQs)</p>

      <h2> Additional Skills</h2>
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        <li>SQL databases</li>
        <li>HTML, CSS, JavaScript</li>
        <li>Python</li>
        <li>Full-stack database apps with React</li>
        <li>MERN</li>
        <li>AI & Prompt Engineering (GitHub Copilot, ChatGPT)</li>
        <li>TypeScript</li>
        <li>APIs</li>
        <li>Web/Mobile Development</li>
        <li>Software Programming</li>
      </ul>
    </section>
  );
};

export default Resume;

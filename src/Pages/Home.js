import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, I am Sulogna Mukherjee</h2>
        <div className="prompt">
          <p>Frontend Developer</p>
          <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/sulognam/')} />
          <EmailIcon   onClick={() => window.location = 'mailto:sulognam640@gmail.com'} />
          <GitHubIcon onClick={() => window.open('https://github.com/SulognaMukh')}/>
        </div>
      </div>
      <div className="skills">
        <h1>About Me</h1>
        <ol className="list">
         
          <li className="items">
            <h2>Front-end</h2>
            <span>
              ReactJs,TypeScript,HTML5,CSS,MaterialUI,NPM,JavaScript,Jest
            </span>
          </li>
          <li className="items">
            <h2>Back-end</h2>
            <span>
              Nodejs,ExpressJs,Mysql
            </span>
          </li>
          <li className="items">
            <h2>Experience</h2>
            <span>
            Developed user interfaces (UIs) for web applications using React library.
Created reusable and efficient React components to ensure a smooth and responsive user experience.
Implemented UI designs provided by the design team, ensuring pixel-perfect implementation and adherence to design guidelines.
Wrote clean, well-structured, and maintainable code using React, JSX, and CSS-in-JS.
Collaborated closely with designers to understand UI/UX requirements and translate them into functional components.
Worked with front-end technologies like HTML, CSS, and JavaScript to integrate React components into the overall front-end architecture.
Conducted unit testing using frameworks like Jest and React Testing Library to ensure the reliability and quality of React components.
Optimized application performance by identifying and resolving performance bottlenecks, minimizing re-renders, and optimizing network requests.
Integrated React applications with back-end services, handling data fetching, updating, and implementing authentication and authorization mechanisms.
Stayed up-to-date with the latest trends, best practices, and new features in the React ecosystem through continuous learning and professional development.
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;

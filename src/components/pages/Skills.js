import React from "react";

const Skills = () => {
  return (
    <section className="skills">
      <div className="section-head">
        <h6 className="text-center">View My Skills</h6>
        <h2 className="text-center">Skills</h2>
        <div className="underline"></div>
      </div>
      <div className="row">
        <div className="col-md-10 mx-auto">
          {/* Tech Skills*/}
          <h3>Tech Skills</h3>
          <p>
            • Front-End Development: HTML5, CSS,JavaScript (ES6+), TypeScript,
            SASS, Jest, ReactJS (React Hooks, Context API, Redux, Redux Toolkit,
            React Query), Styled-Components, Tailwind, MUI, Responsive Design,
            Vite, Figma
          </p>
          <p>
            • Back-End Development: Node.js, Express, RESTful API, Swagger,
            Axios, MySQL, MongoDB
          </p>
          <p>
            • Tools and Methodologies: Git/GitHub, Agile/Scrum,JIRA,Thunder
            Client, Postman
          </p>
          <p>• Cloud: AWS S3, EC2</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;

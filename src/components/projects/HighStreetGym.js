import React from "react";
import HighStreetGymImg from "../../images/project-images/HighStreetGym.png";
import Tilt from "react-parallax-tilt";

const HighStreetGym = () => {
  return (
    <div className="project">
      <h3>High Street Gym Web App</h3>
      <div className="row">
        <div className="col-md-6">
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.8}
            glareColor="#fff"
            glarePosition="all"
            scale="1.25"
            transitionSpeed={2000}
            tiltAxis="y"
          >
            <div className="img-overlay"></div>
            <img src={HighStreetGymImg} alt="HighStreetGymImg"></img>
          </Tilt>
          {/* Buttoms */}
          <div className="row mt-2 mb-5">
            {/* <div className="col-md-6">
              <a
                href="http://13.239.112.124/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-project"
              >
                <svg>
                  <rect x="0" y="0" fill="none" width="100%" height="100%" />
                </svg>
                View Project
              </a>
            </div> */}
            {/* <div className="col-md-6">
              <button
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-project"
                disabled
              >
                <svg>
                  <rect x="0" y="0" fill="none" width="100%" height="100%" />
                </svg>
                Source Private
              </button>
            </div> */}
          </div>
        </div>
        <div className="col-md-6">
          <h5 className="text-primary mb-3">Project Overview</h5>
          <div className="project-info">
            <p>
              High Street Gym Web Application is a comprehensive project that
              combines both frontend and backend components to create a seamless
              user experience for gym members. Users can book and manage classes
              at High Street Gym and engage with other members through the
              site’s built-in blog system.
            </p>
            <h5 className="text-primary mb-3">
              Technology Stack and Development Process
            </h5>

            <p>
              • Developed a responsive gym web app from scratch for both mobile
              and desktop, integrated with a MySQL database using JavaScript,
              React, XML, and SQL.
            </p>
            <p>
              • Implemented features such as gym class calendar display, class
              booking management, user authentication, and content management
              for timetables and blogs using Git and GitHub.
            </p>
            <p>
              • Created reusable server-side data models and client-side UI
              components.
            </p>
            <p>• Styled the website using Tailwind and DaisyUI.</p>
            <p>• Managed source code version control.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighStreetGym;

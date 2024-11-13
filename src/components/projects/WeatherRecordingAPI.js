import React from "react";
import weatherAPIImg from "../../images/project-images/weatherRecordingAPI.png";
import Tilt from "react-parallax-tilt";

const WeatherRecordingAPI = () => {
  return (
    <div className="project">
      <h3>Queensland Weather Recording API RESTful API</h3>
      <div className="row">
        <div className="col-md-6">
          {/* Project Img */}
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.8}
            glareColor="rgba(16, 20, 20, 0.3)"
            glarePosition="all"
            scale="1.25"
            transitionSpeed={2000}
            tiltAxis="y"
          >
            <div className="img-overlay"></div>
            <img src={weatherAPIImg} alt="weatherAPIImg"></img>
          </Tilt>
          {/* Buttoms */}
          <div className="row mt-2 mb-5">
            <div className="col-md-6">
              <button
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-project"
                disabled
              >
                <svg>
                  <rect x="0" y="0" fill="none" width="100%" height="100%" />
                </svg>
                In Development..
              </button>
            </div>
            {/* <div className="col-md-6">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-project"
              >
                <svg>
                  <rect x="0" y="0" fill="none" width="100%" height="100%" />
                </svg>
                View Code
              </a>
            </div> */}
          </div>
        </div>
        <div className="col-md-6">
          <h5 className="text-primary mb-3">Project Overview</h5>
          <div className="project-info">
            <p>
              The Climate Data RESTful API is designed for an educational
              institution to analyze raw climate data collected across
              Queensland through a distributed IoT sensor network. This API
              offers a secure interface for interacting with MongoDB, managing
              weather data, and handling user authentication and authorization.
              The project encompasses designing a MongoDB-based RESTful API that
              supports CRUD operations for climate data and user management. To
              ensure scalability, the API leverages MongoDB’s partitioning
              capabilities, efficiently distributing workload across multiple
              devices, including Raspberry Pi 4 units.
            </p>
            <h5 className="text-primary mb-3">
              Technology Stack and Development Process
            </h5>

            <p>
              • Designed and implemented RESTful APIs integrated with MongoDB
              (NoSQL) for managing a substantial dataset of weather data in
              Queensland.
            </p>
            <p>• Tested APIs with the Thunder Client.</p>
            <p>
              • Created and optimised queries for effective data storage and
              retrieval.
            </p>
            <p>
              • Engineered various API endpoints with robust validation to
              ensure accurate handling of requests and responses.
            </p>
            <p>
              • Implemented trigger mechanisms for specific data events to
              enhance real-time data processing.
            </p>
            <p>
              • Authored detailed API documentation and conducted thorough
              endpoint testing.
            </p>
            <p>
              • Utilised Swagger to visualise and interact with our API, making
              it easy for back-end implementation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherRecordingAPI;

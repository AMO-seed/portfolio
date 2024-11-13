import React from "react";
import WeatherRecordingAPI from "../projects/WeatherRecordingAPI";
import HighStreetGym from "../projects/HighStreetGym";

const Projects = () => {
  return (
    <section className='projects'>
      <div className='section-head'>
        <h6 className='text-center'>View My Projects</h6>
        <h2 className='text-center'>Projects</h2>
        <div className='underline'></div>
      </div>
      {/* Project Full Stack Project */}
      <HighStreetGym />
      {/* Project Restful API */}
      <WeatherRecordingAPI />
    </section>
  );
};

export default Projects;

import React from "react";
import temp from "../assets/temp.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../style/Carousel.css";
const Work = ({ isDesktop }) => {
  const workData = [
    {
      company: "iScale Solution",
      position: "Software Engineer",
      project: "Salesforce",
      info: 'Create major features requested by the Product Manager to be presented to the client.Demo of newly created feature to Product Manager to getfeedback on the requested feature.Fix bugs reported by teamCode review done by other teammatesCreate automation test using Selenium"',
    },

    {
      company: "Zennya",
      position: "Backend Developer",
      project: "Zennya API",
      info: "Developed APIs for mobile and web applications.Researched, documented and implemented proof of conceptsto be used as new features. Provided documentation for new api endpoints and new featuresimplemented. Participated in meetings and logged daily progress in Jira",
    },

    {
      company: "GreatFeat Services Inc.",
      position: "Software Developer",
      project: "Online Gaming App",
      info: "Developed web service to manage new game platforms Participated in team meetings, requirement gathering for new features Modified fields and structure of database for optimization.",
    },
  ];

  const workCardMap = workData.map((data) => {
    return (
      <div className="card lg:card-side bg-base-100 shadow-xl text-primary">
        <figure>
          <img src={temp} alt="Album" className="max-w-[400px] max-h-[400px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl lg:text-3xl xl:text-4xl">
            {data.company}
          </h2>
          <p className="text-sm lg:text-base xl:text-lg">
            {`POSITION: ${data.position}`} <br />
            {`PROJECT: ${data.project}`} <br />
            {`INFO: ${data.info}`} <br />
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className=" min-h-screen bg-primary text-secondary">
      <div className="hero-content  min-w-screen max-w-full">
        <div className="carousel-container min-h-screen">
          <div>
            <h1
              className={` font-extrabold  pb-10
              ${isDesktop ? "header-desktop pt-40" : "header-mobile pt-20"}
              `}
            >
              Professional Experience
            </h1>
            <Carousel
              showThumbs={true}
              showStatus={false}
              infiniteLoop={true}
              className="carousel-full-screen"
            >
              {workCardMap.map((card, index) => (
                <div
                  key={index}
                  className="carousel-slide-content flex justify-center items-center"
                >
                  {card}
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

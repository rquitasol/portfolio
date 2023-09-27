import React from "react";
import pfp from "../assets/pfp.jpg";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import resume from "../assets/resume.png";

const About = ({ isDesktop }) => {
  const redirectToLinkedIn = () => {
    const websiteURL = "https://www.linkedin.com/in/romelquitasol/";
    window.open(websiteURL, "_blank");
  };

  const redirectToGitHub = () => {
    const websiteURL = "https://github.com/rquitasol";
    window.open(websiteURL, "_blank");
  };

  const downloadResume = () => {
    alert("TODO DOWNLOAD LINK OF RESUME");
  };

  const buttonStyle = "btn bg-primary text-secondary";
  const keyWords = "font-extrabold";

  return (
    <div className="section">
      <div
        className={`hero min-h-screen bg-primary`}
        style={{
          backgroundImage: `url(${pfp})`,
        }}
      >
        <div
          className={`hero-content bg-opacity-10 ${
            isDesktop ? "max-w-2xl mr-700" : ""
          }`}
        >
          <div>
            <h1
              className={` font-extrabold font-mova 
              ${isDesktop ? "header-desktop" : "header-mobile"}
              `}
            >
              HI, I'M ROMEL
            </h1>
            <p
              className={`py-6 font-medium 
             ${isDesktop ? "paragraph-desktop" : "paragraph-mobile"}
            `}
            >
              I am a Full Stack Developer based in the Philippines with
              extensive experience in programming languages and tools such as
              <b className={keyWords}> Java</b>,
              <b className={keyWords}> JavaScript</b>,
              <b className={keyWords}> Apex</b>,<b className={keyWords}> CSS</b>
              ,<b className={keyWords}> HTML </b>
              and more.
              <br />
              Over the years, I have had the privilege of working on
              applications across various industries, including Finance, Online
              Gaming, Health and Wellness, Customer Relationship Management.
              These diverse experiences have allowed me to collaborate with both
              small and large companies, fostering a rich cross-cultural
              environment.
              <br />I am actively seeking a new role as a developer to further
              expand my skills and contribute to exciting projects.
            </p>
            {isDesktop ? (
              <>
                <button className={buttonStyle} onClick={redirectToLinkedIn}>
                  <img src={linkedin} alt="LinkedIn" className="w-6 h-6 mr-2" />
                  LinkedIn
                </button>
                <button className={buttonStyle} onClick={redirectToGitHub}>
                  <img src={github} alt="GitHub" className="w-6 h-6 mr-2" />
                  GitHub
                </button>
              </>
            ) : (
              <>
                <button className={buttonStyle} onClick={redirectToLinkedIn}>
                  <img src={linkedin} alt="LinkedIn" className="w-6 h-6 mr-2" />
                  LinkedIn
                </button>
                <button className={buttonStyle} onClick={redirectToGitHub}>
                  <img src={github} alt="GitHub" className="w-6 h-6 mr-2" />
                  GitHub
                </button>
                <button className={buttonStyle} onClick={downloadResume}>
                  <img src={resume} alt="Resume" className="w-6 h-6 mr-2" />
                  Resume
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import pfp from "../assets/pfp.jpg";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import resume from "../assets/resume.png";

const About = () => {
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

  const buttonStyle = "btn bg-stone-800 text-base-100";
  return (
    <div className="section">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${pfp})`,
        }}
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content absolute left-14 top-40 max-w-2xl ">
          <div>
            <h1 className="text-5xl font-extrabold font-mova">HI, I'M ROMEL</h1>
            <p className="py-6 text-2xl font-medium ">
              I'm a web developer based in the Philippines with years of
              experience working with languages and tools such as
              <b> Java</b>, <b>JavaScript</b> , <b>Apex</b> , <b>CSS</b>,{" "}
              <b>HTML</b> and more.
              <br /> I've had the privilege of developing and working on
              websites for various industries, including finance, online gaming,
              health and wellness, and more. These experiences have given me the
              opportunity to collaborate with both small and large companies.
              <br />I am currently actively seeking a new role as a developer to
              further expand my skills and contribute to exciting projects.
            </p>
            <button className={buttonStyle} onClick={redirectToLinkedIn}>
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6 mr-2" />
              LinkedIn
            </button>
            <button className={buttonStyle} onClick={redirectToGitHub}>
              <img src={github} alt="LinkedIn" className="w-6 h-6 mr-2" />
              GitHub
            </button>
            <button className={buttonStyle} onClick={downloadResume}>
              <img src={resume} alt="LinkedIn" className="w-6 h-6 mr-2" />
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

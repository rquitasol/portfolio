import React from "react";
import pfp from "../assets/pfp.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import resume from "../assets/resume.png";
import quitasol_resume from "../assets/quitasol_resume.pdf";

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
    const link = document.createElement("a");
    link.href = quitasol_resume;
    link.download = "quitasol_resume.pdf";
    link.click();
  };

  const buttonStyle = "btn bg-neutral text-base-100 font-FuturaPTMedium";
  const keyWords = "font-FuturaPTExtraBold decoration-secondary";

  return (
    <div className="section">
      <div
        className={`hero min-h-screen bg-white`}
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
              className={` font-extrabold font-FuturaPTHeavy text-stone-600 uppercase text-
              ${isDesktop ? "header-desktop" : "header-mobile"}
              `}
            >
              Hi, I'm{" "}
              <b className="text-secondary font-FuturaPTExtraBold">Romel</b>
            </h1>
            <p
              className={`py-6 font-FuturaPTMedium indent-8 text-left leading-relaxed
                ${isDesktop ? "paragraph-desktop" : "paragraph-mobile"}
              `}
            >
              I am a Software Engineer specializing in Full Stack Development,
              based in the Philippines, with extensive experience in programming
              languages and tools such as <b className={keyWords}> Java</b>,
              <b className={keyWords}> Golang</b>,
              <b className={keyWords}> JavaScript</b>,
              <b className={keyWords}> Apex</b>,<b className={keyWords}> CSS</b>
              ,<b className={keyWords}> HTML</b>, and more. Over the years, I
              have had the privilege of working on applications across various
              industries, including Blockchain, Finance, Online Gaming, Health
              and Wellness, and Customer Relationship Management. These diverse
              experiences have enabled me to collaborate with both small and
              large companies, fostering a rich cross-cultural environment. I am
              actively seeking a new role as a developer to further expand my
              skills and contribute to exciting projects.
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
                <button className={buttonStyle} onClick={downloadResume}>
                  <img src={resume} alt="Resume" className="w-6 h-6 mr-2" />
                  Resume
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

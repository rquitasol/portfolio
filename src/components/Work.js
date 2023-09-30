import React from "react";
import salesforce from "../assets/work-icons/salesforce.png";
import zennya from "../assets/work-icons/zennya.png";
import gfs from "../assets/work-icons/gfs.png";
import ntt from "../assets/work-icons/ntt.png";
import ob from "../assets/work-icons/o&b.png";
import eos from "../assets/work-icons/eos.png";
import cpu from "../assets/work-icons/cpu.png";

const Work = ({ isDesktop }) => {
  // const items = [
  //   {
  //     title: "Salesforce",
  //     cardTitle: "Software Engineer",
  //     cardSubtitle: "October 2019 – March 2022",
  //     cardDetailedText:
  //       "In this role, I primarily developed significant features in response to the Product Manager's requests, focusing on meeting client expectations. I conducted feature demonstrations for feedback, addressed reported bugs, and actively participated in code reviews to ensure code quality. Additionally, I created Selenium automation tests, enhancing testing processes for improved product reliability and efficiency.",
  //   },
  //   {
  //     title: "Zennya",
  //     cardTitle: "Backend Developer",
  //     cardSubtitle: "January 2019 - June 2019",
  //     cardDetailedText:
  //       "My responsibilities on this project included developing APIs for both mobile and web applications. I conducted research, documented, and implemented proof of concepts for potential new features. Additionally, I provided comprehensive documentation for newly created API endpoints and features. I actively participated in project meetings and ensured daily progress tracking in Jira.",
  //   },
  //   {
  //     title: "GreatFeat Services Inc.",
  //     cardTitle: "Software Developer",
  //     cardSubtitle: "May 2017 - November 2018",
  //     cardDetailedText:
  //       "Responsibilities included developing a web service for managing new game platforms, participating in team meetings and requirements gathering for new features, and optimizing the database through field and structure modifications. Additionally, the role involved revamping the WAP project using the Spring Framework, adding new features for game platforms, addressing existing bugs, and providing guidance and assistance to teammates in project development.",
  //   },
  //   {
  //     title: "NTT Global Networks",
  //     cardTitle: "Software Developer",
  //     cardSubtitle: "October 2013 – May2017",
  //     cardDetailedText:
  //       "Responsibilities included developing customer-centric features, addressing bugs, and modifying code for new requirements. Providing technical support, guiding team members, and managing application releases were essential tasks. Additionally, duties encompassed web service development, team meetings, project understanding, and collaboration on data integration. In another role, projects were designed and implemented with Oracle ADF and WebLogic Server 11g, involving active participation in meetings and requirement gathering.",
  //   },
  //   {
  //     title: "O&B University",
  //     cardTitle: "Java Boot Camp",
  //     cardSubtitle: "June 2017 – September 2017",
  //     cardDetailedText:
  //       "My experience in the boot camp covered essential Java fundamentals, web development, and the integration of Spring and Hibernate technologies. This comprehensive training equipped me with valuable skills for a range of software development roles.",
  //   },
  //   {
  //     title: "Engage Outsourcing Inc.",
  //     cardTitle: "Quality Analyst/ Software Developer",
  //     cardSubtitle: "October 2013 – May 2017",
  //     cardDetailedText:
  //       "Responsibilities included developing necessary stored procedures for the project, creating the administrator and reports modules, and actively participating in client team meetings to discuss requirements and timelines. Additionally, test cases were created and various project scenarios were tested thoroughly.",
  //   },
  //   {
  //     title: "Central Philippines University",
  //     cardTitle: "Bachelor of Science in Information Technology",
  //     cardSubtitle: "Jun2006-Mar2011",
  //     cardDetailedText:
  //       'Create major features requested by the Product Manager to be presented to the client.Demo of newly created feature to Product Manager to getfeedback on the requested feature.Fix bugs reported by teamCode review done by other teammatesCreate automation test using Selenium"',
  //   },
  // ];

  // const theme = {
  //   primary: "#FF6000",
  //   secondary: "#FFA559",
  //   titleColor: "#454545",
  //   titleColorActive: "#454545",
  //   iconBackgroundColor: "#FF6000",
  //   cardTitleColor: "#454545",
  //   cardBgColor: "#FFA559",
  // };

  // const fontSizes = {
  //   cardSubtitle: "1rem",
  //   cardText: "1.6rem",
  //   cardTitle: "1.6rem",
  //   title: "2rem",
  // };

  // const classNames = {
  //   card: "work-card",
  //   cardSubTitle: "work-card-subtitle",
  //   cardText: "work-card-text",
  //   cardTitle: "work-card-title",
  //   title: "work-title",
  // };

  // const icons = (
  //   <div className="chrono-icons">
  //     <img src={salesforce} alt="icon" />
  //     <img src={zennya} alt="icon" />
  //     <img src={gfs} alt="icon" />
  //     <img src={ntt} alt="icon" />
  //     <img src={ob} alt="icon" />
  //     <img src={eos} alt="icon" />
  //     <img src={cpu} alt="icon" />
  //   </div>
  // );

  return (
    <div className="section">
      <div className="hero min-h-screen bg-accent text-base-100 flex">
        <div className="hero-content  min-w-full">
          <div
            className={`h-screen w-full min-h-screen items-center ${
              isDesktop ? "pt-40" : "pt-20"
            }`}
          >
            <h1 className=" text-6xl text-neutral font-FuturaPTHeavy pb-20 pl-10">
              Work Experience
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

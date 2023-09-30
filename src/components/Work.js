import React, { useState } from "react";

const Work = ({ isDesktop }) => {
  const [openItem, setOpenItem] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenItem(idx === openItem ? null : idx);
  };

  const workerData = [
    {
      company: "Salesforce",
      role: "Software Engineer",
      time: "October 2019 – March 2022",
      stack: "Java, Apex Salesforce, SOQL, Selenium",
      description:
        "In this role, I primarily developed significant features in response to the Product Manager's requests, focusing on meeting client expectations. I conducted feature demonstrations for feedback, addressed reported bugs, and actively participated in code reviews to ensure code quality. Additionally, I created Selenium automation tests, enhancing testing processes for improved product reliability and efficiency.",
    },
    {
      company: "Zennya",
      role: "Backend Developer",
      time: "January 2019 - June 2019",
      stack: "Java, Grails, MySQL, MongoDB",
      description:
        "My responsibilities on this project included developing APIs for both mobile and web applications. I conducted research, documented, and implemented proof of concepts for potential new features. Additionally, I provided comprehensive documentation for newly created API endpoints and features. I actively participated in project meetings and ensured daily progress tracking in Jira.",
    },
    {
      company: "GreatFeat Services Inc.",
      role: "Software Developer",
      time: "May 2017 - November 2018",
      stack: "Java, JavaScript, jQuery, Spring Boot Rest, Hibernate, MySQL",
      description:
        "Responsibilities included developing a web service for managing new game platforms, participating in team meetings and requirements gathering for new features, and optimizing the database through field and structure modifications. Additionally, the role involved revamping the WAP project using the Spring Framework, adding new features for game platforms, addressing existing bugs, and providing guidance and assistance to teammates in project development.",
    },
    {
      company: "NTT Global Networks",
      role: "Software Developer",
      time: "October 2013 – May2017",
      stack:
        "Java, Oracle, Liferay, JavaScript, jQuery, Ajax, Rest, Spring, Hibernate, Oracle ADF",
      description:
        "Responsibilities included developing customer-centric features, addressing bugs, and modifying code for new requirements. Providing technical support, guiding team members, and managing application releases were essential tasks. Additionally, duties encompassed web service development, team meetings, project understanding, and collaboration on data integration. In another role, projects were designed and implemented with Oracle ADF and WebLogic Server 11g, involving active participation in meetings and requirement gathering.",
    },
    {
      company: "O&B University",
      role: "Java Boot Camp",
      time: "June 2017 – September 2017",
      stack: "Java, Spring, Hibernate",
      description:
        "My experience in the boot camp covered essential Java fundamentals, web development, and the integration of Spring and Hibernate technologies. This comprehensive training equipped me with valuable skills for a range of software development roles.",
    },
    {
      company: "Engage Outsourcing Inc.",
      role: "Quality Analyst/ Software Developer",
      time: "October 2013 – May 2017",
      stack: "PHP, MySQL, jQuery, CSS, HTML, Ajax",
      description:
        "Responsibilities included developing necessary stored procedures for the project, creating the administrator and reports modules, and actively participating in client team meetings to discuss requirements and timelines. Additionally, test cases were created and various project scenarios were tested thoroughly.",
    },
  ];

  const workMap = workerData.map((work, idx) => {
    const isOpen = idx === openItem;

    return (
      <div
        className={`collapse collapse-arrow join-item border border-base-300 text-left ${
          isOpen ? "open" : ""
        }`}
      >
        <input
          type="radio"
          name="my-accordion"
          checked={isOpen}
          onChange={() => toggleAccordion(idx)}
        />
        <div
          className="collapse-title font-FuturaPTHeavy text-2xl text-secondary"
          onClick={() => toggleAccordion(idx)}
        >
          {work.company}
        </div>
        <div className={`collapse-content ${isOpen ? "block" : "hidden"}`}>
          <p className="font-FuturaPTMedium text-lg pb-1">{work.role}</p>
          <p className="font-FuturaPTMedium text-m pb-1">{work.time}</p>
          <p>{work.description}</p>
          <p className="font-FuturaPTMedium text-m pt-2">
            Tech stack: {work.stack}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className="section">
      <div className="hero min-h-screen bg-neutral">
        <div className="hero-content text-center">
          <div className="max-w-full">
            <h1
              className={`font-FuturaPTHeavy text-base-200 text-4xl pb-5 text-left ${
                isDesktop ? "header-desktop" : "header-mobile"
              }`}
            >
              Work Experience
            </h1>
            <div>
              <div className="join join-vertical w-full bg-base-100">
                {workMap}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

import React from "react";
import WorkTab from "./WorkTab";
import WorkAccordion from "./WorkAccordion";

const Work = ({ isDesktop }) => {
  const workDetails = [
    {
      company: "BriskLabs.dev",
      role: "Freelance Developer",
      time: "March 2023 – Present",
      stack: ["JavaScript", "React", "TailwindCss", "Firebase"],
      description:
        "Brisklabs.devs is a global collective of freelance developers who have been collaboratively creating mobile, web, and API backend applications since 2010. As a freelance developer, my primary focus was on the front-end development of Eazedine.",
    },
    {
      company: "Nodies",
      role: "Senior Applications Developer",
      time: "December 2023 – Auguest 2024",
      stack: ["Golang", "Blockchain", "InfluxDB", "PostgreSQL", "Grafana", "JavaScript", "React"],
      description:
        "Nodies is a provider for web3 infrastructure services such as RPC endpoints, crosschain data lakes, blockchain data hosting.",
    },
    {
      company: "iScale Solutions",
      role: "Software Engineer",
      time: "October 2019 – March 2022",
      stack: ["Java", "Apex", "Salesforce", "SOQL", "Selenium"],
      description:
        "Vlocity is an industry cloud software company renowned for its deep domain expertise in vertical applications and modern cloud and mobile solutions. I primarily focused on developing significant features based on Product Manager requests, prioritizing client expectations. I also conducted feature demonstrations for feedback, addressed reported bugs, and actively participated in code reviews to ensure high code quality.  My contributions included creating Selenium automation tests to enhance testing processes, improving product reliability, and efficiency.",
    },
    {
      company: "Zennya",
      role: "Backend Developer",
      time: "January 2019 - June 2019",
      stack: ["Java", "Grails", "MySQL", "MongoDB"],
      description:
        "Zennya is a provider of on-demand medical and wellness services through a mobile app, offering various healthcare services at home or in the office, including lab tests, Covid-19 swab tests, online doctor consultations, vaccination, and massage and physiotherapy services. As a software developer at Zennya, my responsibilities included developing APIs for both the mobile and web applications, conducting research, implementing proof of concepts for potential new features, creating comprehensive documentation for API endpoints and features, actively participating in project meetings, and ensuring daily progress tracking in Jira.",
    },
    {
      company: "GreatFeat Services Inc.",
      role: "Software Developer",
      time: "May 2017 - November 2018",
      stack: [
        "Java",
        "JavaScript",
        "jQuery",
        "Spring Boot",
        "Rest",
        "Hibernate",
        "MySQL",
      ],
      description:
        "Responsibilities included developing a web service for managing new game platforms, participating in team meetings and requirements gathering for new features, and optimizing the database through field and structure modifications. Additionally, the role involved revamping the WAP project using the Spring Framework, adding new features for game platforms, addressing existing bugs, and providing guidance and assistance to teammates in project development.",
    },
    {
      company: "NTT Global Networks",
      role: "Software Developer",
      time: "October 2013 – May2017",
      stack: [
        "Java",
        "Oracle",
        "Liferay",
        "JavaScript",
        "jQuery",
        "Ajax",
        "Rest",
        "Spring",
        "Hibernate",
        "Oracle ADF",
      ],
      description:
        "NTT is a global technology services leader specializing in intelligent solutions. As a software developer, I played a pivotal role, developing customer-centric features, addressing bugs, and managing application releases. Most of my responsibilities also included technical support, guiding team members, web service development, and collaboration on data integration. I contributed to projects involving Oracle ADF and WebLogic Server 11g, actively participating in meetings and requirement gathering, all within NTT  commitment to delivering data-driven, secure, and innovative technology solutions.",
    },
    {
      company: "Engage Outsourcing Inc.",
      role: "Quality Analyst/ Software Developer",
      time: "September 2012 – May 2013",
      stack: ["PHP", "MySQL", "jQuery", "CSS", "HTML", "Ajax"],
      description:
        "Engage Outsourcing is a company specializing in customer service, internet marketing, and technical support for clients in the financial, technology, and service sectors, my responsibilities included developing necessary stored procedures for the project, creating the administrator and reports modules, and actively participating in client team meetings to discuss requirements and timelines. Additionally, test cases were created and various project scenarios were tested thoroughly.",
    },
  ];

  return (
    <div className="section">
      <div className="hero min-h-screen bg-neutral">
        <div className="hero-content text-center">
          <div className="max-w-full">
            <h1
              className={`font-FuturaPTHeavy text-secondary text-4xl  text-center ${
                isDesktop ? "header-desktop pb-10" : "header-mobile pb-3"
              }`}
            >
              Work Experience
            </h1>
            <div>
              {isDesktop ? (
                <WorkTab workDetails={workDetails} isDesktop={isDesktop} />
              ) : (
                <WorkAccordion workDetails={workDetails} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

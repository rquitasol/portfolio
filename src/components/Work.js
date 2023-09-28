import React from "react";
import { Chrono } from "react-chrono";

const Work = ({ isDesktop }) => {
  const items = [
    {
      title: "2011",
      cardTitle: "Central Philippines Univesity",
      cardSubtitle: "Bachelor of Science in Information Technology",
      cardDetailedText:
        'Create major features requested by the Product Manager to be presented to the client.Demo of newly created feature to Product Manager to getfeedback on the requested feature.Fix bugs reported by teamCode review done by other teammatesCreate automation test using Selenium"',
    },

    {
      title: "Zennya",
      cardTitle: "Backend Developer",
      cardSubtitle: "Zennya API",
      cardDetailedText:
        "Developed APIs for mobile and web applications.Researched, documented and implemented proof of conceptsto be used as new features. Provided documentation for new api endpoints and new featuresimplemented. Participated in meetings and logged daily progress in Jira",
    },

    {
      title: "GreatFeat Services Inc.",
      cardTitle: "Software Developer",
      cardSubtitle: "Online Gaming App",
      cardDetailedText:
        "Developed web service to manage new game platforms Participated in team meetings, requirement gathering for new features Modified fields and structure of database for optimization.",
    },
    {
      title: "iScale Solution",
      cardTitle: "Software Engineer",
      cardSubtitle: "Salesforce",
      cardDetailedText:
        'Create major features requested by the Product Manager to be presented to the client.Demo of newly created feature to Product Manager to getfeedback on the requested feature.Fix bugs reported by teamCode review done by other teammatesCreate automation test using Selenium"',
    },

    {
      title: "Zennya",
      cardTitle: "Backend Developer",
      cardSubtitle: "Zennya API",
      cardDetailedText:
        "Developed APIs for mobile and web applications.Researched, documented and implemented proof of conceptsto be used as new features. Provided documentation for new api endpoints and new featuresimplemented. Participated in meetings and logged daily progress in Jira",
    },

    {
      title: "GreatFeat Services Inc.",
      cardTitle: "Software Developer",
      cardSubtitle: "Online Gaming App",
      cardDetailedText:
        "Developed web service to manage new game platforms Participated in team meetings, requirement gathering for new features Modified fields and structure of database for optimization.",
    },
  ];

  return (
    <div className="section">
      <div className="hero min-h-screen bg-accent text-neutral flex">
        <div className="hero-content  min-w-full">
          <div className="h-screen w-full min-h-screen items-center pt-20">
            <h1 className="mb-5 text-5xl font-bold pb-10">Work Experience</h1>
            {isDesktop ? (
              <Chrono
                items={items}
                mode="HORIZONTAL"
                cardWidth={450}
                cardHeight={300}
                contentDetailsHeight={100}
                enableOutline
                showAllCardsHorizontal
                itemWidth={500}
              />
            ) : (
              <Chrono
                items={items}
                mode="HORIZONTAL"
                cardWidth={300}
                cardHeight={300}
                contentDetailsHeight={100}
                enableOutline
                showSingle
                itemWidth={300}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

import React, { useState } from "react";

//Used for desktop view
const WorkTab = ({ workDetails, isDesktop }) => {
  const [activeTab, setActiveTab] = useState(0);

  const openTab = (tabId) => {
    setActiveTab(tabId);
  };

  //Tab Names
  const tabs = workDetails.map((work, idx) => {
    return (
      <div
        key={"tab_" + idx}
        className={`p-9 border-secondary min-w-max text-left font-FuturaPTMedium text-base-200 text-2xl border-l-2  ${
          activeTab === idx ? "tab-active border-b-2 text-secondary" : ""
        }   `}
        onClick={() => openTab(idx)}
      >
        {work.company}
      </div>
    );
  });

  // Tab Content
  const tabContents = workDetails.map((work, idx) => {
    return (
      activeTab === idx && (
        <div id={idx} key={"tab_content_" + idx} className={`px-5 h-60`}>
          <div>
            <div className="font-FuturaPTMedium text-3xl pb-3">{work.role}</div>
            <div className="font-FuturaPTLight italic text-xl pb-3">
              {work.time}
            </div>
            <div className="font-FuturaPTLight text-xl pb-5">
              {work.description}
            </div>
            <div className="techstack font-FuturaPTMedium text-lg">
              <div>Tech stack: </div>
              <div className="flex flex-col flex-wrap  max-h-60">
                {work.stack.map((stack, stackIdx) => (
                  <div
                    key={"stack_" + stackIdx}
                    className="flex items-center font-FuturaPTLight ml-10 mt-3"
                  >
                    <b className="font-FuturaPTExtraBold text-secondary mr-4">
                      +
                    </b>
                    {stack}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    );
  });

  return (
    <div className=" bg-neutral text-base-200 w-full flex">
      <div className="flex flex-col mr-10 border-secondary">{tabs}</div>
      <div className="tab-content text-justify">{tabContents}</div>
    </div>
  );
};

export default WorkTab;

import React, { useState } from "react";

const WorkAccordion = ({ workDetails }) => {
  const [openItem, setOpenItem] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenItem(idx === openItem ? null : idx);
  };

  const workMap = workDetails.map((work, idx) => {
    const isOpen = idx === openItem;

    return (
      <div
        className={`collapse collapse-arrow join-item border border-secondary text-left 
         ${isOpen ? "open" : ""}`}
        key={work.company + "_" + idx}
      >
        <input
          type="radio"
          name="my-accordion"
          checked={isOpen}
          onChange={() => toggleAccordion(idx)}
        />
        <div
          className={`collapse-title font-FuturaPTHeavy text-base-300 text-xl ${
            isOpen ? "bg-secondary text-neutral" : ""
          }`}
          onClick={() => toggleAccordion(idx)}
        >
          {work.company}
        </div>
        <div
          className={`collapse-content paragraph-mobile text-base-100 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <p className="font-FuturaPTMedium text-lg pb-1 pt-2">{work.role}</p>
          <p className="font-FuturaPTMedium text-m italic pb-1">{work.time}</p>
          <p>{work.description}</p>
          <p className="font-FuturaPTMedium text-m pt-2">
            Tech stack: {work.stack.join(", ")}
          </p>
        </div>
      </div>
    );
  });

  return <div className="join join-vertical w-full bg-neutral">{workMap}</div>;
};

export default WorkAccordion;

import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header"; // Import the Header component

const App = () => {
  const [activeSection, setActiveSection] = useState(0);
  const numSections = 4;
  const sectionHeight = 100;

  const handleScroll = (event) => {
    if (event.deltaY > 0 && activeSection < numSections - 1) {
      setActiveSection(activeSection + 1);
    } else if (event.deltaY < 0 && activeSection > 0) {
      setActiveSection(activeSection - 1);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [activeSection]);

  const sections = Array.from({ length: numSections }, (_, index) => (
    <div
      key={index}
      className={`section ${activeSection === index ? "active" : ""}`}
      style={{
        transform: `translateY(-${activeSection * sectionHeight}vh)`,
      }}
    >
      <h1>Section {index + 1}</h1>
      <p>Content for Section {index + 1} goes here.</p>
    </div>
  ));

  return (
    <div className="app">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />{" "}
      {/* Include the Header component */}
      <div className="sections">{sections}</div>
    </div>
  );
};

export default App;

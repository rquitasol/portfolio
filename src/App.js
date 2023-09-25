import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const numSections = 5;
  const sectionHeight = 100;
  const scrollDelay = 1000;
  let touchStartY;

  const sections = [
    <Home key={1} />,
    <About key={2} />,
    <Work key={3} />,
    <Projects key={4} />,
    <Contact key={5} />,
  ];

  const handleScroll = (event) => {
    if (isScrolling) return;

    if (event.deltaY > 0 && activeSection < numSections - 1) {
      scrollToSection(activeSection + 1);
    } else if (event.deltaY < 0 && activeSection > 0) {
      scrollToSection(activeSection - 1);
    }
  };

  const handleTouchStart = (event) => {
    touchStartY = event.touches[0].clientY;
  };

  const handleTouchMove = (event) => {
    const touchEndY = event.touches[0].clientY;
    const deltaY = touchEndY - touchStartY;

    if (deltaY > 50 && activeSection > 0) {
      scrollToSection(activeSection - 1);
    } else if (deltaY < -50 && activeSection < numSections - 1) {
      scrollToSection(activeSection + 1);
    }
  };

  const scrollToSection = (sectionIndex) => {
    setIsScrolling(true);
    setTimeout(() => {
      setActiveSection(sectionIndex);
      setIsScrolling(false);
    }, scrollDelay);
  };

  // For Mobile Touchpad
  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [activeSection, isScrolling]);

  const sectionStyles = {
    height: `${numSections * sectionHeight}vh`,
    transform: `translateY(-${activeSection * sectionHeight}vh)`,
    transition: "transform 0.55s ease-in-out",
    overflowY: "hidden",
  };

  return (
    <div className="app">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="sections" style={sectionStyles}>
        {sections.map((section, index) => (
          <div
            key={index}
            style={{
              height: `${sectionHeight}vh`,
            }}
          >
            {section}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

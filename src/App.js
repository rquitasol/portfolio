import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useMediaQuery } from "react-responsive";

const App = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  const numSections = 4;
  const sectionHeight = 100;
  const scrollDelay = 500;
  let touchStartY;

  const sections = [
    <About key={1} isDesktop={isDesktop} />,
    <Work key={2} isDesktop={isDesktop} />,
    <Projects key={3} isDesktop={isDesktop} />,
    <Contact key={4} isDesktop={isDesktop} />,
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
    // eslint-disable-next-line
  }, [activeSection, isScrolling]);

  const sectionStyles = {
    height: `${numSections * sectionHeight}vh`,
    transform: `translateY(-${activeSection * sectionHeight}vh)`,
    overflowY: "hidden",
  };

  return (
    <div className="app">
      <Header
        isDesktop={isDesktop}
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

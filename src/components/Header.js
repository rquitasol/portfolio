import React from "react";
import "../style/Header.css";

const Header = ({ activeSection, setActiveSection }) => {
  const handleNavigation = (sectionIndex) => {
    setActiveSection(sectionIndex);
  };

  return (
    <div className="header">
      <ul>
        <li
          className={activeSection === 0 ? "active" : ""}
          onClick={() => handleNavigation(0)}
        >
          Home
        </li>
        <li
          className={activeSection === 1 ? "active" : ""}
          onClick={() => handleNavigation(1)}
        >
          About
        </li>
        <li
          className={activeSection === 2 ? "active" : ""}
          onClick={() => handleNavigation(2)}
        >
          Work
        </li>
        <li
          className={activeSection === 3 ? "active" : ""}
          onClick={() => handleNavigation(3)}
        >
          Projects
        </li>
        <li
          className={activeSection === 4 ? "active" : ""}
          onClick={() => handleNavigation(4)}
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Header;

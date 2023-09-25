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
          Section 1
        </li>
        <li
          className={activeSection === 1 ? "active" : ""}
          onClick={() => handleNavigation(1)}
        >
          Section 2
        </li>
        <li
          className={activeSection === 2 ? "active" : ""}
          onClick={() => handleNavigation(2)}
        >
          Section 3
        </li>
        <li
          className={activeSection === 3 ? "active" : ""}
          onClick={() => handleNavigation(3)}
        >
          Section 4
        </li>
      </ul>
    </div>
  );
};

export default Header;

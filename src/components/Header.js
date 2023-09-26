import React from "react";
import "../style/Header.css";

const Header = ({ activeSection, setActiveSection }) => {
  const handleNavigation = (sectionIndex) => {
    setActiveSection(sectionIndex);
  };

  const titleHoverStyle = "hover:bg-base-300";

  return (
    <div className="navbar header bg-stone-800 opacity-90 font-mova ">
      <div className="navbar-start">
        <p
          className="btn btn-ghost normal-case text-5xl ml-10 text-base-300"
          onClick={() => handleNavigation(0)}
        >
          romelquitasol
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-2xl ">
          <li className="px-5" onClick={() => handleNavigation(0)}>
            <p className={titleHoverStyle}>About</p>
          </li>
          <li className="px-5" onClick={() => handleNavigation(1)}>
            <p className={titleHoverStyle}>Work</p>
          </li>
          <li className="px-5" onClick={() => handleNavigation(2)}>
            <p className={titleHoverStyle}>Projects</p>
          </li>
          <li className="px-5" onClick={() => handleNavigation(3)}>
            <p className={titleHoverStyle}>Contact</p>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-stone-800 rounded-md text-2xl w-52"
          >
            <li onClick={() => handleNavigation(0)}>
              <p className={titleHoverStyle}>About</p>
            </li>
            <li onClick={() => handleNavigation(1)}>
              <p className={titleHoverStyle}>Work</p>
            </li>
            <li onClick={() => handleNavigation(2)}>
              <p className={titleHoverStyle}>Projects</p>
            </li>
            <li onClick={() => handleNavigation(3)}>
              <p className={titleHoverStyle}>Contact</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

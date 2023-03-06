import { useState } from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const date = new Date().getFullYear();

  const [hovered, setHovered] = useState("");
  const [titleTransform, settitleTransform] = useState("");
const [navLink, setnavLink] = useState('')

  const onMouseEnter = () => {
    setHovered("hovered");
    settitleTransform("titleTrf");
    setnavLink('navChange');
  };

  const onMouseLeave = () => {
    setHovered("");
    settitleTransform("");
    setnavLink('');
  };

  return (
    <div className="firstContainer">
      <div
        className="headerContainer"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <header className="mainHeader">
          <h2 className={titleTransform}>PORTFOLIO {date}</h2>
          <nav className="navHeader">
            <ul className="mainNav">
              <li>
                <NavLink
                  to="messages"
                  activeClassName="nav-links-active"
                  className={`nav-links ${navLink}`}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="tasks"
                  activeClassName="nav-links-active"
                  className={`nav-links ${navLink}`}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about"
                  activeClassName="nav-links-active"
                  className={`nav-links ${navLink}`}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="tasks"
                  activeClassName="nav-links-active"
                  className={`nav-links ${navLink}`}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div className={`line ${hovered}`}></div>
    </div>
  );
};

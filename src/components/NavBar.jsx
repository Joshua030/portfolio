import { useState } from "react";
import { NavLink } from "react-router-dom";


const NavBar = () => {
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
                <a
                href="#skillsId"
                  // activeClassName="nav-links-active"
                  className={`nav-links ${navLink}`}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#list-Projects"
                  // activeClassName="nav-links-active"
                  className={`nav-links ${navLink}`}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  // activeClassName="nav-links-active"
                  className={`nav-links ${navLink}`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                 href="#contactId"
                  // activeClassName="nav-links-active"
                  className={`nav-links ${navLink}`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div className={`line ${hovered}`}></div>
    </div>
  );
}


export default NavBar;
import { useState } from "react";

const Skills = () => {
const [translate, setTranslate] = useState("")
    
  
    const onMouseEnter = () => {
        setTranslate("initiate");
    };
    const onMouseLeave = () => {
        setTranslate("");
      };
  return (
    <div className="skills-Container" onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}>
      <div className="hero-Header">
        <h1 className={`title-skills ${translate}`}>Skills</h1>
        <div className="main-Icons">
          <ion-icon name="logo-javascript" size="large"></ion-icon>
          <ion-icon name="logo-css3" size="large"></ion-icon>
          <ion-icon name="logo-react" size="large"></ion-icon>
          <ion-icon name="logo-html5" size="large"></ion-icon>
          <ion-icon name="logo-firebase" size="large"></ion-icon>
          <ion-icon name="logo-nodejs" size="large"></ion-icon>
          <ion-icon name="logo-github" size="large"></ion-icon>
        </div>
      </div>
      <div className="abilities-Container">
        <ul>
          <li>html</li>

          <li>JavaScript</li>
          <li>Css</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Typescript</li>
          <li>Node</li>
          <li>Express</li>
        </ul>
        <ul>
          <li>Less</li>
          <li>Sequalize</li>
          <li>Firebase</li>
          <li>Strapi</li>
          <li>Hasura</li>
          <li>Stripe</li>
          <li>Magic</li>
          <li>PostgreSQL</li>
        </ul>
        <ul>
          <li>SQL</li>
          <li>GraphQL</li>
          <li>Wordpress</li>
          <li>Elementor</li>
          <li>AirTable</li>
          <li>Git</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;

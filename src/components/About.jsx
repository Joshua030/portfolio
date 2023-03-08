import { useState } from "react";

const About = () => {

    const [hovered, setHovered] = useState("");
    
  
    const onMouseEnter = () => {
      setHovered("enter");
    };
  
    const onMouseLeave = () => {
      setHovered("");
    };
  return (
    <div className="about-Container" >
         <div className={`point ${hovered}`}></div>
      <div className="brief-Container"  onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave} >
        <q>
          "Hello! As a Mechanical Engineer turned Full-Stack Developer, I have
          developed a strong set of skills in problem-solving, analytical
          thinking, and attention to detail. While I may not have professional
          experience as a front-end developer, I have been working on personal
          projects to hone my skills and gain practical experience in the field.
          These projects have allowed me to develop a solid foundation in HTML,
          CSS, JavaScript, and React, and have given me a strong understanding
          of web development principles and best practices. Additionally, my
          experience in mechanical engineering has given me a unique perspective
          on design, development, and problem-solving that I believe will be an
          asset in a front-end development role. I am passionate about learning
          and eager to bring my skills and enthusiasm to a new team as I begin
          my career in front-end development." 
        </q>
      </div>
      <div className={`point ${hovered}`}></div>
    </div>
  );
};

export default About;
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
    <div className="about-Container">
        <div className={`bg-image ${hovered}`}></div>
      <div className="inner-about-container">
        <div className={`point ${hovered}`}></div>
        <div
          className="brief-Container"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <q>
            Hello! I am a Full-Stack Developer with 1 year of experience in
            Next.js, React, TypeScript, JavaScript, HTML, Vue.js, SQL, Express,
            CSS, and Tailwind. I am also familiar with GraphQL and currently
            learning Java and PHP. My experience in web development has allowed
            me to develop a strong set of skills in problem-solving, analytical
            thinking, and attention to detail. I am passionate about staying
            up-to-date with the latest technologies and best practices in the
            field. My diverse background, including a degree in Mechanical
            Engineering, has given me a unique perspective on design,
            development, and problem-solving. I am excited to bring my skills
            and enthusiasm to a new team as I continue to grow and develop in my
            career.
          </q>
        </div>
        <div className={`point ${hovered}`}></div>
      </div>
    </div>
  );
};

export default About;

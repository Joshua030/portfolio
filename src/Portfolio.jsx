import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import { Project } from "./components/Project";
import Skills from "./components/Skills";

const Portfolio = () => {
  return (
    <>
      <div className="hero-Section">
        <NavBar />
        <div className="inner-Section">
          <div className="inner-container">
            <div className="information-Header">
              <div className="hero-Header">
                <h1>Jose Luis Ceballos</h1>
                <h3>Full Stack Developer</h3>
              </div>
              <div className="hero-Header">
                <h2>
                  Currently looking for a full-time position as a <b>W</b>
                  eb <b>D</b>eveloper.
                </h2>
              </div>
              <div className="footer-Hero">
                <h3>Barcelona, Spain</h3>
                <a href="mailto:joseluy123@gmail.com">Joseluy123@gmail.com</a>
              </div>
            </div>
            <div className="img-inner-container">
              <figure className="gallery-item">
                <img
                  src="\heroImg.jpg"
                  alt="Sketch done from a web creator photo."
                />
              </figure>
              <div className="social-logos-header">
                <a href="https://github.com/Joshua030" target="blank" rel="nofollow" >
                  <ion-icon
                    className="social-logo"
                    name="logo-github"
                  ></ion-icon>
                </a>
                <a href="https://www.linkedin.com/in/ingjlceballos/" target="blank" rel="nofollow">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skillsId">
        <Skills />
      </div>
      <div id="list-Projects">
        <Project />
      </div>
      <div id="contactId">
        <Contact />
      </div>
    </>
  );
};

export default Portfolio;

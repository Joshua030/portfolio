import About from "./components/About";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";

const Portfolio = () => {
  return (
    <>
      <div className="hero-Section">
        <NavBar />
        <div className="inner-Section">
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
              <p>Joseluy123@gmail.com</p>
            </div>
          </div>
          <figure className="gallery-item">
            <img
              src="assets\images\heroImg.jpg"
              alt="Sketch done from a web creator photo."
            />
          </figure>
        </div>
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skillsId">
        <Skills />
      </div>
    </>
  );
};

export default Portfolio;

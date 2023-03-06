import { NavBar } from "./components/NavBar";

export const Portfolio = () => {
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
                Currently looking for a full-time position as a{" "}
                <strong>W</strong>
                eb <stron>D</stron>eveloper.
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
    </>
  );
};

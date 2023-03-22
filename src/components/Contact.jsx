import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>How can i help you</h2>
      <div className="social-logos">
        <a href="https://github.com/Joshua030">
          <ion-icon className="social-logo" name="logo-github"></ion-icon>
        </a>
        <a href="https://www.linkedin.com/in/ingjlceballos/">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
      </div>
      <div className="contactme-container">
        <div className="myinformation">
          <h2>Contact Me</h2>
        </div>
        <div className="encourage-message">
          <h3>Jose Luis Ceballos</h3>
          <p>+34 600 321 100</p>
          <p>Joseluy123@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

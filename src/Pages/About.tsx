import aboutProfile from "../assets/image 1.jpg";
import aboutFooter from "../assets/header.png";
import "../Styles/Pages/about.scss";
import AboutText from "../Components/AboutText";
import Header from "../Components/Header";

const About = () => {
  return (
    <div className="about-container">
      <Header />

      <AboutText />

      <div className="about-profile">
        <img
          src={aboutProfile}
          alt="Eva Cortado"
          className="about-profile-img"
        />
        <h3>Eva Cortado</h3>
        <h4>VD & Grundare</h4>
      </div>

      <footer className="about-footer">
        <img
          src={aboutFooter}
          alt="Footer med blad"
          className="about-footer-img"
        />
      </footer>
    </div>
  );
};

export default About;

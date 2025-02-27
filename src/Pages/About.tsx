// Importing imgs for profilepicture and footer
import aboutProfile from "../assets/image 1.jpg";
import aboutFooter from "../assets/header.png";
// Importing css
import "../Styles/Pages/about.scss";
// Importing components with textinfo from Abouttext and a global header component
import AboutText from "../Components/AboutText";
import Header from "../Components/Header";

const About = () => {
  return (
    <div className="about-container">
      <Header /> {/* Our global header component */}

      <AboutText /> {/* Info text that we import from our component */}

      <div className="about-profile">
        <img
          src={aboutProfile} /* Profilepicture img */
          alt="Eva Cortado"
          className="about-profile-img"
        />
        <h3>Eva Cortado</h3>
        <h4>VD & Grundare</h4>
      </div>

      <footer className="about-footer"> 
        <img
          src={aboutFooter} /* Global footer img */
          alt="Footer med blad"
          className="about-footer-img"
        />
      </footer>
    </div>
  );
};

export default About;

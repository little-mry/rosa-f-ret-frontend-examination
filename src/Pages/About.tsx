/* import headerImage from "../assets/header (2).png"
import headerButton from "../assets/navicon (2).png" */
import aboutProfile from "../assets/image 1.jpg"
import aboutFooter from "../assets/header.png"
import "../Styles/Pages/about.scss"
import AboutText from "../Components/AboutText"
import Header from "../Components/Header"
import Cart from "../Components/Cart"

const About = () => {
  return (
    <div className="about-container">
     {/*  <header className="header">
        <img src={headerImage} alt="header med blad" className="about-header-img" />
        <img src={headerButton} alt="Hamburgarmeny header" className="about-header-button" />
      </header> */}

      <Header />
      <Cart />
      <AboutText />

      <div className="about-profile">
        <img src={aboutProfile} alt="Eva Cortado" className="about-profile-img" />
        <h3>Eva Cortado</h3>
        <h4>VD & Grundare</h4>
      </div>

      <footer className="about-footer">
        <img src={aboutFooter} alt="Footer med blad" className="about-footer-img" />
      </footer>
    </div>
  )
}

export default About
import headerImage from "../assets/header (2).png"
import headerButton from "../assets/navicon (2).png"
import aboutProfile from "../assets/image 1.jpg"
import aboutFooter from "../assets/header.png"

const About = () => {
  return (
    <div className="about-container">
      <header className="header">
        <img src={headerImage} alt="header med blad" className="about-header-img" />
        <img src={headerButton} alt="Hamburgarmeny header" className="about-header-button" />
      </header>

      <div className="about-content">
        <h1>Vårt kaffe</h1>
        <h2>
          Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong
          whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.
        </h2>
        <p>
          Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk
          black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction
          instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so
          dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour,
          frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.
        </p>
        <p>
          Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so,
          galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go,
          steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão
          black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop
          filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black,
          galão flavour, milk aromatic turkish skinny crema.
        </p>
      </div>

      <div className="about-profile">
        <img src={aboutProfile} alt="Eva Cortado" className="about-profile-img" />
        <h3>Eva Cortado</h3>
        <h4>VD & Grundare</h4>
      </div>

      <footer className="about-footer">
        <img src={aboutFooter} alt="Footer med blad" className="about-footer-img" />
      </footer>
    </div>
  );
};

export default About
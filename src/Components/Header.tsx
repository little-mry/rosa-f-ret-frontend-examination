import headerImg from "../assets/header-up.png";
import NavIcon from "../assets/navicon.png";
import CartIcon from "../assets/bag.svg";
import '../Styles/Components/Header.scss'

const Header = () => {
  return (
    <header className="header__con" style={{ backgroundImage: `url("${headerImg}")`}}>
      <img src={NavIcon} alt="Navigation icon" className="nav__icon" />
      <div className="cart__con">
        <img src={CartIcon} alt="Navigation icon" className="cart__icon" />
        <p className="cart__amount">{}</p>
      </div>
    </header>
  );
};

export default Header;

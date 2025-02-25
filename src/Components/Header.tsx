import headerImg from "../assets/header-up.png";
import CartIcon from "../assets/bag.svg";
import '../Styles/Components/Header.scss'
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="header__con" style={{ backgroundImage: `url("${headerImg}")`}}>
      <Nav/>
      <div className="cart__con">
        <img src={CartIcon} alt="Cart icon" className="cart__icon" />
        <p className="cart__amount">{}</p>
      </div>
    </header>
  );
};

export default Header;

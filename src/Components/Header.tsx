import headerImg from "../assets/header-up.png";
import '../Styles/Components/Header.scss'
import Cart from "./Cart";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="header__con" style={{ backgroundImage: `url("${headerImg}")`}}>
      <Nav/>
      <div className="cart__con">
        <Cart />
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import '../Styles/Pages/menu.scss';
/* import HeaderImg from '../assets/header-up.png'; */
import FooterImg from '../assets/header.png';
import MenuItem from '../Components/MenuItem'
import Header from "../Components/Header";

const Menu: React.FC = () => {
  return (
    <div className="menu">
        <header>
            <Header />
            <h1>Meny</h1>
        </header>
        <MenuItem/>
        <footer>
        <img src={FooterImg}/>
        </footer>
    </div>
  );
};

export default Menu;
import React from 'react';
import '../Styles/Pages/menu.scss';
import HeaderImg from '../assets/header (2).png';
import FooterImg from '../assets/header.png';
import MenuItem from '../Components/MenuItem'

const Menu: React.FC = () => {
  return (
    <div className="menu">
        <header>
            <img src={HeaderImg}/>
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
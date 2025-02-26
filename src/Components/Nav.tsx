import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavIcon from "../assets/navicon.png";
import ExitIcon from "../assets/exit-icon.png";
import "../Styles/Components/nav.scss";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <img
        src= {isMenuOpen ? ExitIcon : NavIcon}
        alt="Navigation icon"
        className={`nav__icon ${isMenuOpen ? "nav__icon--close" : "nav__icon--open"}`}
        onClick={toggleMenu}
      />

      {isMenuOpen && (
        <div className="nav__menu">
          <div className="nav__menu-content">
            <nav>
              <ul>
                <li
                  onClick={() => {
                    navigate("/menu");
                    toggleMenu();
                  }}>
                  Meny
                  <div className="divider-line"></div>
                </li>
                <li
                  onClick={() => {
                    navigate("/about");
                    toggleMenu();
                  }}>
                  Vårt kaffe
                  <div className="divider-line"></div>
                </li>
                <li
                  onClick={() => {
                    navigate("/status");
                    toggleMenu();
                  }}>
                  Orderstatus
                  <div className="divider-line"></div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;

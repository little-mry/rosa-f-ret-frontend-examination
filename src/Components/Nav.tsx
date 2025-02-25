import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavIcon from "../assets/navicon.png";
import "../Styles/Components/nav.scss"; 

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        if (isMenuOpen) {
            setIsClosing(true);
            setTimeout(() => {
                setIsMenuOpen(false);
                setIsClosing(false);
            }, 500); // Match animation duration
        } else {
            setIsMenuOpen(true);
        }
    };

    const handleNavigation = (path: string) => {
        toggleMenu();
        setTimeout(() => {
            navigate(path);
        }, 500);
    };

    return (
        <>
            <img
                src={NavIcon}
                alt="Navigation icon"
                className="nav__icon"
                onClick={toggleMenu}
            />

            {isMenuOpen && (
                <div className={`nav__menu ${isClosing ? 'closing' : ''}`}>
                    <div className="nav__menu-content">
                        <nav>
                            <ul>
                                <li onClick={() => handleNavigation('/menu')}>Meny</li>
                                <li onClick={() => handleNavigation('/about')}>Vårt kaffe</li>
                                <li onClick={() => handleNavigation('/status')}>Order Status</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
};

export default Nav;
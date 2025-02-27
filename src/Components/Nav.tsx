import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavIcon from "../assets/navicon.png";
import ExitIcon from "../assets/exit-icon.png";
import "../Styles/Components/nav.scss";

//component for navigation-menu
const Nav = () => {
  //State to track when nav is open/closed
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	//navigation function from router
	const navigate = useNavigate();

  //Function to toggle open/closed
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
    {/* toggles between 2 icons when open or closed */}
			<img
				src={isMenuOpen ? ExitIcon : NavIcon}
				alt="Navigation icon"
				className={`nav__icon ${isMenuOpen ? "nav__icon--close" : "nav__icon--open"}`}
				 //Toggles menu onclick
        onClick={toggleMenu}
			/>
{/* Condition to render menu when state is true */}
			{isMenuOpen && (
				<div className="nav__menu">
					<div className="nav__menu-content">
						<nav>
							<ul>
                {/* All navigation options for menu */}
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

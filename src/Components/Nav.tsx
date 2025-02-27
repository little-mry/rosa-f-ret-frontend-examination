import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavIcon from "../assets/navicon.png";
import ExitIcon from "../assets/exit-icon.png";
import "../Styles/Components/nav.scss";

const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navigate = useNavigate();

	// Add effect to control body scroll when menu opens/closes
	useEffect(() => {
		if (isMenuOpen) {
			// Prevent scrolling when menu is open
			document.body.classList.add("menu-open");
		} else {
			// Re-enable scrolling when menu is closed
			document.body.classList.remove("menu-open");
		}

		// Cleanup function to ensure scrolling is re-enabled if component unmounts
		return () => {
			document.body.classList.remove("menu-open");
		};
	}, [isMenuOpen]);

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

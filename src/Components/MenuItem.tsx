import { useEffect, useState } from "react";
import AddImg from "../assets/add.png";
import { getMenu, MenuItem } from "../Services/api";
import { useCart } from "./CartContext";

export default function MenuItems() {
	const [menuItems, setMenuItems] = useState<MenuItem[]>([]); //Sets menuitems in a MenuItem-array
	const [campaign, setCampaign] = useState(false); // Sets campaign-status 
	const { addToCart } = useCart();

	//Fetches menu items from api.ts and puts items in array MenuItem
	useEffect(() => {
		const fetchMenu = async () => {
			const menu = await getMenu();
			setMenuItems(menu);
		};
		fetchMenu();
		
		//Checks if condition (month) for campaign anf sets campaign-state to true or false 
		const currentMonth = new Date().getMonth();
		if (currentMonth === 1) {
			setCampaign(true);
		}
	}, []);

	const campaignOffer: MenuItem = {
		id: "campaign",
		title: "Kampanjerbjudande☕🧁",
		desc: "Bryggkaffe + Gustav Adolfsbakelse",
		price: 49,
	};

	//Adds menu item to cart
	const handleAddItem = (id: string, title: string, price: number) => {
		addToCart(id, title, price);
	};

	//If customer chooses campaign offer in menu, two items are put in cart (coffee and pastry)
	const handleAddCampaign = () => {
		const coffeeItem = menuItems.find((item) => item.title === "Bryggkaffe");
		const pastryItem = menuItems.find((item) => item.title === "Gustav Adolfsbakelse");

		if (coffeeItem) {
			addToCart(coffeeItem.id, coffeeItem.title, coffeeItem.price);
			console.log("Added coffee:", coffeeItem.title);
		}

		if (pastryItem) {
			addToCart(pastryItem.id, pastryItem.title, pastryItem.price);
			console.log("Added pastry:", pastryItem.title);
		}
	};
	return (
		<>
			<div className="MenuItems">
				{/* If campaign is true, campaign offer is rendered */}
				{campaign && (
					<section
						className="cont_camp"
						key={campaignOffer.id}>
						<figure className="img">
							<img
								src={AddImg}
								alt="Add symbol"
								className="btn-size"
								onClick={handleAddCampaign}
							/>
						</figure>
						<h3 className="top">{campaignOffer.title}</h3>
						<div className="menu_dotted_line_camp"></div>
						<p className="desc">{campaignOffer.desc}</p>
						<section className="sum">
							<h4>{campaignOffer.price}kr</h4>
						</section>
					</section>
				)}
				{/* Renders all the menu items */}
				{menuItems.map((item) => (
					<section
						className="cont"
						key={item.id}>
						<figure className="img">
							<img
								src={AddImg}
								alt="Add symbol"
								className="btn-size"
								onClick={() => handleAddItem(item.id, item.title, item.price)}
							/>
						</figure>

						<h3 className="top">{item.title}</h3>
						<div className="menu_dotted_line"></div>
						<p className="desc">{item.desc}</p>

						<section className="sum">
							<h4>{item.price}kr</h4>
						</section>
					</section>
				))}
			</div>
		</>
	);
}

import React, { useState, useEffect } from "react";
import { createOrder, OrderItem, OrderResponse } from "../Services/api";
import { useNavigate } from "react-router-dom"; // Add this import

import "../Styles/Pages/status.scss";

const Status: React.FC = () => {
    const navigate = useNavigate();
	const [orderNr, setOrderNr] = useState<string | null>(null);
	const [eta, setEta] = useState<number | null>(null);

	const handleOrder = async () => {
		try {
			const orderItems: OrderItem[] = [
				{ name: "Bryggkaffe", price: 39 },
				{ name: "Caffè Doppio", price: 49 },
			];

			const orderResponse: OrderResponse = await createOrder(orderItems);

			setOrderNr(orderResponse.orderNr);
			setEta(orderResponse.eta);
		} catch (error) {
			console.log("error", error);
		}
	};

	useEffect(() => {
		handleOrder();
	}, []);

	return (
		<div className="wrapper-status">
			<h3 className="status-header">Ordernummer: {orderNr || "Laddar nummer..."}</h3>
			<img
				src="/src/assets/Group 5.svg"
				alt=""
				className="status-img"
			/>
			<h2 className="status-underheader">
				Din beställning är på väg!
				<p className="status-text">{eta !== null ? `${eta} minuter` : "Laddar tid..."}</p>
			</h2>
			<button
				className="status-button"
				onClick={() => navigate("/menu")}>
				Tillbaka
			</button>
		</div>
	);
};

export default Status;

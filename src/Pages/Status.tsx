import React, { useState, useEffect } from "react";
import { getOrderStatus} from "../Services/api";
import { useNavigate } from "react-router-dom";
import "../Styles/Pages/status.scss";

import "../Styles/Pages/status.scss";

const Status: React.FC = () => {
    const navigate = useNavigate();
    const [eta, setEta] = useState<number | null>(null);
    
    // Example order number
    const orderNr = "AB1740482423819Z";

    useEffect(() => {
        const fetchOrderStatus = async () => {
            try {
                const status = await getOrderStatus(orderNr);
                setEta(status.eta);
            } catch (error) {
                console.log("error fetching status:", error);
            }
        };

        fetchOrderStatus();
    }, []);

	return (
		<div className="wrapper-status">
			<h3 className="status-header">Ordernummer: {orderNr}</h3>
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

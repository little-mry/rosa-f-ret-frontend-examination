import React, { useState, useEffect } from "react";
import { getOrderStatus } from "../Services/api";
import { useNavigate, useLocation } from "react-router-dom";
import "../Styles/Pages/status.scss";

const Status: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [eta, setEta] = useState<number | null>(null);
    
    const orderNr = location.state?.orderNr || "Loading...";

    useEffect(() => {
        const fetchOrderStatus = async () => {
            try {
                const status = await getOrderStatus(orderNr);
                setEta(status.eta);
                console.log("Received ETA:", status.eta); 
            } catch (error) {
                console.log("error fetching status:", error);
            }
        };

        fetchOrderStatus();
        
       
        const interval = setInterval(fetchOrderStatus, 10000);
        return () => clearInterval(interval);
    }, [orderNr]);

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
                <p className="status-text">
                    {eta != null ? `${eta} minuter` : "Loading..."}
                </p>
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
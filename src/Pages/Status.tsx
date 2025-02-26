import React, { useState, useEffect } from "react";
import { getOrderStatus } from "../Services/api";
import { useNavigate, useLocation } from "react-router-dom";
import "../Styles/Pages/status.scss";


const Status: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [eta, setEta] = useState<number | null>(null);
    
    const orderNr = location.state?.orderNr || 
                   localStorage.getItem('airbean_last_order') || 
                   "Loading...";

    useEffect(() => {
       
        if (location.state?.orderNr) {
            localStorage.setItem('airbean_last_order', location.state.orderNr);
        }

        const fetchOrderStatus = async () => {
            if (orderNr !== "Loading...") {
                try {
                    const status = await getOrderStatus(orderNr);
                    setEta(status.eta);
                } catch (error) {
                    console.log("error fetching status:", error);
                }
            }
        };

        fetchOrderStatus();
        
        const interval = setInterval(fetchOrderStatus, 10000);
        return () => clearInterval(interval);
    }, [orderNr, location.state]);

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
                    {eta != null ? `${eta} minuter` : "Laddar tid..."}
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
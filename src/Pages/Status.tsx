import React, { useState, useEffect } from "react";
import { getOrderStatus } from "../Services/api";
import { useNavigate, useLocation } from "react-router-dom";
import "../Styles/Pages/status.scss";

const Status: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const [eta, setEta] = useState<number | null>(null);
    const [hasOrder, setHasOrder] = useState<boolean>(false);
    const [orderNr, setOrderNr] = useState<string | null>(null);

    useEffect(() => {
        // Hämta orderNummer från state eller localStorage
        const storedOrderNr = location.state?.orderNr || localStorage.getItem('airbean_last_order');

        if (storedOrderNr) {
            setHasOrder(true);
            setOrderNr(storedOrderNr);
            localStorage.setItem('airbean_last_order', storedOrderNr);
        } else {
            setHasOrder(false);
            setOrderNr(null);
        }
    }, [location.state]);

    useEffect(() => {
        const fetchOrderStatus = async () => {
            if (orderNr) {
                try {
                    const status = await getOrderStatus(orderNr);
                    setEta(status.eta);
                } catch (error) {
                    console.log("Error fetching status:", error);
                }
            }
        };

        if (orderNr) {
            fetchOrderStatus();
            const interval = setInterval(fetchOrderStatus, 10000);
            return () => clearInterval(interval);
        }
    }, [orderNr]);

    return (
        <div className="wrapper-status">
            {/* Visa endast ordernummer om det finns en beställning */}
            {orderNr && <h3 className="status-header">Ordernummer: {orderNr}</h3>}
            
            <img src="/src/assets/Group 5.svg" alt="" className="status-img" />
            
            <h2 className="status-underheader">
                {hasOrder ? (
                    <>
                        Din beställning är på väg!
                        {eta !== null && <p className="status-text">{eta} minuter</p>}
                    </>
                ) : (
                    "Ingen beställning gjord"
                )}
            </h2>

            <button className="status-button" onClick={() => navigate("/menu")}>
                Tillbaka
            </button>
        </div>
    );
};

export default Status;

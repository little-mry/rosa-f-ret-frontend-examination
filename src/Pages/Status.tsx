import React, { useState, useEffect } from "react";

import '../Styles/Pages/status.scss'


const OrderStatus: React.FC = () => {
    const [orderId, setOrderId] = useState<string | null>(null)
    const [eta, setEta] = useState<number | null>(null)


    return (
        <div>
            <h3>Ordernummer: {orderId || 'Laddar nummer...'}</h3>
            <img src="/src/assets/Group 5.svg" alt="" />
            <h2>Din beställning är på väg!
            <p>{eta !== null ? `${eta} minuter` : 'Laddar tid...'}</p></h2>
            <button>Tillbaka</button>
        </div>
    )
}

export default OrderStatus
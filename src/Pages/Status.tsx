import React, { useState, useEffect } from "react";
import { createOrder, OrderItem, OrderResponse } from "../Services/api";


import '../Styles/Pages/status.scss'

const Status: React.FC = () => {
    const [orderId, setOrderId] = useState<string | null>(null)
    const [eta, setEta] = useState<number | null>(null)

    const handleOrder = async () => {
        try {
        const orderItems: OrderItem[] = [
            {name: 'Latte', price: 1},
            {name: 'Espresso', price: 2}
        ]

        const orderResponse: OrderResponse = await createOrder(orderItems)

        setOrderId(orderResponse.orderNr)
        setEta(orderResponse.eta)
    } catch (error) {
        console.log('error', error)
    }
}

    useEffect(() => {
        handleOrder()
    }, [])

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

export default Status

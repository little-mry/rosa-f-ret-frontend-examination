import React from "react";
import '../Styles/Pages/landing.scss'


const Landing: React.FC = () => {
    return (
        <div className="wrapper">
            <img src="/src/assets/header (2).svg" alt=""  className="img-left"/>
            <img src="/src/assets/header.svg" alt="" className="img-right" />
            <img src="/src/assets/Group 7.svg" alt="" className="img-center" />
            <h1 className="header">AIR BEAN</h1>
            <p className="text">DRONEDELIVERED COFFEE</p>
        </div>
    )
}

export default Landing
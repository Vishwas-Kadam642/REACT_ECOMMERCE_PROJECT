import React from "react";
import "./Offers.css";
import exclu from "../../assets/exclu.webp";

const Offers = () => {
    return (
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers for you</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Shop Now</button>
            </div>
            <div className="offers-right">
                <img src={exclu} alt=""/>
            </div>
        </div>
    )
}

export default Offers;
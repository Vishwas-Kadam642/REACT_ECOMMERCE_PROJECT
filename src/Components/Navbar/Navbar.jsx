import React from "react";
import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import cart_logo from "../../assets/cart_logo.png";
import { Link } from "react-router-dom";


const Navbar = () => {
    const [menu,setMenu] = useState("home");
  return (
    <div className="Navbar">
        <div className="nav-logo">
            <img src={logo} alt="" height="50px" />
            <p>ShopNow</p>
        </div>
        <ul className="nav-menu">
            <li onClick={() => {setMenu("home")}}><Link style={{textDecoration:"none",  color: "#333"}} to="/">Home</Link>{menu==="home" ? <hr />:<> </>}</li>
            <li onClick={() => {setMenu("men")}}><Link style={{textDecoration:"none",  color: "#333"}}  to="/men">Men</Link>{menu==="men" ? <hr />:<> </>}</li>
            <li onClick={() => {setMenu("women")}}><Link style={{textDecoration:"none",  color: "#333"}} to="/women">Women</Link>{menu==="women" ? <hr />:<> </>}</li>
            <li onClick={() => {setMenu("kids")}}><Link style={{textDecoration:"none",  color: "#333"}} to="/kids">Kids</Link> {menu==="kids" ? <hr />:<> </>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to="/login"><button>Login</button></Link>
            <Link to="/Cart"><img src={cart_logo} alt="" height="40px"/></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  );
}

export default Navbar;
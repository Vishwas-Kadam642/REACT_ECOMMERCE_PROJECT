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
            <li onClick={() => {setMenu("home")}}><Link>Home</Link>{menu==="home" ? <hr />:<> </>}</li>
            <li onClick={() => {setMenu("men")}}>Men{menu==="men" ? <hr />:<> </>}</li>
            <li onClick={() => {setMenu("women")}}>Women{menu==="women" ? <hr />:<> </>}</li>
            <li onClick={() => {setMenu("kids")}}>Kids{menu==="kids" ? <hr />:<> </>}</li>
            <br />
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_logo} alt="" height="40px"/>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  );
}

export default Navbar;
import Navbar from "./Components/Navbar/Navbar"
import ShopCategory from "./Pages/ShopCategory"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from "./assets/banner.jpg";
import women_banner from "./assets/women_banner.avif";
import kids_banner from "./assets/kids_banner.jpg";


function App() {


  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/Men" element={<ShopCategory banner={men_banner} category="men"/>} />
        <Route path="/Women" element={<ShopCategory banner={women_banner} category="women"/>} />
        <Route path="/Kids" element={<ShopCategory banner={kids_banner} category="kid"/>} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App

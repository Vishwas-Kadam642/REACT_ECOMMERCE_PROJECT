import Navbar from "./Components/Navbar/Navbar"
import ShopCategory from "./Pages/LoginSignuo"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignuo";


function App() {


  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/Men" element={<ShopCategory category="Mens"/>} />
          <Route path="/Women" element={<ShopCategory category="Womens"/>} />
          <Route path="/Kids" element={<ShopCategory category="Kids"/>} />
          <Route path="/product" element={<Product />} />
          <Route path="/productid" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

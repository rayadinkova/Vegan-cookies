import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Shop from "../pages/Shop";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import "../styles/navbar.css";
import { IoCartSharp } from "react-icons/io5";

export default function Navbar() {
  return (
    <Router>
      <nav>
        <div className="navigation-menu">
          <Link to="/home" className="text-style-home">
            <div className="logo-section">
              <img src="logo.png" alt="logo" className="logo-img" />
              <h1 className="logo-title">The Cookie Shop.</h1>
            </div>
          </Link>

          <div className="navigation-items">
            <ul>
              <li>
                <Link to="/shop" className="text-style">
                  SHOP
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/about" className="text-style">
                  ABOUT
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/contact" className="text-style">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          <div className="cart">
            <Link to="/cart" className="text-style">
              <button className="cart-button">
                <IoCartSharp className="cart-icon" />
                <h1>CART</h1>
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

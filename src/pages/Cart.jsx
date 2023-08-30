import React from "react";
import "../styles/cart.css";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Cart() {
  return (
    <div className="cart-msg">
      <h1>There are no items in your cart.</h1>
      <div className="continue-shopping">
        <a href="http://localhost:3000/shop">Continue shopping</a>
        <FaArrowRightLong className="right-arrow" />
      </div>
    </div>
  );
}

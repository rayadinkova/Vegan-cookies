import React from "react";
import "../styles/productscard.css";

export default function ProductsCard({ img, title, price }) {
  return (
    <section className="card">
      <img src={img} alt={title} />
      <img
        src="raspberry_chocolate_cake_hover.jpg"
        alt=""
        className="img-hover"
      />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-price">
          <div className="price">
            <h3 className="price">{price}</h3>
          </div>
        </section>
      </div>
    </section>
  );
}

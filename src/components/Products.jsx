import React from "react";

import "../styles/products.css";

export default function Products({ result }) {
  return <section className="card-container">{result}</section>;
}

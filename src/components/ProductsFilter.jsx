import React from "react";
import "../styles/productsfilter.css";
import FilterButtons from "./FilterButtons";

export default function ProductsFilter(handleClick) {
  return (
    <div className="filter">
      <FilterButtons
        onClickHandler={handleClick}
        value=""
        title="All Products"
      />
      <FilterButtons onClickHandler={handleClick} value="Cakes" title="Cakes" />
      <FilterButtons onClickHandler={handleClick} value="Bites" title="Bites" />
      <FilterButtons
        onClickHandler={handleClick}
        value="Pancakes"
        title="Pancakes"
      />
    </div>
  );
}

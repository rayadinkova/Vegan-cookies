import React from "react";
import "../styles/filterbuttons.css";

export default function FilterButtons({ onClickHandler, value, title }) {
  return (
    <button onClick={() => onClickHandler} value={value} className="btns">
      {title}
    </button>
  );
}

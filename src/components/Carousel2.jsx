import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Carousel2({ slides }) {
  return (
    <Carousel>
      {slides.map((slide, index) => (
        <div key={index}>
          <img src={slide.imageSrc} alt={`Slide ${index}`} />
          <p className="legend">{slide.text}</p>
        </div>
      ))}
    </Carousel>
  );
}

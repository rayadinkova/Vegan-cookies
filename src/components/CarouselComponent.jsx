import React from "react";
import Carousel2 from "./Carousel2";

const CarouselComponent = () => {
  const slides = [
    {
      imageSrc: "cover1.png",
      text: "Text for slide1",
    },
    {
      imageSrc: "cover2.png",
      text: "Text for slide2",
    },
    {
      imageSrc: "cover3.png",
      text: "Text for slide3",
    },
  ];

  return (
    <div>
      <CarouselComponent slides={slides} />
    </div>
  );
};

export default CarouselComponent;

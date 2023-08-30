import React, { useState } from "react";
import "../styles/imageslidermobile.css";

const ImageSliderMobile = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (currentImageIndex < images.lenght - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="slider-container">
      <div className="img-container">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex}`}
          className="current-image"
        />
      </div>
      <div className="button-container">
        <button onClick={prevImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
};

export default ImageSliderMobile;

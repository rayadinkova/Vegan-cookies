import { useState } from "react";
import { FaCircle } from "react-icons/fa";
import "../styles/carousel.css";

export default function Carousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    bakgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const dotStyles = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "15px",
    color: "grey",
  };

  const dotsContainerStyles = {
    display: "inline",
    marginLeft: "37rem",
  };

  return (
    <div className="slider">
      <div style={slideStyles}>
        <div className="dotsContainerStyles">
          {slides.map((slide, slideIndex) => (
            <div
              className="index-circle"
              key={slideIndex}
              style={dotStyles}
              onClick={() => goToSlide(slideIndex)}
            >
              <FaCircle className="icon" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

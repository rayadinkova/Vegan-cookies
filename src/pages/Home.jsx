import React from "react";
import Carousel from "../components/Carousel";
import "../styles/home.css";
import { SlSocialInstagram } from "react-icons/sl";
import ImageSliderMobile from "../components/ImageSliderMobile";

export default function Home() {
  const slides = [
    { url: "cover1.png", title: "cover1" },
    { url: "cover2.png", title: "cover2" },
    { url: "cover3.png", title: "cover3" },
  ];

  const images = ["raspberry.jpg", "redberry.jpg", "pastry.jpg", "keks.jpg"];

  return (
    <div>
      <Carousel slides={slides} />

      <div className="cta-section">
        <div className="products">
          <img src="products.png" alt="" className="products-img" />
          <a href="http://localhost:3000/shop">discover our products</a>
        </div>

        <div className="store">
          <img src="store.png" alt="" className="store-img" />
          <a href="http://localhost:3000/contact">find us in store</a>
        </div>

        <div className="story">
          <img src="ourstory.png" alt="" className="story-img" />
          <a href="http://localhost:3000/about">read our story</a>
        </div>
      </div>

      <div className="ingredients-section">
        <div className="ingredients">
          <img src="ingredients.jpg" alt="" className="img" />
          <div className="box-green">
            <div className="ingredients-text">
              <h1>Our Ingredients</h1>
              <div className="spacer"></div>
              <p className="para1">
                Embrace the goodness of plant-powered ingredients such as
                organic flours, plant-based oils, and ethically-sourced
                sweeteners.
              </p>
              <p className="para2">
                Free from eggs, dairy, and any animal by-products, these cookies
                are a testament to our dedication to preserving the environment
                and respecting all forms of life.
              </p>
              <button className="ingredients-btn">LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>

      <div className="vision-section">
        <div className="box-pink">
          <div className="vision-text">
            <h1>Our Vision</h1>
            <div className="spacer"></div>
            <p className="para4">
              The Cookie Shop is more than a bakery. it's a testament to the
              power of conscious consumerism. With every bite you take, you
              contribute to a brighter, greener future – a world where
              compassion and culinary excellence unite to create something truly
              remarkable. Join us in this flavorful journey as we redefine what
              it means to indulge, one vegan cookie at a time.
            </p>
            <p className="para3">
              Enjoy the goodness of plant-powered ingredients such as <br />
              organic flours, plant-based oils, and ethically-sourced
              sweeteners. <br />
            </p>

            <button className="vision-btn">READ MORE</button>
          </div>
        </div>
        <img src="vision.jpg" alt="" className="vision-img" />
      </div>

      <div className="social-media-section">
        <SlSocialInstagram className="instagram-icon" />
        <h1>
          follow along <span>@thecookieshop</span>
        </h1>

        <div className="social-media-content">
          <div className="donut">
            <img src="donut.jpg" alt="" />
            <div className="sm-img-hover">
              <h1>visit us</h1>
              <SlSocialInstagram className="insta" />
            </div>
          </div>

          <div className="keks">
            <img src="keks.jpg" alt="" />
            <div className="sm-img-hover">
              <h1>visit us</h1>
              <SlSocialInstagram className="insta" />
            </div>
          </div>

          <div className="raspberry">
            <img src="raspberry.jpg" alt="" />
            <div className="sm-img-hover">
              <h1>visit us</h1>
              <SlSocialInstagram className="insta" />
            </div>
          </div>

          <div className="redberry">
            <img src="redberry.jpg" alt="" />
            <div className="sm-img-hover">
              <h1>visit us</h1>
              <SlSocialInstagram className="insta" />
            </div>
          </div>
        </div>

        <div className="image-slider-mobile">
          <ImageSliderMobile images={images} />
        </div>
      </div>
    </div>
  );
}

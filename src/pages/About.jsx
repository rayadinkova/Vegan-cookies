import "../styles/about.css";

export default function About() {
  return (
    <div>
      <div>
        <img src="figs.jpg" alt="" className="about-cover" />
        <div className="about-title-section">
          <div className="about-caption">
            <h1 className="about-title">
              Meet <span>The Cookie Shop</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="cake-about-icon">
        <img src="cake_about.png" alt="" className="cake-about" />
      </div>

      <div className="vision">
        <h3 className="vision-statement">
          OUR VISION IS TO CREATE A WORD WHERE EVERY BITE <br /> OF OUR
          DELECTABLE COOKIES BRINGS JOY AND INDULGENCE TO PEOPLE'S LIVES <br />
        </h3>

        <h3 className="vision-statement-p2">
          WE ARE COMMITED TO CRAFTING COOKIES THAT NOT ONLY SATISFY TASTE BUDS
          <br />
          BUT ALSO IGNITE MEMORIES AND EMOTIONS
        </h3>
      </div>

      <div className="spacer-about"></div>

      <div className="about-section">
        <div className="about-section-img-container">
          <div className="about-frame"></div>
          <img src="aboutus_about.jpg" alt="" className="aboutus-img" />

          <div className="about-img-icon">
            <img src="aboutus-icon.png" alt="" className="aboutus-icon" />
            <h3 className="aboutus-h3">ABOUT</h3>
          </div>
          <img src="brushstroke.png" alt="" className="brushstroke_about" />
          <h3 className="about-section-text">
            <h3 className="about-headline">
              Welcome to The Cookie Shop, <br />
              your haven of plant-based delight!
            </h3>
            <br />
            <h3 className="about-description-text">
              We're passionate about crafting exquisite vegan cookies that
              harmonize taste, ethics, and the environment. Every cookie is a
              masterpiece, handcrafted with compassion and creativity. We
              believe in the power of every bite to create a brighter future –
              for animals, our planet, and your taste buds.
            </h3>
          </h3>
        </div>
      </div>

      <div className="ingredients-section">
        <div className="ingredients-section-img-container">
          <div className="ingredients-frame"></div>
          <img
            src="aboutus_ingredients.jpg"
            alt=""
            className="ingredients-img"
          />
          <div className="ingredients-img-icon">
            <img
              src="ingredients-icon.png"
              alt=""
              className="ingredients-icon"
            />
            <h3 className="ingredients-h3">INGREDIENTS</h3>
          </div>

          <img
            src="brushstroke.png"
            alt=""
            className="brushstroke_ingredients"
          />
          <h3 className="ingredients-section-text">
            <h3 className="ingredients-headline">
              Indulge guilt-free with our wholesome creations.
            </h3>
            <br />

            <h3 className="ingredients-description-text">
              Our ingredients read like a love letter to nature: premium
              cruelty-free alternatives, natural sweeteners, and nourishing
              whole grains. We source the finest components to ensure each bite
              is an explosion of flavor and kindness. Every cookie is a
              harmonious blend of ethical choices and exceptional taste,
              embodying the essence of mindful indulgence.
            </h3>
          </h3>
        </div>
      </div>

      <div className="delivery-section">
        <div className="delivery-section-img-container">
          <div className="delivery-frame"></div>
          <img src="aboutus_delivery.jpg" alt="" className="delivery-img" />
          <div className="delivery-img-icon">
            <img src="delivery-icon.png" alt="" className="delivery-icon" />
            <h3 className="delivery-h3">DELIVERY</h3>
          </div>

          <img src="brushstroke.png" alt="" className="brushstroke_delivery" />
          <h3 className="delivery-section-text">
            <h3 className="delivery-headline">
              Delightful Delivery: Bringing Vegan Bliss to Your Doorstep!
            </h3>
            <h3 className="delivery-description-text">
              Whether you're treating yourself or sending a sweet surprise to a
              loved one, our reliable delivery partners ensure your cookies
              arrive promptly and in perfect condition. So, sit back, relax, and
              let the goodness of The Cookie Shop come to you.
            </h3>
          </h3>
        </div>
      </div>
    </div>
  );
}

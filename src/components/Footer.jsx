import React from "react";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialPintarest } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import "../styles/footer.css";
import EmailForm from "./EmailForm";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="contact-section">
          <a href="http://localhost:3000/about">ABOUT</a>
          <a href="http://localhost:3000/about">INGREDIENTS</a>
          <a href="http://localhost:3000/contact">CONTACT</a>
        </div>

        <div className="logo-social">
          <div className="logo-section">
            <img src="logo.png" alt="" />
            <h1>The Cookie Shop</h1>
          </div>

          <div className="social-media">
            <SlSocialFacebook className="facebook" />
            <SlSocialPintarest className="pinterest" />
            <SlSocialInstagram className="instagram" />
          </div>
        </div>

        <div className="email-section">
          <h1>Keep in touch with The Cookie Shop</h1>
          <EmailForm className="email-form" />
          <button className="email-button">SIGN UP</button>
        </div>
      </div>

      <p className="copyright">©2023 The Cookie Shop.</p>
    </div>
  );
}

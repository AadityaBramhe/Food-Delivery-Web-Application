import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor quod
            perspiciatis architecto totam molestiae reiciendis dignissimos
            maiores, dolorem ut ratione nemo temporibus deserunt recusandae
            perferendis eveniet asperiores at, sunt a, aperiam officia quae
            praesentium? Quasi commodi, repellendus facilis aspernatur
            exercitationem nesciunt in repudiandae temporibus dignissimos
            quisquam atque maxime, neque quis.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-7826352947</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Aaditya Brahme - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;

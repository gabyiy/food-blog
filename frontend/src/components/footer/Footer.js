import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footerMainDiv">
      <div className="footerTitle">
        <Link className="linkFooter" to="/">
          <span>Food Blog</span>
        </Link>
      </div>
      <div className="detailsFooter">
        <div className="easyRecipe">Easy Recipes </div>
        <div>
          <div className="allInconsFooter">
            <p>FOLLOW US </p>
            <div className="iconsFooter">
              <div className="iconFooter">
                <a href="https://www.facebook.com">
                  <i class="fa fa-brands fa-facebook"></i>
                </a>
              </div>
              <div className="iconFooter">
                <a href="https://www.instagram.com">
                  <i class=" fa fa-brands fa-instagram"></i>
                </a>
              </div>
              <div className="iconFooter">
                <a href="https://twitter.com/?lang=en">
                  <i class="fa fa-brands fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="contactUsFooter">CONTACT US</div>
          <div>gabyiy2000@yahoo.com</div>
        </div>
      </div>
      <hr className="hrFooter"></hr>
      <div className="termsBlog">
        <div>
          <p>{currentYear} Food Blog. All Rights Reserved</p>
        </div>
        <div className="privacyTerms">
          <p>PRIVACY POLICY</p>
          <p>TERMS AND CONDITIONS</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

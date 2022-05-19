import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>SILK_ROAD</h1>
        <p>We wanna see you inhuman reflex.</p>

        <p>Copyrights 2022 &copy; SILK_ROAD</p>
      </div>

      <div className="rightFooter">
        <h4>Contact me</h4>

        <a href="https://www.instagram.com/sudaisbudhathoki/">Instagram</a>

        <a href="127001sudais01@gmail.com">Gmail</a>

        <a href="https://www.facebook.com/sudais.budhathoki.1/">Facebook</a>

      </div>
    </footer>
  );
};

export default Footer;

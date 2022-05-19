import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.webp";

const options = {
  burgerColorHover: "rgb(0,255,0)",
  burgerColor: "#ff9900",
  logo,
  logoWidth: "20vmax",

  navColor1: "black",

  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",

  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",

  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",

  link1Size: "2vmax",
  link1Color: "#ff9900",

  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",

  link1ColorHover: "rgb(0,255,0)",
  link1Margin: "1vmax",

  profileIconUrl: "/login",
  profileIconColor: "#ff9900",
  searchIconColor: "#ff9900",
  cartIconColor: "#ff9900",

  profileIconColorHover: "rgb(0,255,0)",
  searchIconColorHover: "rgb(0,255,0)",
  cartIconColorHover: "rgb(0,255,0)",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;

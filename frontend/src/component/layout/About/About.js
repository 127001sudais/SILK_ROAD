import React from "react";
import "./aboutSection.css";
import { Typography, Avatar } from "@material-ui/core";
import logo from "../../../images/logo.webp"

const About = () => {

  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About the Project</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={logo}
              alt="image was supposed to be here"
            />
            <Typography>SILK_ROAD</Typography>

            <span>
              This is a ecommerce webiste for gaming products based in hongkong which mainly focuses on PC.We are based online only we do not have physical tangible store.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Partners</Typography>
            lorem
            lorem
            lorem
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

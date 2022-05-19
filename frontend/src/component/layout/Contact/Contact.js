import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:127001sudais01@gmail.com">
        <Button>Contact: 127001sudais01@gmail.com</Button>
      </a>
      <a className="facebook" href="https://www.facebook.com/sudais.budhathoki.1/" >
        <Button>FACEBOOK</Button>
      </a>
      <a className="instagram" href="https://www.instagram.com/sudaisbudhathoki/" >
        <Button>INSTAGRAM</Button>
      </a>
      <a className="linkedin" href="https://www.linkedin.com/in/webdevelopersudais/" >
        <Button>LINKEDIN</Button>
      </a>
    </div>
  );
};

export default Contact;

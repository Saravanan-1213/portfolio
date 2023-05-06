import { IconButton } from "@mui/material";
import React from "react";
import { Element } from "react-scroll";
import "./Contact.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact__container">
        <p>
          Email : <span>saravanansekar033@gmail.com</span>
        </p>
        <p>
          GitHub Username: <span>@Saravanan-1213</span>
        </p>
        <div className="contact__icons">
          <a href="https://www.linkedin.com/in/saravanan-s-03622222a">
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;

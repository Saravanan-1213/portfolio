import React from "react";
import { Link } from "react-scroll";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <h1>
          Web Develop<span>er</span>
        </h1>
      </div>
      <div className="header__right">
        <Link to="about" smooth={true} duration={500}>
          <h4>About Me</h4>
        </Link>

        <Link to="skills" smooth={true} duration={500}>
          <h4>Skills</h4>
        </Link>

        <Link to="project" smooth={true} duration={500}>
          <h4>Project</h4>
        </Link>

        <Link to="contact" smooth={true} duration={500}>
          <h4>Contact</h4>
        </Link>

        <a href="https://www.linkedin.com/in/saravanan-s-03622222a">
          <h4 className="header__rightButton">Join with Me </h4>
        </a>
      </div>
    </div>
  );
};

export default Header;

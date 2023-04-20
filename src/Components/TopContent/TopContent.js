import React from "react";
import { Link } from "react-scroll";
import "./TopContent.css";
import Resume from "../../Resume/SaraVanan S.pdf";

const TopContent = () => {
  return (
    <div className="topContent">
      <div className="topContent__container">
        <h1>Mr.Saravanan S</h1>
        <p>
          I am a Full Stack Developer. I also make the website server more &
          more interactive with web animations.
        </p>
        <a href={Resume}>
          <button className="topContent__downloadButton">Download CV</button>
        </a>
        <Link to="projects" smooth={true} duration={500}>
          <button className="topContent__workbutton">My Work</button>
        </Link>
      </div>
    </div>
  );
};

export default TopContent;

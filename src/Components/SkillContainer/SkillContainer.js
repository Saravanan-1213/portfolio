import React from "react";
import { Element } from "react-scroll";
import skillimg from "../../img/skill.jpg";
import LinearProgress from "@mui/material/LinearProgress";
import "./SkillContainer.css";

const SkillContainer = () => {
  return (
    <Element className="skillContainer" id="skills">
      <div className="skillContainer_image">
        <img className="skill-img" src={skillimg} alt="" />
      </div>

      <div className="skillContainer__text">
        <h2>SKILLSET</h2>
        <div className="skillContainer__skillset">
          <h5>HTML 5</h5>
          <div className="skillContainer__slider1">
            <LinearProgress variant="determinate" value={86} />
          </div>
        </div>

        <div className="skillContainer__skillset">
          <h5>CSS</h5>
          <div className="skillContainer__slider2">
            <LinearProgress variant="determinate" value={79} />
          </div>
        </div>

        <div className="skillContainer__skillset">
          <h5>JavaScript</h5>
          <div className="skillContainer__slider3">
            <LinearProgress variant="determinate" value={75} />
          </div>
        </div>

        <div className="skillContainer__skillset">
          <h5>React</h5>
          <div className="skillContainer__slider4">
            <LinearProgress variant="determinate" value={75} />
          </div>
        </div>

        <div className="skillContainer__skillset">
          <h5>MongoDB</h5>
          <div className="skillContainer__slider5">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>

        <div className="skillContainer__skillset">
          <h5>Node Js</h5>
          <div className="skillContainer__slider6">
            <LinearProgress variant="determinate" value={63} />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default SkillContainer;

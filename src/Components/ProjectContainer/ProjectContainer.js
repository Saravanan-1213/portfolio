import React from "react";
import { Element } from "react-scroll";
import Project from "../Project/Project";
import "./ProjectContainer.css";

const ProjectContainer = () => {
  const projects = [
    {
      img: "https://img.freepik.com/premium-vector/calculator-with-modern-flat-style_3322-74.jpg?w=2000",
      title: "Calculator",
      desc: "Calculator created using HTML,CSS,JavaScript",
      link: "https://glowing-wisp-80826e.netlify.app",
    },

    {
      img: "https://www.shutterstock.com/image-vector/online-cinema-art-movie-watching-260nw-586719869.jpg",
      title: "Movie APP",
      desc: "This Movie App is created using ReactJs, NodeJS, MongoDB",
      link: "https://cerulean-pudding-4c685a.netlify.app",
    },

    {
      img: "https://st3.depositphotos.com/3259079/35899/v/600/depositphotos_358995556-stock-illustration-colleagues-talk-each-other-computer.jpg",
      title: "Zoom Clone",
      desc: "Zoom Clone is created using ReactJs, NodeJS",
      link: "https://peppy-buttercream-ed733d.netlify.app",
    },
  ];
  return (
    <Element className="projectContainer" id="projects">
      <h1>Projects</h1>
      <p>
        Here some projects which I done using HTML, CSS, JAVASCRIPT, REACTJS,
        NODEJS, EXPRESS, MONGODB.
      </p>
      <div className="projectContainer__projects">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              img={project.img}
              title={project.title}
              desc={project.desc}
              link={project.link}
            />
          );
        })}
      </div>

      <div className="source__code">
        <p className="heading">Source Code Links</p>
        <a
          className="calc"
          href="https://glowing-wisp-80826e.netlify.app"
          target="_blank"
        >
          Calcualator Source Code
        </a>
        <a
          className="movie"
          href="https://cerulean-pudding-4c685a.netlify.app"
          target="_blank"
        >
          Movie App Source Code
        </a>
        <a
          className="zoom"
          href="https://github.com/Saravanan-1213/zoom__clone"
          target="_blank"
        >
          Zoom clone Source Code
        </a>
      </div>
    </Element>
  );
};

export default ProjectContainer;

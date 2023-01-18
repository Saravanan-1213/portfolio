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
      desc: "This Movie App is created using ReactJs",
      link: "https://cerulean-pudding-4c685a.netlify.app",
    },
  ];
  return (
    <Element className="projectContainer" id="projects">
      <h1>Projects</h1>
      <p>
        Here some projects which I done using HTMl, CSS, JAVASCRIPT, REACTJS.
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
    </Element>
  );
};

export default ProjectContainer;

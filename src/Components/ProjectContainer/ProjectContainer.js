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
      img: "https://images.unsplash.com/photo-1627907228175-2bf846a303b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlY2lwZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      title: "Recipe APP",
      desc: "This Recipe App is created using ReactJs, NodeJS, MongoDB",
      link: "https://heroic-moonbeam-9beb35.netlify.app",
    },
    {
      img: "https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2022/04/image6-10.png",
      title: "Media APP",
      desc: "This Media App is created using ReactJs, NodeJS, MongoDB",
      link: "https://bright-hummingbird-aab6a6.netlify.app",
    },
    {
      img: "https://www.psu.com/wp/wp-content/uploads/2021/01/Zoom.jpg",
      title: "Video Call APP",
      desc: "This Video Call App is created using ReactJs, NodeJS, MongoDB",
      link: "https://iridescent-licorice-9a0964.netlify.app",
    },
    {
      img: "https://www.fusioninformatics.com/blog/wp-content/uploads/2019/08/Booking.com-like-Hotel-Booking-App-Development-Cost.jpg",
      title: "Booking App",
      desc: "This Booking App is created using ReactJs, MongoDB, NodeJS",
      link: " https://master--ornate-lily-2bfc6c.netlify.app",
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
    </Element>
  );
};

export default ProjectContainer;

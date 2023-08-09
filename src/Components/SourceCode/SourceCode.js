import React from "react";
import { Element } from "react-scroll";
import "./SourceCode.css";
import Project from "../Project/Project";

const SourceCode = () => {
  const codes = [
    {
      img: "https://img.freepik.com/premium-vector/calculator-with-modern-flat-style_3322-74.jpg?w=2000",
      title: "Calculator",
      desc: "Calculator created using HTML,CSS,JavaScript",
      link: "https://github.com/Saravanan-1213/Task-15-2",
    },
    {
      img: "https://images.unsplash.com/photo-1627907228175-2bf846a303b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlY2lwZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      title: "Recipe App",
      desc: "Recipe App created using Reactjs, MongoDB, Nodejs",
      link: "https://github.com/Saravanan-1213/recipe",
    },
    {
      img: "https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2022/04/image6-10.png",
      title: "Media App",
      desc: "Media App created using Reactjs, MongoDB, Nodejs",
      link: "https://github.com/Saravanan-1213/socio",
    },
    {
      img: "https://www.psu.com/wp/wp-content/uploads/2021/01/Zoom.jpg",
      title: "Video Call App",
      desc: "Video Call App created using Reactjs, MongoDB, Nodejs",
      link: "https://github.com/Saravanan-1213/zoom__clone",
    },
    {
      img: "https://www.fusioninformatics.com/blog/wp-content/uploads/2019/08/Booking.com-like-Hotel-Booking-App-Development-Cost.jpg",
      title: "Booking App",
      desc: "Booking App created using Reactjs, MongoDB, Nodejs",
      link: "https://github.com/Saravanan-1213/hotel_booking",
    },
  ];
  return (
    <Element className="sourceCotainer" id="projects">
      <h1>Source Codes</h1>

      <div className="sourceCodes__projects">
        {codes.map((code, index) => {
          return (
            <Project
              key={index}
              img={code.img}
              title={code.title}
              desc={code.desc}
              link={code.link}
            />
          );
        })}
      </div>
    </Element>
  );
};

export default SourceCode;

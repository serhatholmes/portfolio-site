import React from "react";
import ProjectItem from "./ProjectItem";
import project1 from "../assets/Screenshot_1.png";
import project2 from "../assets/Screenshot_2.png";
import project3 from "../assets/Screenshot_3.png";
import project13 from "../assets/Screenshot_13.png";

const projects = [
  {
    title: "Game Developer in Kedi Games",
    image: "../assets/Screenshot_1.png",
    details: " Developing and designing mobile games.",
  },
  {
    year: 2021,
    title: "Game Developer in Mobiversite",
    duration: "7 Months",
    details: " Developing mobile and webgl games.",
  },
  {
    year: 2021,
    title: "Game Developer Intern in Mobiversite",
    duration: "3 Months",
    details: " Developing and designing hypercasual mobil games.",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-green-800">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra
        sollicitudin arcu id placerat. Nullam eu tortor non elit fringilla
        vulputate. Phasellus erat massa, malesuada euismod ipsum vitae, mollis
        egestas magna. In luctus pretium nulla, a sagittis erat pretium id.
        Maecenas fringilla ornare diam, a dapibus metus tristique ut.{" "}
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={project1} title="E-commerce site app" />
        <ProjectItem img={project2} title="Filtering/Searching-data app" />
        <ProjectItem img={project3} title="Invoice List app" />
        <ProjectItem img={project13} title="Pokemon Data Fetching app" />
      </div>
    </div>
  );
};

export default Projects;

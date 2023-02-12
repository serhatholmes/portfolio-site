import React from "react";
import ProjectItem from "./ProjectItem";
import project1 from "../assets/ecommerce2.png";
import project2 from "../assets/snapshotapp1.png";
import project3 from "../assets/invoiceapp1.png";
import project4 from "../assets/pokemon1.png";

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
        After graduation, I worked in the game field for a while and then
        changed my field to frontend. With the help of resources I found on the
        internet, I have been learning HTML, CSS, Tailwindcss, JavaScript, and
        React JS for some time now. I have started developing projects that I
        think will be necessary in this field and I am currently continuing to
        develop them. In the later stages of my career, I will also acquire
        knowledge in the backend field and progress towards becoming a Full
        Stack Developer.{" "}
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={project1} title="E-commerce site app" />
        <ProjectItem img={project2} title="Filtering/Searching-data app" />
        <ProjectItem img={project3} title="Invoice List app" />
        <ProjectItem img={project4} title="Pokemon Data Fetching app" />
      </div>
    </div>
  );
};

export default Projects;

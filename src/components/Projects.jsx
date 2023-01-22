import React from "react";
import ProjectItem from "./ProjectItem";
import project1 from "../assets/Screenshot_1.png";
import project2 from "../assets/Screenshot_2.png";
import project3 from "../assets/Screenshot_3.png";
import project13 from "../assets/Screenshot_13.png";

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
        <ProjectItem img={project1} title="Runner Game 3D" />
        <ProjectItem img={project2} title="Project Lake RPG Game" />
        <ProjectItem img={project3} title="Multiplayer FPS Game" />
        <ProjectItem img={project13} title="Car Simulator Game" />
      </div>
    </div>
  );
};

export default Projects;

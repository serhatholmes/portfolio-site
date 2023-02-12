import React from "react";

const ProjectItem = ({ img, title }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-green-700">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-white font-bold text-2xl tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">ReactJS</p>
        <a href="https://github.com/serhatholmes?tab=repositories">
          {" "}
          {/* github link */}
          <p className="text-center p-3 rounded-lg bg-green-600 text-white font-bold cursor-pointer text-lg">
            More Info
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;

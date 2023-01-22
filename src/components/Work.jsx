import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2022,
    title: "Game Developer in Kedi Games",
    duration: "2 Months",
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

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-14">
      <h1 className="text-4xl font-bold text-center text-green-800 pb-4">
        Work
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;

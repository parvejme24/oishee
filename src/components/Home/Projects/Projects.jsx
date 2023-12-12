import React from "react";
import projec1 from "../../../assets/images/project1.png";
import projec2 from "../../../assets/images/project2.png";
import projec3 from "../../../assets/images/project3.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: projec1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adip sed do eiusmod tempor incididunt ut ",
    },
    {
      id: 2,
      image: projec2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adip sed do eiusmod tempor incididunt ut ",
    },
    {
      id: 3,
      image: projec3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adip sed do eiusmod tempor incididunt ut ",
    },
  ];
  return (
    <div id="projects" className="container mx-auto pt-24 px-4 md:px-0">
      <h2 className="text-center underline text-5xl font-bold text-[#000088]">
        Project Showcase
      </h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div key={project.id} className="border hover:shadow-md">
            <img src={project.image} className="w-full" alt="" />
            <p className="p-2 text-center text-[18px]">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import { motion } from "framer-motion";
import projec1 from "../../../assets/images/project1.png";
import projec2 from "../../../assets/images/project2.png";
import projec3 from "../../../assets/images/project3.png";
import { projects } from "../../../../public/data";

const Projects = () => {
  return (
    <div id="projects" className="container mx-auto pt-24 px-4 md:px-0">
      <h2
        data-aos="fade"
        className="text-center underline text-5xl font-bold text-[#000088]"
      >
        Project Showcase
      </h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div data-aos="fade-up">
            <motion.div
              key={project.id}
              className="h-full border hover:shadow-md transform transition-transform duration-300 hover:scale-105"
            >
              <img src={project.image} className="w-full h-[250px]" alt="" />
              <p className="p-2 text-center text-[18px]">
                {project.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

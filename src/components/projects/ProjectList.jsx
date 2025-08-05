import React from 'react'
import { projectsData } from "@/app/data";
import ProjectLayout from './ProjectLayout';
import { motion, scale } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    }
  }
}

const ProjectList = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"

      className="w-full max-w-auto  xl:max-w-4xl px-4 py-20 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center"
    >
      {projectsData.map((projects) => {
        return (
          <ProjectLayout key={projects.id} {...projects} />
        );
      })}
    </motion.div>
  )
}

export default ProjectList;

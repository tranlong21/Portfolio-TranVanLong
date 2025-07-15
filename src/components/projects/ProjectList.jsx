import React from 'react'
import { projectsData } from "@/app/data";
import ProjectLayout from './ProjectLayout';
const ProjectList = () => {
  return (
    <div 
    className="w-full max-w-auto  xl:max-w-4xl px-4 py-20 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center"
    >
      {projectsData.map((projects) => {
        return ( 
        <ProjectLayout key={projects.id} {...projects}/>
        );
      })}
    </div>
  )
}

export default ProjectList;

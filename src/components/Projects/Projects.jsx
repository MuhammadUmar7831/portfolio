import React, { useContext } from "react";
import ProjectThumbnail from "./ProjectThumbnail";
import { details, projects } from "../../services/projectService";
import { RefContext } from "../../context/RefContext";

const Projects = () => {
  const { projectsRef } = useContext(RefContext);
  return (
    <>
      <div className="p-4" ref={projectsRef}>
        <h1 className="text-3xl text-center mt-4 mb-10">
          My <span className="txt-color">Projects</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectThumbnail
              key={project.id}
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
              details={details[project.id - 1]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;

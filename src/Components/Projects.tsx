import React from "react";
import { withmainLayout } from "./Layout/withMainLayout";
import Project from "./ProjectsComponents/Project";
import { projects } from "./ProjectsComponents/ProjectsArray";

const Projects = () => {
  return (
    <div>
      <h1 className="mb-4 text-white text-3xl font-bold">Projects</h1>
      {projects.map((project) => {
        return <Project projectObject={project} />;
      })}
    </div>
  );
};

export const ProjectsLayout = withmainLayout(Projects);

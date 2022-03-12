import { AiOutlineArrowRight } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import ProjectImage from "./ProjectImage";
import TechLayout from "./TechLayout";

interface ProjectsArray {
  projectObject: {
    name: string;
    description: string;
    frontend: Array<string>;
    backend: Array<string>;
    images: Array<string>;
  };
}

const Project = (props: ProjectsArray) => {
  const { projectObject } = props;

  return (
    <>
      <h1 className="text-cyan  font-bold text-2xl mb-4">
        {projectObject.name}
      </h1>
      <p className="text-lg text-slate-400 ">{projectObject.description}</p>

      <h2 className="text-white text-xl font-bold my-4">Tech Stack </h2>
      <span className="flex flex-col gap-4">
        <TechLayout
          techName="Frontend"
          techArray={projectObject.frontend}
          key={"frontend"}
        />
        <TechLayout
          techName="Backend"
          techArray={projectObject.backend}
          key={"backend"}
        />
      </span>
      <div className="flex gap-4 my-4">
        <button className="w-fit h-fit px-4 py-1 rounded border-cyan  text-cyan border-2 hover:bg-cyan/20 hover:font-bold hover:duration-300   ">
          See It Live
        </button>

        <button className="w-fit h-fit px-4 py-1 rounded border-cyan  text-cyan border-2 hover:bg-cyan/20 hover:font-bold hover:duration-300  ">
          Source Code
        </button>
      </div>
      <ProjectImage images={projectObject.images} />
    </>
  );
};

export default Project;

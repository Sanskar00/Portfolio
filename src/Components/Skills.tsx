import React from "react";
import { withmainLayout } from "./Layout/withMainLayout";
import { BackendSkillsLayout } from "./SkillComponents/BackendSkill";
import { FrontendSkillLayout } from "./SkillComponents/FrontendSkill";

const Skills = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <h1 className="text-3xl text-white font-bold">Skills</h1>
      <div className="grid md:grid-cols-2  w-full gap-8 ">
        <FrontendSkillLayout name="Frontend" />
        <BackendSkillsLayout name="Backend" />
      </div>
    </div>
  );
};

export const SkillsLayout = withmainLayout(Skills);

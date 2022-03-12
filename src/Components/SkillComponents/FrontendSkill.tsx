import React from "react";
import withSkillLayout from "./withSkillLayout";

const FrontendSkill = () => {
  const frontendSkills = [
    {
      skill: "HTML",
    },
    {
      skill: "CSS",
    },
    {
      skill: "Javascript",
    },
    {
      skill: "ReactJs",
    },
    {
      skill: "Redux",
    },
    {
      skill: "TypeScript",
    },
    {
      skill: "TailwindCSS",
    },
    {
      skill: "MaterialUI",
    },
  ];
  return (
    <>
      {frontendSkills.map((skill) => (
        <span className="flex text-base gap-2 ">
          <h2>{skill.skill}</h2>
        </span>
      ))}
    </>
  );
};

export const FrontendSkillLayout = withSkillLayout(FrontendSkill);

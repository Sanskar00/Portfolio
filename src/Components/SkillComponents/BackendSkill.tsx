import React from "react";
import withSkillLayout from "./withSkillLayout";

const backendSkills = () => {
  const backendSkills = [
    {
      skill: "Nodejs",
    },
    {
      skill: "Express",
    },
    {
      skill: "MongoDB",
    },
    {
      skill: "RestApi",
    },
    {
      skill: "Firebase",
    },
  ];

  return (
    <>
      {backendSkills.map((skill) => (
        <span className="flex text-base gap-2 ">
          <h2>{skill.skill}</h2>
        </span>
      ))}
    </>
  );
};

export const BackendSkillsLayout = withSkillLayout(backendSkills);

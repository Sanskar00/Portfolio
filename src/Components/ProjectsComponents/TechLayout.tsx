import React from "react";

type TechProps = {
  techName: string;
  techArray: Array<string>;
};

const TechLayout = ({ techName, techArray }: TechProps) => {
  console.log(techArray.length);
  return (
    <span className="flex gap-5 ">
      <h3 className="text-cyan text-lg font-bold">{techName}</h3>
      <div className={`text-white text-lg  `}>
        <p className={`grid grid-cols-2 gap-2 md:grid-cols-4 md:text-center`}>
          {techArray.map((tech) => (
            <h1>{tech}</h1>
          ))}
        </p>
      </div>
    </span>
  );
};

export default TechLayout;

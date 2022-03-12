import React from "react";

type SkillProps = {
  name: string;
};

const withSkillLayout = <P extends object>(
  SkillComponent: React.ComponentType<P>
) => {
  const NewComponent = (skillProps: SkillProps) => {
    return (
      <div className=" md:h-60 rounded bg-slate-800 py-4 px-4  border-2 border-slate-500/60 grid gap-4">
        <h1 className="text-2xl text-cyan  ">{skillProps.name}</h1>
        <section className="w-full  grid grid-cols-2 grid-rows-5 gap-2 text-white   ">
          <SkillComponent {...(skillProps as P)} />
        </section>
      </div>
    );
  };
  return NewComponent;
};

export default withSkillLayout;

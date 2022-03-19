import React from "react";
import withmainLayout from "./Layout/withMainLayout";

const About = () => {
  return (
    <div>
      <h1 className="text-3xl text-white font-bold mb-4">About Me</h1>
      <p className="text-lg text-slate-400">
        Hey! I’m Sanskar Saxena a FullStack Developer. I emphasis more on
        frontend part but can also do backend . I am perpetually curious about
        designing and buliding a new website .
      </p>
    </div>
  );
};

export const AboutLayout = withmainLayout(About);

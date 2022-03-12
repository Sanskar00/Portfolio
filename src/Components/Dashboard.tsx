import React from "react";
import { AiOutlineDown, AiOutlineDownload } from "react-icons/ai";

const Dashboard = () => {
  return (
    <div className="w-screen flex flex-col text-center items-center gap-3 mt-12 h-screen  ">
      <h1 className="text-xl text-cyan font-semibold">Hi, I'm</h1>
      <h1 className="text-4xl font-bold text-white">Sanskar Saxena</h1>
      <h1 className="text-2xl text-slate-400 font-bold ">
        Fullstack Developer
      </h1>
      <section className="flex gap-2 px-6 ">
        <button className="w-24 px-4 py-1 rounded border-cyan  text-cyan border-2 hover:bg-cyan/20 hover:font-bold ">
          Contact
        </button>

        <button className="w-24 px-4 py-1 rounded border-cyan text-cyan border-2 hover:bg-cyan/20 hover:font-bold   ">
          <span className="flex place-items-center justify-center text-center gap-2">
            CV {<AiOutlineDownload />}
          </span>
        </button>
      </section>
      <div
        className="w-44 h-44 mt-12 md:w-72 md:h-72 
       rounded-full border-2 border-cyan absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
      ></div>
    </div>
  );
};

export default Dashboard;
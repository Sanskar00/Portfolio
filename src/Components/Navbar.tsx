import React, { Fragment } from "react";
import { RiPencilRuler2Line, RiHome2Line } from "react-icons/ri";
import ScrollIntoView from "react-scroll-into-view";

import {
  AiOutlineAppstore,
  AiOutlineProfile,
  AiOutlineUser,
} from "react-icons/ai";

const navigationIcon = [
  {
    element: "#home",
    logo: <RiHome2Line />,
  },
  {
    element: "#skills",
    logo: <RiPencilRuler2Line />,
  },
  {
    element: "#about",
    logo: <AiOutlineUser />,
  },
  {
    element: "#projects",
    logo: <AiOutlineAppstore />,
  },
  {
    element: "#contact",
    logo: <AiOutlineProfile />,
  },
];

const Navbar = () => {
  return (
    <div className="fixed bottom-5 grid w-screen place-content-center md:bottom-10 ">
      <div className="text-3xl w-76  text-white h-16 place-items-center px-12 md:px-8 border-white/75 border-2 rounded-full flex gap-5  bg-gradient-to-br from-white/70 to-slate-300/30  ">
        {navigationIcon.map((icon) => {
          return (
            <ScrollIntoView selector={icon.element}>
              <span className="grid  place-items-center cursor-pointer">
                <span className="cursor-pointer  relative   ">{icon.logo}</span>
                <span className="h-12 w-12 opacity-0 rounded-full hover:opacity-100 duration-300 absolute bg-gradient-to-tl from-white/50 to-slate-700/30 "></span>
              </span>
            </ScrollIntoView>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;

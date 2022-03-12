import React from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const SideBar = () => {
  const socialMediaIcon = [
    {
      logo: <FiTwitter />,
    },
    {
      logo: <FiLinkedin />,
    },
    {
      logo: <FiGithub />,
    },
  ];

  return (
    <div className="fixed w-screen text-white grid gap-3 text-xl left-10 top-1/2 -translate-y-1/2 ">
      {socialMediaIcon.map((icon) => (
        <span className="hover:scale-125 duration-300 w-fit hover:text-cyan cursor-pointer">
          {icon.logo}
        </span>
      ))}
    </div>
  );
};

export default SideBar;

import React from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const SideBar = () => {
	const socialMediaIcon = [
		{
			logo: <FiTwitter />,
			url: "https://twitter.com/Sanskar_Saxena_",
		},
		{
			logo: <FiLinkedin />,
			url: "https://www.linkedin.com/in/sanskar-saxena-6466611a7/",
		},
		{
			logo: <FiGithub />,
			url: "https://github.com/Sanskar00",
		},
	];

	return (
		<div className="relative md:fixed w-screen text-white flex md:grid gap-3 text-xl justify-center bottom-36 md:bottom-1/2  md:justify-start md:translate-x-0 md:mb-0 md:left-10 md:top-1/2 md:-translate-y-1/2  ">
			{socialMediaIcon.map((media) => (
				<a
					target="_blank"
					href={`${media.url}`}
					rel="noopener noreferrer"
					className="hover:scale-125"
				>
					<span className=" duration-300 w-fit hover:text-cyan cursor-pointer">
						{media.logo}
					</span>
				</a>
			))}
		</div>
	);
};

export default SideBar;

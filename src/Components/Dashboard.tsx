import React from "react";
import { AiOutlineDown, AiOutlineDownload } from "react-icons/ai";
import ScrollIntoView from "react-scroll-into-view";
import profilePicture from "../Assets/ProfilePic.jpg";

const Dashboard = () => {
	return (
		<div
			className="w-screen flex flex-col text-center items-center gap-3 mt-12 h-screen align-center  "
			id="home"
		>
			<h1 className="text-xl text-cyan font-semibold">Hi, I'm</h1>
			<h1 className="text-4xl font-bold text-white">Sanskar Saxena</h1>
			<h1 className="text-2xl text-slate-400 font-bold ">
				Fullstack Developer
			</h1>
			<section className="flex gap-2 px-6 ">
				<ScrollIntoView selector="#contact">
					<button className="w-24 px-4 py-1 rounded border-cyan  text-cyan border-2 hover:bg-cyan/20 hover:font-bold ">
						Contact
					</button>
				</ScrollIntoView>
				{/* 
        <button className="w-24 px-4 py-1 rounded border-cyan text-cyan border-2 hover:bg-cyan/20 hover:font-bold   ">
          <span className="flex place-items-center justify-center text-center gap-2">
          </span>
        </button> */}
			</section>
			<div
				className="w-[256px] h-[256px] mt-12 md:w-72 md:h-72 
       rounded-full border-2 border-cyan absolute top-1/2 -translate-y-1/2"
			>
				<img
					src={profilePicture}
					className="w-full h-full object-cover rounded-full "
				></img>
			</div>
		</div>
	);
};

export default Dashboard;

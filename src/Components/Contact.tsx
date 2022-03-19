import { useState, MouseEvent, ChangeEvent, FormEvent, useRef } from "react";
import emailjs from "emailjs-com";
import withmainLayout from "./Layout/withMainLayout";

const Contact = () => {
  const [labelName, setLabelName] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const form = useRef<string | null>(null);

  const { firstName, lastName, email, message } = formData;

  const handleClick = (e: MouseEvent<HTMLInputElement>) => {
    setLabelName((e.target as HTMLInputElement).name);
  };

  const handleTextClick = (e: MouseEvent<HTMLTextAreaElement>) => {
    setLabelName((e.target as HTMLTextAreaElement).name);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    });
  };

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [(e.target as HTMLTextAreaElement).name]: (
        e.target as HTMLTextAreaElement
      ).value,
    });
  };

  return (
    <>
      <h1 className={"mb-4 text-white text-3xl font-bold"}>
        Do you want any help for designing or building a new website?
      </h1>
      <form
        action="https://formsubmit.co/d102ac3bb444c443a17875d88798c62d"
        method="POST"
        className=" flex flex-col md:grid md:grid-cols-2  my-8 gap-8 md:w-3/4 "
      >
        <section className="relative  ">
          <label
            className={
              " absolute text-sm px-4 " +
              (labelName === "firstName" || firstName !== ""
                ? "-translate-y-6 duration-150 text-white"
                : "text-slate-400  top-0 translate-y-1/2")
            }
            htmlFor="firstName"
          >
            Firstname
          </label>
          <input
            className="bg-white/25 text-white w-full p-2"
            name="firstName"
            id="firstName"
            type="text"
            value={firstName}
            onClick={handleClick}
            onChange={handleChange}
          ></input>
        </section>
        <section className="relative">
          <label
            className={
              " absolute text-sm px-4 " +
              (labelName === "lastName" || lastName !== ""
                ? "-translate-y-6 duration-150 text-white"
                : "text-slate-400  top-0 translate-y-1/2")
            }
            htmlFor="lastname"
          >
            Lastname
          </label>
          <input
            className="bg-white/25 text-white w-full p-2"
            name="lastName"
            id="lastname"
            type="text"
            value={lastName}
            onClick={handleClick}
            onChange={handleChange}
          ></input>
        </section>
        <section className="relative col-span-2 ">
          <label
            className={
              " absolute text-sm px-4 " +
              (labelName === "email" || email !== ""
                ? "-translate-y-6 duration-150 text-white"
                : "text-slate-400  top-0 translate-y-1/2")
            }
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="bg-white/25 text-white w-full p-2"
            name="email"
            id="email"
            type="email"
            value={email}
            onClick={handleClick}
            onChange={handleChange}
          ></input>
        </section>
        <section className="relative col-span-2 ">
          <label
            className={
              " absolute text-sm px-4 " +
              (labelName === "message" || message !== ""
                ? "-translate-y-6 duration-150 text-white"
                : "text-slate-400  top-0 translate-y-1/2")
            }
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="bg-white/25 text-white w-full h-44 p-2"
            name="message"
            id="message"
            value={message}
            onClick={handleTextClick}
            onChange={handleTextChange}
          ></textarea>
        </section>
        <button className="w-fit h-fit px-4 py-1 rounded border-cyan  text-cyan border-2 hover:bg-cyan/20 hover:font-bold hover:duration-300  ">
          Submit
        </button>
      </form>
    </>
  );
};

export const ContactLayout = withmainLayout(Contact);

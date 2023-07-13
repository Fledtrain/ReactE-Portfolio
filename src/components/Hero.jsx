import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const bio =
    "I'm a College Student and a Front End Developer! I am currently studying TypeScript & React";
  return (
    <>
      <div className="py-10 tracking-wide">
        <h1 className="text-4xl font-semibold flex items-center justify-center py-6">
          Hello! I'm Joey W <span className="animate-pulse">👋</span>
        </h1>
        <div>
          <p className="text-md text-center py-4 px-2 text-xl">{bio}</p>
          <div className="flex justify-center text-4xl py-4 ">
            <figure className="group mr-10">
              <a
                href="https://github.com/Fledtrain"
                target="_blank"
                rel="noreferrer"
                className="mr-10"
                cursor="pointer"
              >
                <FaGithub />
              </a>
              <div className=" relative bottom-10 right-1 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                <p className="text-sm italic ">Github</p>
              </div>
            </figure>
            <figure className="group">
              <a
                href="https://www.linkedin.com/in/joeywhitehead/"
                target="_blank"
                rel="noreferrer"
                cursor="pointer"
              >
                <FaLinkedin />
              </a>
              <div className="relative right-2 text-[#0072b1] text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                <p className="text-sm italic ">LinkedIn</p>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

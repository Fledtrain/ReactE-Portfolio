import React from "react";

const Nav = () => {
  return (
    <>
      <nav className="flex justify-between items-center bg-gray-200 py-8 px-20">
        <figure className="w-32 ">
          <img
            src="android-chrome-512x512.png"
            className="rounded-md"
            alt="My Logo"
            loading="lazy"
          />
        </figure>

        <ul className="flex items-center space-x-16 px-10">
          <a href="#Project" aria-label="Go to Projects">
            <li>Projects</li>
          </a>

          <a
            href="https://www.linkedin.com/in/JoeyWhitehead"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <li>LinkedIn</li>
          </a>
          <a
            href="https://github.com/Fledtrain"
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
          >
            <li className=" text-red-500 hover:text-red-800 ">Github</li>
          </a>
        </ul>
      </nav>
    </>
  );
};

export default Nav;

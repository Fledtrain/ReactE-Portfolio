import React from "react";

const Nav = () => {
  const onClick = () => {
    console.log("Clicked");
  };

  return (
    <>
      <nav className="flex justify-between items-center bg-gray-100 py-8 px-20">
        <figure className="w-32 ">
          <img src="Logo.jpg" alt="My Logo" className="cursor-pointer" />
        </figure>
        <ul className="flex items-center space-x-10 px-10">
          <li></li>
          <li className="cursor-pointer " onClick={onClick}>
            Projects
          </li>

          <li>LinkedIn</li>
          <li className="text-red-500 hover:text-red-600 hover:font-semibold">
            Github
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;

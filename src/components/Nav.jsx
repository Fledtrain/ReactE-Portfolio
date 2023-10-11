import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="flex justify-between items-center bg-gray-200 py-8 md:px-20">
        <Link to="/">
          <figure className="w-32 ">
            <img
              src="android-chrome-512x512.png"
              className="rounded-md hidden md:block"
              alt="My Logo"
              loading="lazy"
            />
          </figure>
        </Link>

        <ul className="text-lg md:text-xl flex md:items-center space-x-8 pr-10 sm:space-x-28 sm:px-28  md:space-x-16 md:px-10">
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

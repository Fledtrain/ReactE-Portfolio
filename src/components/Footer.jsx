
/** Returns the footer component
 * @returns {JSX.Element} JSX Element
 */
const Footer = () => {
  return (
    <>
      <footer id="Footer" className=" bg-gray-500 text-white py-8 px-20">
        <section className="flex justify-center items-center md:space-x-48 space-x-20 py-3 ">
          <a
            href="https://github.com/Fledtrain"
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
          >
            <p className="hover:underline no-underline transition-all ease-in-out duration-150 ">Github</p>
          </a>
          <figure className="w-24">
            <img
              src="android-chrome-512x512.png"
              className="rounded-md"
              alt="My Logo"
              loading="lazy"
            />
          </figure>
          <a
            href="https://www.linkedin.com/in/JoeyWhitehead"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <p className="hover:underline no-underline transition-all ease-in-out duration-150">LinkedIn</p>
          </a>
        </section>
        <div>
          <p className="text-center mt-7">© 2023 Fledtrain</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

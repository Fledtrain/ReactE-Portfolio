import { FaGithub, FaLinkedin } from "react-icons/fa";

/** Returns the Hero section
 * @returns {JSX.Element} JSX Element
 */
const Hero = () => {
  const bio =
    "Nice to meet you! I'm a College Student and a Front End Developer! I am currently studying React.";
  const life =
    "I completed CodePath's Technical Interview Prep Course and I'm taking CodePath's Intermediate Web Dev Course. 😄";
  const social =
    "In my free time I like to play video games and listen to music.";
  return (
    <>
      <section>
        <div className="py-8 tracking-wide">
          <h1 className="text-4xl font-semibold flex items-center justify-center">
            Hello! I'm Joey W <span className="wave">👋</span>
          </h1>
          <div>
            <p className="text-md text-center py-4 px-2 text-xl">
              {bio} <br /> {life} <br /> {social}
            </p>
            <div className="flex justify-center text-4xl py-2 ">
              <figure className="group mr-10">
                <a
                  href="https://github.com/Fledtrain"
                  target="_blank"
                  rel="noreferrer"
                  className="mr-10"
                  cursor="pointer"
                  aria-label="Github"
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
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <div className="relative right-2 text-[#0072b1] text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                  <p className="text-sm italic  ">LinkedIn</p>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

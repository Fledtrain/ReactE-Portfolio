
import { FaGithub, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

/** Returns the Projects page 
 * @returns {JSX.Element} JSX Element
 */
const Projects = () => {
  const projects = [
    {
      title: "Realtor React Clone",
      description: "Created with ",
      languages: "React, TailwindCSS & Firebase",
      image: "Realtor.png",
      imgUrl: "https://realtorreactclone.firebaseapp.com/",
      githubUrl: "https://github.com/Fledtrain/ReactRealtorClone",
      index: 0,
    },
    {
      title: "Fast React Pizza Co.",
      description: "Created with ",
      languages: "React & CSS",
      image: "ReactPizza.jpg",
      imgUrl: "https://fastpizzareact.netlify.app/",
      githubUrl: "https://github.com/Fledtrain/FastReactPizzaCo",
      index: 1,
    },
    {
      title: "Robot Gripper",
      description: "Created with ",
      languages: "Python & Arduino",
      image: "Gripper.jpg",
      imgUrl: "https://github.com/Fledtrain/GripperGUIV2",
      githubUrl: "https://github.com/Fledtrain/GripperGUIV2",
      index: 2,
    },
    {
      title: "Tesla UI Clone",
      description: "Created with ",
      languages: "HTML & TailwindCSS",
      image: "Tesla.jpg",
      imgUrl: "https://teslauiclone.vercel.app/",
      githubUrl: "https://github.com/Fledtrain/TeslaUIClone",
      index: 3,
    },
    {
      title: "Obstacle Avoidance System",
      description: "Created with ",
      languages: "Arduino",
      image: "SelfDrivingCar.jpg",
      imgUrl: "https://github.com/Fledtrain/ObstacleAvoidanceSystem",
      githubUrl: "https://github.com/Fledtrain/ObstacleAvoidanceSystem",
      index: 4,
    },
  ];

  const projectlng = projects.length;

  return (
    <>
      <section>
        <div className="">
          <h2 className="flex justify-center py-8  text-4xl font-semibold">
            These are my Projects
          </h2>
          <Link to="/project">
            <p className="text-center text-xl font-medium">
              Click here for more Projects
            </p>
          </Link>
        </div>
        {projectlng > 0 ? (
          <>
            <div className="flex flex-wrap justify-center ">
              {projects.map((project) => (
                <Project projectObj={project} key={project.index} />
              ))}
            </div>
          </>
        ) : (
          "We are still working on Projects"
        )}
      </section>
    </>
  );
};
/** Returns the images and Link to all of the projects
 * @param {Object} projectObj
 * @param {string} projectObj.title
 * @param {string} projectObj.description
 * @param {string} projectObj.languages
 * @param {string} projectObj.image
 * @param {string} projectObj.imgUrl
 * @param {string} projectObj.githubUrl
 * @param {number} projectObj.index
 * @returns {JSX.Element} JSX Element
 */
export const Project = ({ projectObj }) => {
  return (
    <>
      <section
        id="Project"
        className="py-4 flex justify-center text-center items-center"
      >
        <div className="px-4">
          <h2 className="text-3xl font-semibold">{projectObj.title}</h2>
          <p className="text-md p-2">
            {projectObj.description}
            {projectObj.languages}
          </p>
          <section className="">
            <figure className="w-96 h-96">
              <img
                src={projectObj.image}
                alt={projectObj.title}
                className="w-full h-full rounded-md object-cover cursor-pointer border-2 border-gray-300 hover:border-gray-600 focus:border-gray-800 duration-300 ease-in-out transform "
                onClick={() => window.open(projectObj.imgUrl)}
                target="_blank"
                loading="lazy"
              />
            </figure>
            <div className="flex justify-center py-5 space-x-5 text-2xl">
              <figure className="group">
                <a
                  href={projectObj.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className=""
                  cursor="pointer"
                  aria-label="Github"
                >
                  <FaGithub />
                </a>
                <div className="relative right-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                  <p className="text-xs italic ">Github</p>
                </div>
              </figure>
              <figure className="group">
                <a
                  href={projectObj.imgUrl}
                  target="_blank"
                  rel="noreferrer"
                  cursor="pointer"
                  aria-label="Link"
                >
                  <FaLink />
                </a>
                <div className="relative right-[.15rem] text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                  <p className="text-sm italic  ">Link</p>
                </div>
              </figure>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
export default Projects;


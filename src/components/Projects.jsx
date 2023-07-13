import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Realtor React Clone",
      description: "This is a project",
      languages: "React, Tailwind & Firebase",
      image: "Realtor.png",
      index: 0,
    },
    {
      title: "Fast React Pizza Co",
      description: "This is a project",
      languages: "React & CSS",
      image: "ReactPizza.jpg",
      index: 1,
    },
  ];

  const projectlng = projects.length;

  return (
    <>
      <h2 className="flex justify-center py-10 text-2xl font-semibold">
        These are my Projects
      </h2>
      {projectlng > 0 ? (
        <>
          <div className="flex flex-wrap justify-center">
            {projects.map((project) => (
              <Project projectObj={project} key={project.index} />
            ))}
          </div>
        </>
      ) : (
        "We are still working on Projects"
      )}
    </>
  );
};

const Project = ({ projectObj }) => {
  return (
    <>
      <section className="py-4 flex justify-center text-center items-center">
        <div className="px-4">
          <h2 className="">{projectObj.title}</h2>
          <p>{projectObj.description}</p>
          <figure className="w-72 h-72">
            <img
              src={projectObj.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
      </section>
    </>
  );
};
export default Projects;

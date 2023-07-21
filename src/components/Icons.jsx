import React from "react";

const Icons = () => {
  const languagesData = [
    {
      name: "React",
      photoUrl: "reactIcon.png",
    },
    {
      name: "TypeScript",
      photoUrl: "TypeScript.png",
    },
    {
      name: "JavaScript",
      photoUrl: "javascript.png",
    },
    { name: "HTML", photoUrl: "html.png" },
    { name: "CSS", photoUrl: "CSS.png" },
    { name: "Python", photoUrl: "Pyth.png" },
    { name: "Java", photoUrl: "Java.png" },
  ];
  const numLng = languagesData.length;

  return (
    <>
      <main className="flex flex-col items-center gap-16 py-10 bg-gray-200">
        <div className="flex justify-center text-4xl font-semibold ">
          <h2>My Tech Stack</h2>
        </div>

        {numLng > 0 ? (
          <>
            <ul className="list-none grid grid-cols-2 md:grid-cols-4 gap-20">
              {languagesData.map((language) => (
                <Languages languageObj={language} key={language.name} />
              ))}
            </ul>
          </>
        ) : (
          "We are still working on Languages"
        )}
      </main>
    </>
  );
};

const Languages = ({ languageObj }) => {
  return (
    <>
      <li>
        <section className="relative md:mr-10 p-10">
          <section className="lg:w-32 flex justify-center sm:w-20 ">
            <figure className="group ">
              <img
                src={languageObj.photoUrl}
                alt={languageObj.name}
                className="group-hover:scale-90 group-hover:brightness-90 transform transition-all ease-in-out duration-150 "
                aria-describedby={languageObj.name}
                loading="lazy"
                aria-label={languageObj.name}
              />
              <div className="pt-5 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">
                <p className="text-md italic">{languageObj.name}</p>
              </div>
            </figure>
          </section>
        </section>
      </li>
    </>
  );
};

export default Icons;

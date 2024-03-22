
/** Returns the languages I know
 * @returns {JSX.Element} JSX Element
 */
const Tech = () => {
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
    {
      name: "Postman",
      photoUrl:
        "https://seeklogo.com/images/P/postman-logo-0087CA0D15-seeklogo.com.png",
    },
    {
      name: "VSCode",
      photoUrl:
        "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.png",
    },
    {
      name: "Github",
      photoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png",
    },
    {
      name: "Git",
      photoUrl: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    },
    {
      name: "Polypane",
      photoUrl:
        "https://polypane.app/static/5df5528946772487a6ab462ff2125f26/icon.png",
    },
    {
      name: "JetBrains",
      photoUrl:
        "https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.png",
    },
  ];
  const numLng = languagesData.length;

  return (
    <>
      <main className="flex flex-col items-center gap-16 py-10 bg-gray-200">
        <div className="flex justify-center text-4xl font-semibold ">
          <h2>My Skills</h2>
        </div>

        {numLng > 0 ? (
          <>
            <ul className="list-none grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 lg:gap-4">
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

/** Returns the images of the languages
 * @param {Object} languageObj
 * @param {string} languageObj.name
 * @param {string} languageObj.photoUrl
 * @returns {JSX.Element} JSX Element
 */
const Languages = ({ languageObj }) => {
  return (
    <>
      <li>
        <section className="relative md:mr-8 p-10">
          <section className="sm:w-24 lg:w-28 flex justify-center ">
            <figure className="group">
              <img
                src={languageObj.photoUrl}
                alt={languageObj.name}
                className="group-hover:scale-90 group-hover:brightness-90 transform transition-all ease-in-out duration-150 "
                aria-describedby={languageObj.name}
                loading="lazy"
                aria-label={languageObj.name}
                
              />
              <div className="pt-5 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">
                <p className="text-md lg:text-lg italic">{languageObj.name}</p>
              </div>
            </figure>
          </section>
        </section>
      </li>
    </>
  );
};

export default Tech;

import { Link } from "react-router-dom"
import { Project as Codepath } from "../components/Projects"

/** Returns the Projects page for CodePath WEB102
 * @returns {JSX.Element} JSX Element
 */
const Project = () => {
    const projects = [
        {
            title: "The GamerHub",
            description: "Created with ",
            languages: "React, TailwindCSS, DaisyUI, & Supabase",
            image: "gamerhub.png",
            imgUrl: "https://fledsgamerhub.netlify.app/",
            githubUrl: "https://fledsgamerhub.netlify.app/",
            index: 0,
        },
        {
            title: "WeatherReporter",
            description: "Created with ",
            languages: "React, TailwindCSS, & DaisyUI",
            image: "weatherReporter.png",
            imgUrl: "https://weatherreporterapp.netlify.app/",
            githubUrl: "https://weatherreporterapp.netlify.app/",
            index: 1,
        },
        {
            title: "Gamer Creator",
            description: "Created with ",
            languages: "React, TailwindCSS, DaisyUI, & Supabase",
            image: "gamercreator.png",
            imgUrl: "https://gamermates.netlify.app/",
            githubUrl: "https://gamermates.netlify.app/",
            index: 2,
        },
        {
            title: "Video Game Mystery FlashCard",
            description: "Created with ",
            languages: "React & TailwindCSS",
            image: "flashcard.png",
            imgUrl: "https://fledtrainflashcards.netlify.app/",
            githubUrl: "https://fledtrainflashcards.netlify.app/",
            index: 3,
        },
        {
            title: "Community Board",
            description: "Created with ",
            languages: "React & CSS",
            image: "communityBoard.png",
            imgUrl: "https://communityboard.netlify.app/",
            githubUrl: "https://communityboard.netlify.app/",
            index: 4,
        },
    ];

    const projectlng = projects.length;
    return (
        <>
            <section >
                <div className="p-4 text-center ">
                    <h1 className="text-2xl font-semibold mt-2 mb-5">These are my CodePath Projects from WEB102</h1>
                    <Link to="/project">
                        <p className="text-center text-2xl underline hover:text-red-900 hover:font-bold font-medium mb-5">
                            Click here for more Projects
                        </p>
                    </Link>
                    <div className="xl:pr-[20rem] xl:pl-[20rem] break-words text-xl text-left leading-relaxed">
                        <p>From September 16th 2023 to November 18th 2023,
                            I was accepted into
                            <span className="font-semibold"> { }
                                CodePaths 10 Week Intermediate Web Development Course! <br />
                            </span>
                            I first learned the fundamentals of building an interactive Frontend with React
                            , and
                            then leading into learning how to Respond to Complex User Input and Displaying data from an API. <br />
                            For the last 4 weeks I learned how to Implement Navigation with React Router and using a Database with Supabase.
                        </p>
                        <p>
                            The Capstone Project was
                            <span className="font-semibold"> { }
                                GamerHub
                            </span> where I created a Social Media Platform (Similiar to Twitter) but for Gamers.
                        </p>
                    </div>
                </div>
                {projectlng > 0 ? (
                    <>
                        <div className="flex flex-wrap justify-center ">
                            {projects.map((project) => (
                                <Codepath projectObj={project} key={project.index} />
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        <p className="text-center font-semibold">
                            I am still working on the Projects come back soon 👯
                        </p>
                    </>
                )}
                {/* <div className="text-center text-xl font-medium pb-96">
                    <Link to="/"><p className="pb-48 no-underline ease-in-out ">Click here to go back Home</p></Link>
                </div> */}
            </section >
        </>
    )
}

export default Project
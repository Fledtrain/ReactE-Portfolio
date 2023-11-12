import { Link } from "react-router-dom"
import { Project as Codepath } from "../components/Projects"

/** Returns the Projects page for CodePath WEB102
 * @returns {JSX.Element} JSX Element
 */
const Project = () => {
    const projects = [
        // {
        //     title: "The GamerHub",
        //     description: "Created with ",
        //     languages: "React, TailwindCSS, DaisyUI & Supabase",
        //     image: "gamerhub.png",
        //     imgUrl: "https://fledsgamerhub.netlify.app/",
        //     githubUrl: "https://github.com/Fledtrain/web102_hobbyhub",
        //     index: 0,
        // },
        // {
        //     title: "WeatherReporter",
        //     description: "Created with ",
        //     languages: "React, TailwindCSS & DaisyUI",
        //     image: "",
        //     imgUrl: "https://weatherreporterapp.netlify.app/",
        //     githubUrl: "https://github.com/Fledtrain/web102_datadashboard",
        //     index: 1,
        // },
        // {
        //     title: "Gamer Creator",
        //     description: "Created with ",
        //     languages: "React, TailwindCSS, DaisyUI & Supabase",
        //     image: "gamercreator.png",
        //     imgUrl: "https://gamermates.netlify.app/",
        //     githubUrl: "https://github.com/Fledtrain/web102_crewmates",
        //     index: 2,
        // },
        // {
        //     title: "Video Game Mystery FlashCard",
        //     description: "Created with ",
        //     languages: "React & TailwindCSS",
        //     image: "flashcard.png",
        //     imgUrl: "https://fledtrainflashcards.netlify.app/",
        //     githubUrl: "https://github.com/Fledtrain/web102_flashcards",
        //     index: 3,
        // },
        // {
        //     title: "Community Board",
        //     description: "Created with ",
        //     languages: "React & CSS",
        //     image: "",
        //     imgUrl: "https://communityboard.netlify.app/",
        //     githubUrl: "https://github.com/Fledtrain/web102_communityBoard",
        //     index: 4,
        // },
    ];

    const projectlng = projects.length;
    return (
        <>
            <section >
                <h1 className="p-4 text-center text-2xl font-semibold">These are my CodePath Projects from WEB102</h1>
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
                <div className="text-center text-xl font-medium pb-96">
                    <Link to="/"><p className="pb-48 no-underline ease-in-out ">Click here to go back Home</p></Link>
                </div>
            </section >
        </>
    )
}

export default Project
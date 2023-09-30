import { Link } from "react-router-dom"
import { Project as Codepath } from "../components/Projects"

const Project = () => {
    const projects = [
        // {
        //     title: "Realtor React Clone",
        //     description: "Created with ",
        //     languages: "React, TailwindCSS & Firebase",
        //     image: "Realtor.png",
        //     imgUrl: "https://realtorreactclone.firebaseapp.com/",
        //     githubUrl: "https://github.com/Fledtrain/ReactRealtorClone",
        //     index: 0,
        // },
        // {
        //     title: "Fast React Pizza Co.",
        //     description: "Created with ",
        //     languages: "React & CSS",
        //     image: "ReactPizza.jpg",
        //     imgUrl: "https://fastpizzareact.netlify.app/",
        //     githubUrl: "https://github.com/Fledtrain/FastReactPizzaCo",
        //     index: 1,
        // },
        // {
        //     title: "Robot Gripper",
        //     description: "Created with ",
        //     languages: "Python & Arduino",
        //     image: "Gripper.jpg",
        //     imgUrl: "https://github.com/Fledtrain/GripperGUIV2",
        //     githubUrl: "https://github.com/Fledtrain/GripperGUIV2",
        //     index: 2,
        // },
        // {
        //     title: "Tesla UI Clone",
        //     description: "Created with ",
        //     languages: "HTML & TailwindCSS",
        //     image: "Tesla.jpg",
        //     imgUrl: "https://teslauiclone.vercel.app/",
        //     githubUrl: "https://github.com/Fledtrain/TeslaUIClone",
        //     index: 3,
        // },
        // {
        //     title: "Obstacle Avoidance System",
        //     description: "Created with ",
        //     languages: "Arduino",
        //     image: "SelfDrivingCar.jpg",
        //     imgUrl: "https://github.com/Fledtrain/ObstacleAvoidanceSystem",
        //     githubUrl: "https://github.com/Fledtrain/ObstacleAvoidanceSystem",
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
import Hero from "../components/Hero";
import Tech from "../components/Tech";
// import Projects from "../components/Projects";
import Project from "./Project";

/** Returns the Home page
 * @returns {JSX.Element} JSX Element
 */
const Home = () => {
  return (
    <>
      <section>
        <hr className="my-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
        <Hero />
        <hr className="my-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
        <Tech />
        <hr className="my-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
        <Project />
        <hr className="my-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      </section>
    </>
  );
};

export default Home;


import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Tech from "../components/Tech";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <section>
        <Nav />
        <hr className="my-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
        <Hero />
        <hr className="my-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
        <Tech />
        <hr className="my-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
        <Projects />
        <hr className="my-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
        <Footer />
      </section>
    </>
  );
};

export default Home;

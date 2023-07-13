import React from "react";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Icons from "./components/Icons";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <section>
        <Nav />
        <hr className="my-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
        <Hero />
        <hr className="my-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
        <Icons />
        <Projects />
        <Footer />
      </section>
    </>
  );
};

export default App;

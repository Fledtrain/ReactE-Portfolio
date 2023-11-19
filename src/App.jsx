import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Home from "./pages/Home";
// import Project from "./pages/Project";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

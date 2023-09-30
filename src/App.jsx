
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Project from "./pages/Project";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "@/pages/Hero";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Project from "@/pages/Projects";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

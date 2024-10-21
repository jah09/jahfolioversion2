import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "@/pages/Hero";
import About from "@/pages/About/index";
import Contact from "@/pages/Contact";
import Project from "@/pages/Project/index";
import ProjectDetails from "@/pages/Project/ProjectDetails";

import "ldrs/helix";
function App() {
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  //hooks
  useEffect(() => {
    // Increment the count every 50ms until it reaches 100
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 100) {
          clearInterval(interval);
          setLoading(false); // Stop loading when count reaches 100
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 50); // Adjust timing to control speed
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* {!loading ? (
        <div className="loader-wrapper bg-[#0f172a]   flex justify-center items-center   min-h-screen  ">
          <l-helix size="45" speed="2.5" color="white"></l-helix>
        </div>
      ) : (
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
      )} */}
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/projects-details" element={<ProjectDetails />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

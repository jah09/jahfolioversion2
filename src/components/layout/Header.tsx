import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { RiMoonClearFill } from "react-icons/ri";
import { FiSun } from "react-icons/fi";
const Header = () => {
  //state
  const [darkMode, setDarkMode] = useState(true);

  //toogle darkmode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  //hooks
  useEffect(() => {
    if (darkMode === true) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="h-16 ">
      <div className="flex justify-between items-center p-2 shadow-sm  bg-background ">
        <div>Icon </div>
        <div>
          <ul className="flex gap-x-2 cursor-pointer  text-lg ">
            <li>
              <Link to="/" className="text-foreground font-semibold ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-foreground  font-semibold ">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-foreground  font-semibold ">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-foreground  font-semibold ">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex gap-x-2">
            <button className="">
              <FaGithub
                className="w-5 h-5 "
                style={{ color: "var(--foreground)" }}
              />
            </button>
            <button>
              <BsDiscord
                className="w-5 h-5"
                style={{ color: "var(--foreground)" }}
              />
            </button>
            <button onClick={toggleDarkMode}>
              {!darkMode ? (
                <RiMoonClearFill
                  className="w-5 h-5"
                  style={{ color: "var(--foreground)" }}
                />
              ) : (
                <FiSun
                  className="w-5 h-5"
                  style={{ color: "var(--foreground)" }}
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

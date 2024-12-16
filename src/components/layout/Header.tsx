import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { RiMoonClearFill } from "react-icons/ri";
import { FiSun } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import myLogo_dark from "@/assets/image/myLogo_dark.gif";
import myLogo_light from "@/assets/image/myLogo_light.gif";
import { useTheme } from "@/hooks/useTheme";
const Header = () => {
  //state
  const { darkMode, toggleDarkMode } = useTheme();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  // const [darkMode, setDarkMode] = useState<boolean>(true);
  // //toogle darkmode
  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };

  //hooks
  useEffect(() => {
    if (darkMode === true) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  //event handler
  const handleMenuToggle = () => {
    setShowMenu((prevState) => !prevState);
  };
  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="shadow-sm shadow-accent bg-background  w-full lg:px-[80px] xl:px-[100px] md:px-2 h-14">
        <div className="flex justify-between  items-center md:px-2 max-sm:px-2 z-50 py-1">
          <div className="cursor-pointer">
            {!darkMode ? (
              <img
                src={myLogo_light}
                alt="logo"
                className="w-14 h-14 rounded-full"
              />
            ) : (
              <img
                src={myLogo_dark}
                alt="logo"
                className="w-14 h-14 rounded-full"
              />
            )}
          </div>
          {/*Navbar menu  max-sm:bg-red-500 sm:bg-blue-200 md:bg-green-500 lg:bg-orange-500*/}
          <nav className="max-sm:hidden sm:hidden  md:block stroke">
            <ul className="flex gap-x-4 cursor-pointer  text-lg">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `font-medium tracking-wider text-foreground ${
                      isActive ? "active" : "text-mutedForeground"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `font-medium tracking-wider text-foreground ${
                      isActive ? "active" : "text-mutedForeground"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `font-medium tracking-wider text-foreground ${
                      isActive ? "active" : "text-mutedForeground"
                    }`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `font-medium tracking-wider text-foreground ${
                      isActive ? "active" : "text-mutedForeground"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="max-sm:hidden sm:hidden md:block">
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
              <button onClick={toggleDarkMode} className=" ">
                {!darkMode ? (
                  <RiMoonClearFill
                    className="w-5 h-5  "
                    style={{ color: "var(--foreground)" }}
                  />
                ) : (
                  <FiSun
                    className="w-5 h-5 max-sm:block"
                    style={{ color: "var(--foreground)" }}
                  />
                )}
              </button>
            </div>
          </div>
          {/* Mobile view */}
          <div className="sm:block md:hidden max-sm:flex max-sm:space-x-2 sm:space-x-2 px-8 max-sm:px-2">
            <button onClick={toggleDarkMode} className="">
              {!darkMode ? (
                <RiMoonClearFill
                  className="w-5 h-5  "
                  style={{ color: "var(--foreground)" }}
                />
              ) : (
                <FiSun
                  className="w-5 h-5 max-sm:block"
                  style={{ color: "var(--foreground)" }}
                />
              )}
            </button>

            <button>
              {!showMenu ? (
                <RxHamburgerMenu
                  onClick={handleMenuToggle}
                  className="w-5 h-5 cursor-pointer "
                  style={{ color: "var(--foreground)" }}
                />
              ) : (
                <IoMdClose
                  onClick={handleMenuToggle}
                  className="w-5 h-5 cursor-pointer"
                  style={{ color: "var(--foreground)" }}
                />
              )}
            </button>
          </div>
          {showMenu && (
            <div className=" z-100   bg-primaryForeground w-80 min-h-screen absolute top-[51px] right-0 ">
              <div className="p-6">
                <h1 className="text-foreground text-xl font-bold">Menu</h1>
                <ul className="  gap-x-3 cursor-pointer  text-lg mt-6">
                  <li>
                    <NavLink to="/" className="text-foreground font-medium ">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className="text-foreground  font-medium "
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/projects"
                      className="text-foreground  font-medium "
                    >
                      Projects
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className="text-foreground  font-medium "
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;

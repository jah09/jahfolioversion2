import React from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { SiShadcnui } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import gmail from "@/assets/svg/gmail.svg";
const Footer = () => {
  return (
    <section className="">
      {/* max-sm:bg-red-500 sm:bg-blue-200 md:bg-green-500 lg:bg-orange-500*/}
      <div className="p-3 bg-background shadow shadow-accentForeground w-screen lg:px-[100px]  xl:px-[100px]  flex justify-between  max-sm:px-4  sm:px-4 md:px-4   ">
        <div>
          <h1>Icon here</h1>
        </div>

        <div className="md:flex-col md:flex items-center  max-sm:hidden sm:hidden">
          <h1 className="font-semibold text-foreground">Contact me</h1>
          <p className="tracking-wider flex gap-x-1 items-center text-foreground ">
            <span>
              <FaLinkedin
                className="w-5 h-5 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
                style={{ color: "var(--foreground)" }}
              />
            </span>
            LinkedIn
          </p>
          <p className="tracking-wider flex gap-x-1 items-center text-foreground ">
            <span>
              <img src={gmail} alt="" className="h-5 w-5  " />
            </span>
            Gmail
          </p>
          <div className="text-foreground mt-2 text-sm  ">
            © 2024 - Jafolio. All Rights Reserved
          </div>
        </div>
        <div className="text-foreground  text-sm  max-sm:block md:hidden sm:block">
          © 2024 - Jafolio. All Rights Reserved
        </div>
        {/* <div className="text-foreground ">
          © 2024 - Jafolio. All Rights Reserved
        </div> */}
        <div className="max-sm:hidden sm:hidden  md:block">
          <h1 className="font-semibold text-foreground ">Resources 🚀</h1>
          <div>
            <ul className="cursor-pointer">
              <li className=" hover:underline text-sm text-foreground flex items-center gap-x-2 mt-1">
                <span>
                  <BiLogoTypescript
                    className="w-5 h-5"
                    style={{ color: "var(--foreground)" }}
                  />
                </span>
                React + TS
              </li>
              <li className=" hover:underline text-sm text-foreground flex items-center gap-x-2 mt-1">
                <span>
                  <SiShadcnui
                    className="w-5 h-5"
                    style={{ color: "var(--foreground)" }}
                  />
                </span>
                Shadcn
              </li>

              <li className=" hover:underline text-sm text-foreground flex items-center gap-x-2 mt-1">
                <span>
                  <TbBrandReactNative
                    className="w-5 h-5"
                    style={{ color: "var(--foreground)" }}
                  />
                </span>
                React Icons
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

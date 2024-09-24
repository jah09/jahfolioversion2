import React from "react";

import { Button } from "@/components/ui/button";
import HeroBlob from "@/components/HeroBlob";
import { BsDiscord } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="   min-h-screen   bg-background ">
      <div className=" lg:flex     md:flex items-center lg:px-20">
        {/* Blob */}
        <HeroBlob />
        <div className=" lg:w-1/2 flex flex-col justify-center lg:mb-10 md:w-1/2 lg:mt-10 ">
          {/* Description */}
          <div className="  max-sm:px-5 sm:px-5 max-sm:-mt-10 sm:-mt-10 ">
            <h1 className=" max-sm:text-4xl sm:text-4xl  font-bold tracking-wide text-foreground">
              Hi  👋, I'm Jah!
            </h1>
            <h6 className="text-foreground max-sm:text-lg py-2 ">
              A software engineer with a primary focus on full stack web
              development.
            </h6>
          </div>
          {/* Buttons */}
          <div className="flex space-x-2 py-2 max-sm:px-5 sm:px-5  max-sm:py-0 sm:py-0  ">
            <Button size="lg" className="w-[170px] h-12 tracking-wide">
              Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 tracking-wide  dark:text-primary"
            >
              Download CV
            </Button>
          </div>
          {/* Icons */}
          <div className="py-2 flex space-x-2 max-sm:px-5 sm:px-5 md:mt-3 max-sm:mt-2 sm:mt-2">
            <FaGithub
              className="w-6 h-6 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
              style={{ color: "var(--foreground)" }}
            />
            <FaLinkedin
              className="w-6 h-6 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
              style={{ color: "var(--foreground)" }}
            />
            <BsDiscord
              className="w-6 h-6 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
              style={{ color: "var(--foreground)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

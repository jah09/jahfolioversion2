import React, { useEffect } from "react";
import Skill from "@/pages/About/Skill";
import Certification from "@/pages/About/Certification";
import aboutImageOne from "@/assets/image/aboutImageOne.jpeg";
import aboutImageTwo from "@/assets/image/aboutImageTwo.jpeg";

const About = () => {
  //Hooks
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="bg-background">
      <div className="lg:px-20  min-h-screen">
        <div className="py-20">
          <div className="max-sm:mx-4 sm:mx-4 mx-20 md:flex md:flex-row   max-sm:flex max-sm:flex-col-reverse sm:flex  sm:flex-col-reverse">
            {/* Description */}
            <div className="max-sm:w-full sm:w-full w-1/2 flex flex-col justify-center max-sm:mt-[50px] sm:mt-[50px] md:mt-0">
              <h1 className="text-foreground text-5xl font-medium tracking-wider  ">
                So, who am I?
              </h1>
              <p className="text-foreground text-lg py-2 tracking-wider">
                I'm Jeahael, but you can call me "Jah". I'm a software engineer
                with a primary focus on web development, though I can also work
                with mobile development. I'm passionate about exploring new
                things daily and staying up to date with the latest technology.
                I enjoy sharing my knowledge with others and am actively
                involved in tech communities. I strongly believe that{" "}
                <span className="font-semibold underline underline-offset-4 ">
                  "The core of beauty is simplicity."
                </span>
              </p>
            </div>

            {/* Image */}
            <div className="max-sm:w-full md:w-full flex justify-center ">
              <div className="relative group lg:ml-10">
                <div className="rounded-md bg-accentForeground p-0.5 origin-top rotate-[4deg] hover:skew-y-2  z-20 relative  group-hover:z-10 transition-all duration-300 ease-in-out ">
                  <img
                    src={aboutImageOne}
                    width={300}
                    alt="about me image "
                    className="rounded-md "
                  />
                </div>
                <div className="rounded-md bg-accentForeground  p-0.5 hover:skew-y-2 z-10 absolute top-0 origin-top-left -rotate-[3deg] left-0  group-hover:z-20 group-hover:-rotate-[7deg] transition-all duration-300 ease-in-out">
                  <img
                    src={aboutImageTwo}
                    width={300}
                    alt="about me image "
                    className="rounded-md "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

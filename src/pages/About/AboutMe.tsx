import React from "react";
import Skill from "@/pages/About/Skill";
import aboutImageOne from "@/assets/image/aboutImageOne.jpeg";
import aboutImageTwo from "@/assets/image/aboutImageTwo.jpeg";

const About = () => {
  return (
    <section className=" bg-background   ">
      <div className=" lg:px-20  min-h-screen ">
        <div className="py-20">
          {/* <div className="  flex  items-center px-8">
            <hr className="  bg-red-100  w-20 border-2" />
            <h1 className="text-center text-foreground text-4xl">
              Wanna know about me?
            </h1>
            <hr className="  bg-red-100  w-64 border-2" />
          </div> */}

          <div className="flex mx-20 ">
            <div className=" w-1/2 flex flex-col justify-center  ">
              <h1 className="text-foreground text-5xl font-medium tracking-wider">
                So, who am I?
              </h1>
              <p className="text-foreground text-lg py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                quos sunt quam, adipisci eaque voluptatum animi laudantium
                magnam nemo commodi laborum fuga sequi facere alias minus
                assumenda amet rerum exercitationem.
              </p>
              {/* <p className="text-foreground text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                quos sunt quam, adipisci eaque voluptatum animi laudantium
                magnam nemo commodi laborum fuga sequi facere alias minus
                assumenda amet rerum exercitationem.
              </p> */}
            </div>
            <div className=" w-1/2 flex justify-center ml-20 ">
              <div className="relative group">
                <div className="rounded-md bg-accentForeground p-0.5 origin-top rotate-[5deg] hover:skew-y-2  z-20 relative  group-hover:z-10 transition-all duration-300 ease-in-out">
                  <img
                    src={aboutImageOne}
                    width={300}
                    alt="about me image "
                    className="  rounded-md "
                  />
                </div>
                <div className="rounded-md bg-accentForeground  p-0.5 hover:skew-y-2 z-10 absolute top-0 origin-top-left -rotate-[3deg] left-0  group-hover:z-20 group-hover:-rotate-[7deg] transition-all duration-300 ease-in-out">
                  <img
                    src={aboutImageTwo}
                    width={300}
                    alt="about me image "
                    className="  rounded-md "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Skill />
    </section>
  );
};

export default About;

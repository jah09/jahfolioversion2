import React from "react";
import AboutMeImage from "@/assets/image/AboutMeImage.png";
const About = () => {
  return (
    <section className="bg-blue-900 min-h-screen">
      <div className=" lg:px-20">
        <div className="">
          <div className=" flex w-screen bg-red-500 ">
            <hr className="h-2 my-8 bg-red-900 border-0  " />

            <h1 className="text-foreground text-4xl">Wanna know about me?</h1>
            <hr className="h-2 my-8 bg-red-700 border-0  " />
          </div>
          <div className="flex mt-10">
            <div className=" w-1/2 flex justify-center">
              <img
                src={AboutMeImage}
                alt="about me image "
                className="h-80 w-80 transform scale-x-[-1]"
              />
            </div>
            <div className="  w-1/2 flex items-center">
              <p className="text-foreground text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                quos sunt quam, adipisci eaque voluptatum animi laudantium
                magnam nemo commodi laborum fuga sequi facere alias minus
                assumenda amet rerum exercitationem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

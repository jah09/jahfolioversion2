import React from "react";

const Projects = () => {
  return (
    <section className=" bg-background">
      <div className="lg:px-20  min-h-screen">
        <div className="py-[70px]">
          <div className="flex flex-row mx-20">
            <div className=" w-1/2 bg-red-800">1</div>
            <div className=" w-1/2 bg-blue-800">
              <h1 className="text-foreground text-[42px] font-medium tracking-wider  ">
                Projects
              </h1>
              <p className="text-foreground text-lg py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis modi, nobis voluptatem delectus distinctio qui odio
                sunt ut! Itaque, suscipit!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

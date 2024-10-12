import React from "react";
import { technologies } from "@/data/AboutMe/Skill/technologies";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const Skill = () => {
  //handle event
  const handleClickSocialMedia = (item: any) => {
    window.open(item.techLink);
  };
  return (
    <section className=" bg-background">
      <div className="lg:px-20  min-h-screen">
        <div className="py-[70px]">
          <div className="flex flex-row mx-20   ">
            <div className=" w-1/2    ">
              <div className="w-full  grid grid-cols-4 gap-3 p-3">
                {technologies &&
                  technologies.map((item, index) => (
                    <Card
                      className="flex justify-center items-center flex-col  cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 duration-300 group h-[70px] hover:bg-primaryForeground bg-background"
                      key={index}
                    >
                      <CardContent className="p-1 ">
                        <item.icon
                          className="h-8 w-8 text-foreground "
                          onClick={() => handleClickSocialMedia(item)}
                        />
                      </CardContent>
                      <CardFooter className="text-foreground text-xs  p-0 hidden group-hover:inline   group-hover:scale-110 duration-300 transition ease-in-out delay-150">
                        {item.techName}
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </div>
            <div className=" w-1/2 flex justify-center  flex-col pl-6">
              <h1 className="text-foreground text-[42px] font-medium tracking-wider  ">
                Technologies I used
              </h1>
              <p className="text-foreground text-lg py-4">
                These are the technologies I've used throughout my journey from
                an aspiring IT professional to a professional, listed in order
                of most recent use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;

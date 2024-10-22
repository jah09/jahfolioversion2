import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { FaStar } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import projectsData from "@/data/Project/projects";

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const ref = useRef<HTMLDivElement>(null);
  const [passedProjectsData, setPassedProjectData] =
    useState<object>(projectsData);
  const tag = [
    {
      name: "All",
      tag: "all",
    },
    {
      name: "ReactJs",
      tag: "reactjs",
    },
    {
      name: "Laravel",
      tag: "laravel",
    },
    {
      name: "React Native",
      tag: "reactnative",
    },
    {
      name: "VueJs",
      tag: "vuejs",
    },
    {
      name: "Firebase",
      tag: "firebase",
    },
    {
      name: "MySQL",
      tag: "mysql",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setSelectedTag(""); // Deselect the tag when clicking outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);
  useEffect(() => {
    if (selectedTag === "all") {
      setPassedProjectData(projectsData);
    }
    else if (selectedTag) {
       const filteredData = projectsData.filter((data) =>
        data.techStack?.some((tech) => tech.tag === selectedTag)
      );
        console.log("filteredData", filteredData);
      setPassedProjectData(filteredData);
    }
  }, [selectedTag]);
 
  return (
    <section className=" bg-background" ref={ref}>
      <div className="lg:px-20 min-h-screen">
        <div className="py-[60px]">
          <div className="">
            <h1 className="text-foreground text-[42px] font-medium tracking-wider  ">
              Projects
            </h1>
          </div>

          <div className="">
            <ul className="flex space-x-3 mt-2">
              {tag.map((item, index) => {
                return (
                  <li
                    className={`${
                      selectedTag === item?.tag
                        ? "bg-accent border border-accent  "
                        : "border border-accent "
                    } text-foreground px-5 py-1 rounded-full cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 hover:bg-accent`}
                    key={index}
                    onClick={() => {
                      setSelectedTag(item?.tag);
                    }}
                  >
                    {item.name}
                  </li>
                );
              })}
            </ul>
            {/* Projects here */}
            <div className="lg:grid lg:grid-cols-3 gap-4">
              {passedProjectsData &&
                passedProjectsData.map((item: any, index: number) => (
                  <Card
                    className="w-96 h-auto mt-4 bg-background hover:bg-accent transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-300"
                    key={index}
                  >
                    <CardContent className="rounded-xl mx-2  p-0">
                      <img
                        src={item?.image}
                        alt=""
                        className="rounded-xl bg-none "
                      />
                    </CardContent>
                    <CardContent className="py-4 flex items-center justify-between">
                      <h1 className="text-xl">{item?.name}</h1>
                      {item?.isImportant && (
                        <FaStar className="w-6 h-6 text-yellow-400" />
                      )}
                    </CardContent>
                    <CardFooter className="flex justify-between py-4 mt-4">
                      <div className="flex space-x-2">
                        {item?.techStack?.map((tech, techIndex) =>
                          tech.icon ? (
                            <div
                              key={techIndex} 
                              
                            >
                              <tech.icon className="h-5 w-5 text-foreground" />
                            </div>
                          ) : null
                        )}
                      </div>
                      <button
                        className="align-middle select-none font-sans font-bold text-center uppercase disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-1.5 px-2 rounded-lg bg-primaryForeground  shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-300"
                        type="button"
                      >
                        <span className="text-foreground tracking-wide">
                          Read More
                        </span>
                        <IoIosArrowRoundForward className="w-8 h-8 text-foreground" />
                      </button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

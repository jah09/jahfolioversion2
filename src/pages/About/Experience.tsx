import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { experiences } from "@/data/AboutMe/Experience/experience";
const Experience = () => {
  return (
    <section className="lg:px-20 min-h-screen bg-background">
      <div className="py-[50px] ">
        {/* Web View */}
        <div className="md:flex md:flex-col-reverse lg:flex-row mx-10 max-sm:hidden sm:hidden">
          <div className="lg:w-3/5 md:w-full">
            <div className="w-full max-w-6xl mx-auto">
              <div className="flex flex-col justify-center ">
                <div className="w-full max-w-3xl mx-auto bg-red-900">
                  <div className="">
                    <div className="relative pl-[155px] mb-2 md:pl-[115px]">
                      <div className="font-medium text-foreground mb-1 sm:mb-0">
                        The history
                      </div>
                    </div>
                    {/* First item */}
                    {experiences &&
                      experiences.map((item, index) => (
                        <div
                          className=" relative before:absolute before:inset-0   before:-translate-x-px md:before:ml-[7.5rem] md:before:translate-x-0   before:w-0.5 before:bg-muted h-full before:from-transparent before:via-accent "
                          key={index}
                        >
                          <div className="relative">
                            <div className="md:flex items-start md:space-x-4 mb-3">
                              <div className="flex items-center justify-between w-[140px]">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent shadow md:order-1 ">
                                  {item?.academics?.schoolName ? (
                                    <GiGraduateCap className="h-6 w-6 text-foreground" />
                                  ) : (
                                    <FaLaptopCode className="h-6 w-6 text-foreground" />
                                  )}
                                </div>

                                <div className="rounded-full bg-muted px-1">
                                  <time className="text-sm  text-mutedForeground  ">
                                    {item?.date || item?.academics?.date}
                                  </time>
                                </div>
                              </div>
                              <div className="flex flex-wrap gap-4">
                                <div
                                  className={`bg-background p-4 border border-accent rounded-lg text-foreground shadow-md w-[28rem] hover:bg-secondary group  ${
                                    !item?.academics
                                      ? "flex flex-col  min-h-[220px]"
                                      : ""
                                  } `}
                                >
                                  <h1 className="text-foreground text-lg font-medium tracking-wide">
                                    {item?.jobTitle || item?.academics?.course}
                                  </h1>
                                  <p className="text-sm text-foreground font-light">
                                    {item?.company}
                                  </p>
                                  <p
                                    className={`${
                                      !item?.academics ? "mt-1" : "mt-3"
                                    }text-foreground font-light`}
                                  >
                                    {item?.jobDescription ||
                                      item?.academics?.schoolName}
                                  </p>
                                  <p className="mt-1  text-foreground font-light">
                                    {item?.academics?.address}
                                  </p>
                                  <div
                                    className={`flex gap-x-2 ${
                                      item?.company === "CLI" ||
                                      item?.company === "Willies English"
                                        ? "mt-[50px]"
                                        : "mt-10"
                                    }`}
                                  >
                                    {item?.techStack?.map((tech, index) => (
                                      <div
                                        key={index}
                                        className="bg-accent p-1 rounded-sm group-hover:bg-background"
                                      >
                                        <tech.icon
                                          key={index}
                                          className="h-5 w-5 text-foreground "
                                        />
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-2/5  p-2 flex flex-col justify-center ml-4">
            <h1 className="text-foreground text-[42px] font-medium tracking-wider   ">
              Experience
            </h1>
            <p className="text-foreground text-lg  tracking-wide">
              This timeline shows my journey from the start of my studies,
              through my internship, to landing my first job. It highlights
              important milestones and achievements, showing how I've grown and
              developed in both my studies and career.
            </p>
          </div>
        </div>

        {/* Mobile View */}
        <div className="max-sm:block md:hidden">
          <div className="flex flex-col justify-center mx-4">
            <h1 className="text-foreground text-[42px] font-medium tracking-wider   ">
              Experience
            </h1>
            <p className="text-foreground text-lg  tracking-wide">
              This timeline shows my journey from the start of my studies,
              through my internship, to landing my first job. It highlights
              important milestones and achievements, showing how I've grown and
              developed in both my studies and career.
            </p>
          </div>
          <div className="mt-10 sm:flex sm:justify-center">
            <div className="mx-4 mb-2">
              <div className="font-medium text-foreground mb-1 sm:mb-0 sm:bg-red-900">
                The history
              </div>

              {experiences &&
                experiences.map((item, index) => (
                  <div className="relative" key={index}>
                    <div className="md:flex items-start md:space-x-4 mb-3 mt-4">
                      <div className="rounded-full bg-muted px-1 w-24 ">
                        <time className="text-sm  text-mutedForeground  ">
                          {item?.date || item?.academics?.date}
                        </time>
                      </div>
                      <div className="flex items-center justify-end w-full"></div>

                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted shadow md:order-1  left-4 top-6 absolute mt-4">
                          {item?.academics?.schoolName ? (
                            <GiGraduateCap className="h-6 w-6 text-foreground" />
                          ) : (
                            <FaLaptopCode className="h-6 w-6 text-foreground" />
                          )}
                        </div>
                        <div
                          className={`bg-500-200 px-4 py-5 border border-accent rounded-lg text-foreground shadow-md w-[28rem] hover:bg-secondary group  ${
                            !item?.academics
                              ? "flex flex-col  min-h-[220px]"
                              : ""
                          } mt-10`}
                        >
                          <h1 className="text-foreground text-lg font-medium tracking-wide">
                            {item?.jobTitle || item?.academics?.course}
                          </h1>
                          <p className="text-sm text-foreground font-light">
                            {item?.company}
                          </p>
                          <p
                            className={`${
                              !item?.academics ? "mt-1" : "mt-3"
                            }text-foreground font-light`}
                          >
                            {item?.jobDescription ||
                              item?.academics?.schoolName}
                          </p>
                          <p className="mt-1  text-foreground font-light">
                            {item?.academics?.address}
                          </p>
                          <div
                            className={`flex gap-x-2 ${
                              item?.company === "CLI" ||
                              item?.company === "Willies English"
                                ? "mt-[50px]"
                                : "mt-10"
                            }`}
                          >
                            {item?.techStack?.map((tech, index) => (
                              <div
                                key={index}
                                className="bg-accent p-1 rounded-sm group-hover:bg-background"
                              >
                                <tech.icon
                                  key={index}
                                  className="h-5 w-5 text-foreground "
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

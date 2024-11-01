import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Card, CardContent } from "@/components/ui/card";
import project_tubig from "@/assets/image/project_tubig.png";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Project } from "@/data/Project/projects";
import projectsData from "@/data/Project/projects";
import { FaStar } from "react-icons/fa";

const ProjectDetails = () => {
  //States
  const projectId = useParams()?.id;
  const [allProjectsData, setAllProjectsData] = useState<Project[]>();
  const [githubRepoLink, setGithubRepoLink] = useState<string>("");
  const [demoLink, setDemoLink] = useState<string>("");

  //Hooks
  useEffect(() => {
    if (projectId) {
      const filteredProject = projectsData.filter((data: Project) => {
        return data.id === projectId;
      });
      setAllProjectsData(filteredProject);
    }
  }, [projectId]);

  useEffect(() => {
    if (allProjectsData) {
      setGithubRepoLink(allProjectsData[0].githubRepo);
      setDemoLink(allProjectsData[0].liveDemo);
    }
  }, [allProjectsData]);

  //Event Handler
  const handleClickButton = (buttonType: string, path: string) => {
    if (buttonType === "demo") {
      window.open(path, "_blank", "noreferrer");
    } else {
      window.open(path, "_blank", "noreferrer");
    }
  };

  return (
    <section className=" bg-background">
      <div className="lg:px-20 min-h-screen">
        <div className="py-[40px]">
          <div className="">
            <Link to="/projects">
              <button className="flex items-center text-foreground ">
                <IoIosArrowRoundBack className="w-8 h-8 text-foreground mr-1" />
                Go back
              </button>
            </Link>
          </div>
          <div className="flex ">
            {/* Project Image */}
            <div>
              <Card className=" mt-4 flex min-h-auto bg-background">
                {/* Small Card Project Image */}
                <div className="p-1 mr-2">
                  {allProjectsData &&
                    allProjectsData[0]?.images
                      ?.slice(1)
                      .map((imageItem, imageIndex) => (
                        <Card className="bg-background mt-0.5" key={imageIndex}>
                          <CardContent className="rounded-none py-2 ">
                            <img
                              src={imageItem.imageUrl}
                              alt=" "
                              className="w-60 object-fill"
                            />
                          </CardContent>
                        </Card>
                      ))}
                </div>
                {/* Main Card Project Image */}
                <div
                  className={` w-full flex items-center relative ${
                    allProjectsData && allProjectsData[0]?.tag === "web"
                      ? "p-4"
                      : ""
                  }`}
                >
                  {allProjectsData &&
                    allProjectsData[0]?.images &&
                    allProjectsData[0].images.length > 0 && (
                      <div>
                        <img
                          src={allProjectsData[0].images[0].imageUrl} // Accessing only the first image
                          alt="Project First Image"
                        />
                      </div>
                    )}
                  <div className="absolute top-0 right-0 p-6">
                    {allProjectsData && allProjectsData[0]?.isImportant && (
                      <FaStar className="w-6 h-6 text-yellow-400" />
                    )}
                  </div>
                </div>
              </Card>
            </div>

            {/* Project description */}
            <div className="w-[49%] mt-4 h-[500px]  px-8 overflow-y-auto scrollbar">
              <div className=" px-2 ">
                <h1 className="font-medium text-foreground text-3xl">
                  {allProjectsData && allProjectsData[0].name}
                </h1>
                <p className="text-foreground text-lg py-1">
                  Description:{" "}
                  {allProjectsData && allProjectsData[0].description}
                </p>
                <div className="mt-4">
                  <ul className="list-disc list-inside truncate">
                    {allProjectsData &&
                      Array.isArray(allProjectsData[0]?.features) &&
                      allProjectsData[0].features.map((item, index) => (
                        <li key={index} className="text-foreground">
                          {item.featureDescription}
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="mt-10 flex space-x-2">
                  {allProjectsData &&
                    allProjectsData[0]?.techStack?.map((tech, techIndex) => (
                      <div
                        className=" text-foreground px-5 py-1 rounded-full cursor-pointer bg-accent"
                        key={techIndex}
                      >
                        <p className={``}>{tech.techStackName}</p>
                      </div>
                    ))}
                </div>
                {/* Buttons here */}
                <div className="mt-6">
                  <Button
                    className="w-full mt-2 h-12 flex gap-x-4"
                    size="lg"
                    variant="default"
                    onClick={() => handleClickButton("demo", demoLink)}
                  >
                    <span className="px-1">View Demo</span>
                    <IoIosArrowRoundForward
                      className="w-10 h-10 cursor-pointer  -rotate-45 ml-1 "
                      style={{ color: "var(--secondary)" }}
                    />
                  </Button>
                  <Button
                    className="w-full mt-2 text-accentForeground h-12 flex gap-x-4"
                    size="lg"
                    variant="outline"
                    onClick={() => handleClickButton("github", githubRepoLink)}
                  >
                    <span className="px-1">
                      <p className="mr-3">View Github</p>
                    </span>
                    <FaGithub
                      className="w-6 h-6 cursor-pointer  "
                      style={{ color: "var(--foreground)" }}
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;

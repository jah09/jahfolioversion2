import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Card, CardContent } from "@/components/ui/card";
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
  const [mainImageUrl, setMainImageUrl] = useState("");

  //Hooks
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /**
   * First load of the component, the main image is set to the first image(index 0) of the project
   */
  useEffect(() => {
    if (allProjectsData && allProjectsData[0]?.images?.[0]?.imageUrl) {
      setMainImageUrl(allProjectsData[0].images[0].imageUrl);
    }
  }, [allProjectsData]);

  /**
   * When the projectId changes, the component will fetch the data from the database
   */
  useEffect(() => {
    if (projectId) {
      const filteredProject = projectsData.filter((data: Project) => {
        return data.id === projectId;
      });
      setAllProjectsData(filteredProject);
    }
  }, [projectId]);

  /**
   * When the component is loaded, the githubRepoLink and demoLink will be set to the first project's data
   */
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
  
  /**
   * When the image is clicked, the mainImageUrl will be set to the clicked image
   */
  const handleClickImage = (imageUrl: string) => {
    console.log(imageUrl);
    setMainImageUrl(imageUrl);
  };

  return (
    <section className="min-h-[80vh] bg-green-900">
      <div className="py-[40px] lg:px-20">
        <div>
          <Link to="/projects">
            <button className="flex items-center text-foreground ">
              <IoIosArrowRoundBack className="w-8 h-8 text-foreground mr-1" />
              Go back
            </button>
          </Link>
        </div>
        <div className="md:flex ">
          {/* Project Image */}
          <div className="bg-red-900">
            <Card className=" mt-4 flex h-96 md:h-auto bg-background">
              {/* Small Card Project Image */}
              <div
                className={`hidden md:block p-1 mr-2 ${
                  allProjectsData && allProjectsData[0]?.images?.length === 5
                    ? ""
                    : " overflow-y-auto scrollbar"
                } h-[505px] ${
                  allProjectsData && allProjectsData[0]?.images?.length === 4
                    ? "flex flex-col justify-center"
                    : ""
                }`}
              >
                {allProjectsData &&
                  allProjectsData[0]?.images
                    ?.slice(1)
                    .map((imageItem, imageIndex) => (
                      <Card
                        className={`bg-background ${
                          allProjectsData[0]?.images?.length === 4
                            ? "mt-2"
                            : "mt-[6px]"
                        } `}
                        key={imageIndex}
                        onClick={() => handleClickImage(imageItem.imageUrl)}
                      >
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
                className={`w-full flex items-center justify-center relative ${
                  allProjectsData && allProjectsData[0]?.tag === "web"
                    ? "p-4"
                    : ""
                }`}
              >
                {mainImageUrl && (
                  <div>
                    <img
                      src={mainImageUrl}
                      alt="Main Project Image"
                      className=""
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
          <div className="md:w-[49%] mt-4 md:h-[500px] h-full px-8 scrollbar bg-blue-900">
            <div className=" px-2 ">
              <h1 className="font-medium text-foreground text-3xl">
                {allProjectsData && allProjectsData[0].name}
              </h1>
              <p className="text-foreground text-lg py-1">
                Description: {allProjectsData && allProjectsData[0].description}
              </p>
              <div className="mt-4">
                <ul className="list-disc list-inside truncate">
                  {allProjectsData &&
                    Array.isArray(allProjectsData[0]?.features) &&
                    allProjectsData[0].features.map((item, index) => (
                      <li
                        key={index}
                        className="text-foreground bg-red-900"
                      >
                        {item.featureDescription}
                      </li>
                    ))}
                </ul>
              </div>
              <div className="mt-10 flex space-x-2 flex-wrap gap-2 items-center justify-center">
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
              <div className="md:mt-4 mt-6 bg-red-900">
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
    </section>
  );
};

export default ProjectDetails;

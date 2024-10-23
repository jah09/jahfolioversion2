import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import project_tubig from "@/assets/image/project_tubig.png";

const ProjectDetails = () => {
  return (
    <section className=" bg-background">
      <div className="lg:px-20 min-h-screen">
        <div className="py-[60px]">
          <div className="">
            <Link to="/projects">
              <button className="flex items-center text-foreground ">
                <IoIosArrowRoundBack className="w-8 h-8 text-foreground mr-1" />
                Go back
              </button>
            </Link>
          </div>
          <div className="flex">
            {/* Project Image */}
            <Card className="w-3/5 mt-4 flex min-h-auto bg-background ">
              {/* Small Card Project Image */}
              <div className="w-1/5 p-1 mr-2">
                <Card className="bg-blue-300 ">
                  <CardContent className="rounded-md bg-red-200  h-24  ">
                    <img src={project_tubig} alt="h-[50rem] w-20" />
                  </CardContent>
                </Card>
              </div>
              {/* Main Card Project Image */}

              <div className=" w-full ">
                <p>main</p>
              </div>
            </Card>
            <div className="w-2/5 bg-blue-900  mt-4 h-auto">2</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;

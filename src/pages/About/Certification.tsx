import React from "react";
import bayan from "@/assets/certifications/bayan.jpg";
import softwareengineering from "@/assets/certifications/softwareengineering.jpg";
import cloudcomputing from "@/assets/certifications/cloudcomputing.jpg";
import zuitt from "@/assets/certifications/zuitt.jpg";
import python from "@/assets/certifications/python.jpg";
import datasciencepython from "@/assets/certifications/datasciepython.jpg";
import gdsc from "@/assets/certifications/gdsc.jpg";
import membershipgdsc from "@/assets/certifications/membershipgdsc.jpg";
import tensorflow from "@/assets/certifications/tensorflow.jpg";
import wordpress from "@/assets/certifications/wordpress.jpg";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const Certification = () => {
  return (
    <section>
      <div className="lg:px-20 min-h-screen bg-background w-full">
        <div className="py-[50px] ">
          {/* Web View */}
          <div className="md:flex md:flex-row  mx-10 max-sm:hidden sm:hidden">
            <div className="w-2/5 flex justify-center  flex-col  mx-4">
              <h1 className="text-foreground md:text-[40px] lg:text-[50px] font-medium tracking-wider">
                Certifications
              </h1>
              <p className="text-foreground text-lg  ">
                During my upskilling journey, I earned several certifications
                that helped me understand how things work in practice. I am
                actively seeking new certifications to further expand my
                knowledge and skills, with the goal of applying them to
                real-world scenarios.
              </p>
            </div>
            <div className="w-3/5 flex items-center justify-center">
              <div className=" h-[500px] overflow-y-auto scrollbar  px-2 ">
                {/* First cert  */}
                <Card className="bg-background group relative overflow-hidden p-0 rouded-lg h-72 w-[25rem]  ">
                  <CardContent className="p-0 h-full  ">
                    <img
                      src={bayan}
                      className="animate-fade-in block h-full w-full  rounded-lg scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                      alt=""
                    />
                  </CardContent>
                  <CardFooter className="absolute bottom-0 left-0 w-full flex flex-col items-center   p-1 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0    backdrop-blur-md bg-muted/100 mx-auto">
                    <h1 className="text-2xl font-bold text-[#1e293b] rounded-b-lg">
                      JavaScript Programming
                    </h1>
                    <h1 className="text-sm font-light text-[#1e293b]">
                      Certificate of completion
                    </h1>
                  </CardFooter>
                </Card>

                {/* Second cert  */}
                <Card className="bg-background group relative overflow-hidden p-0 rouded-lg h-72 w-[25rem] mt-2  ">
                  <CardContent className="p-0 h-full  ">
                    <img
                      src={softwareengineering}
                      className="animate-fade-in block h-full w-full  rounded-lg scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                      alt=""
                    />
                  </CardContent>
                  <CardFooter className="absolute bottom-0 left-0 w-full flex flex-col items-center   p-1 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0    backdrop-blur-md bg-muted/100 mx-auto">
                    <h1 className="text-2xl font-bold text-[#1e293b] rounded-b-lg">
                      Software Engineering
                    </h1>
                    <h1 className="text-sm font-light text-[#1e293b]">
                      Certificate of completion
                    </h1>
                  </CardFooter>
                </Card>

                {/* Third cert  */}
                <Card className="bg-background group relative overflow-hidden p-0 rouded-lg h-72 w-[25rem] mt-2  ">
                  <CardContent className="p-0 h-full  ">
                    <img
                      src={cloudcomputing}
                      className="animate-fade-in block h-full w-full  rounded-lg scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                      alt=""
                    />
                  </CardContent>
                  <CardFooter className="absolute bottom-0 left-0 w-full flex flex-col items-center   p-1 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0    backdrop-blur-md bg-muted/100 mx-auto">
                    <h1 className="text-2xl font-bold text-[#1e293b]   rounded-b-lg">
                      Cloud Computing
                    </h1>
                    <h1 className="text-sm font-light text-[#1e293b]  ">
                      Certificate of completion
                    </h1>
                  </CardFooter>
                </Card>

                {/* Fourth cert  */}
                <Card className="bg-background group relative overflow-hidden p-0 rouded-lg h-72 w-[25rem] mt-2  ">
                  <CardContent className="p-0 h-full  ">
                    <img
                      src={python}
                      className="animate-fade-in block h-full w-full  rounded-lg scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                      alt=""
                    />
                  </CardContent>
                  <CardFooter className="absolute bottom-0 left-0 w-full flex flex-col items-center   p-1 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0    backdrop-blur-md bg-muted/100 mx-auto">
                    <h1 className="text-2xl font-bold text-[#1e293b]   rounded-b-lg">
                      Python
                    </h1>
                    <h1 className="text-sm font-light text-[#1e293b]  ">
                      Certificate of completion
                    </h1>
                  </CardFooter>
                </Card>

                {/* Fifth cert  */}
                <Card className="bg-background group relative overflow-hidden p-0 rouded-lg h-72 w-[25rem] mt-2  ">
                  <CardContent className="p-0 h-full  ">
                    <img
                      src={datasciencepython}
                      className="animate-fade-in block h-full w-full  rounded-lg scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                      alt=""
                    />
                  </CardContent>
                  <CardFooter className="absolute bottom-0 left-0 w-full flex flex-col items-center   p-1 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0    backdrop-blur-md bg-muted/100 mx-auto">
                    <h1 className="text-2xl font-bold text-[#1e293b] rounded-b-lg">
                      Data science with python
                    </h1>
                    <h1 className="text-sm font-light text-[#1e293b] ">
                      Certificate of completion
                    </h1>
                  </CardFooter>
                </Card>

                {/* Sixth cert  */}
                <Card className="bg-background group relative overflow-hidden p-0 rouded-lg h-72 w-[25rem] mt-2  ">
                  <CardContent className="p-0 h-full  ">
                    <img
                      src={gdsc}
                      className="animate-fade-in block h-full w-full  rounded-lg scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                      alt=""
                    />
                  </CardContent>
                  <CardFooter className="absolute bottom-0 left-0 w-full flex flex-col items-center   p-1 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0    backdrop-blur-md bg-muted/100 mx-auto">
                    <h1 className="text-2xl font-bold text-[#1e293b]   rounded-b-lg">
                      GDSC
                    </h1>
                    <h1 className="text-sm font-light text-[#1e293b]  ">
                      Certificate of participation
                    </h1>
                  </CardFooter>
                </Card>

                {/* Seventh cert  */}
                <Card className="bg-background group relative overflow-hidden p-0 rouded-lg h-72 w-[25rem] mt-2  ">
                  <CardContent className="p-0 h-full  ">
                    <img
                      src={membershipgdsc}
                      className="animate-fade-in block h-full w-full  rounded-lg scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                      alt=""
                    />
                  </CardContent>
                  <CardFooter className="absolute bottom-0 left-0 w-full flex flex-col items-center   p-1 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0    backdrop-blur-md bg-muted/100 mx-auto">
                    <h1 className="text-2xl font-bold text-[#1e293b]   rounded-b-lg">
                      GDSC
                    </h1>
                    <h1 className="text-sm font-light text-[#1e293b]  ">
                      Certificate of membership
                    </h1>
                  </CardFooter>
                </Card>

                {/* Eight cert  */}
                <Card className="bg-background group relative overflow-hidden p-0 rouded-lg h-72 w-[25rem] mt-2  ">
                  <CardContent className="p-0 h-full  ">
                    <img
                      src={tensorflow}
                      className="animate-fade-in block h-full w-full  rounded-lg scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                      alt=""
                    />
                  </CardContent>
                  <CardFooter className="absolute bottom-0 left-0 w-full flex flex-col items-center   p-1 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0    backdrop-blur-md bg-muted/100 mx-auto">
                    <h1 className="text-2xl font-bold text-[#1e293b]   rounded-b-lg">
                      Tensorflow
                    </h1>
                    <h1 className="text-sm font-light text-[#1e293b]  ">
                      Certificate of participation
                    </h1>
                  </CardFooter>
                </Card>

                {/* Nine cert  */}
                <Card className="bg-background group relative overflow-hidden p-0 rouded-lg h-72 w-[25rem] mt-2  ">
                  <CardContent className="p-0 h-full  ">
                    <img
                      src={zuitt}
                      className="animate-fade-in block h-full w-full  rounded-lg scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                      alt=""
                    />
                  </CardContent>
                  <CardFooter className="absolute bottom-0 left-0 w-full flex flex-col items-center   p-1 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0    backdrop-blur-md bg-muted/100 mx-auto">
                    <h1 className="text-2xl font-bold text-[#1e293b]   rounded-b-lg">
                      Zuitt
                    </h1>
                    <h1 className="text-sm font-light text-[#1e293b]  ">
                      Certificate of participation
                    </h1>
                  </CardFooter>
                </Card>

                {/* 10th cert  */}
                <Card className="bg-background group relative overflow-hidden p-0 rouded-lg h-72 w-[25rem] mt-2  ">
                  <CardContent className="p-0 h-full  ">
                    <img
                      src={wordpress}
                      className="animate-fade-in block h-full w-full  rounded-lg scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                      alt=""
                    />
                  </CardContent>
                  <CardFooter className="absolute bottom-0 left-0 w-full flex flex-col items-center   p-1 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0    backdrop-blur-md bg-muted/100 mx-auto">
                    <h1 className="text-2xl font-bold text-[#1e293b]   rounded-b-lg">
                      Wordpress
                    </h1>
                    <h1 className="text-sm font-light text-[#1e293b]  ">
                      Certificate of completion
                    </h1>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden">
            <div className=" flex justify-center flex-col mx-4">
              <h1 className="text-foreground text-[42px] font-medium tracking-wider  ">
                Certifications
              </h1>
              <p className="text-foreground text-lg  ">
                During my upskilling journey, I earned several certifications
                that helped me understand how things work in practice. I am
                actively seeking new certifications to further expand my
                knowledge and skills, with the goal of applying them to
                real-world scenarios.
              </p>
            </div>

            <div className="py-4 flex flex-col items-center">
              {/* First cert  */}
              <Card className="bg-background group relative overflow-hidden p-0 rouded-lg h-72 w-[22rem]   ">
                <CardContent className="p-0 h-full  ">
                  <img
                    src={bayan}
                    className="animate-fade-in block h-full w-full  rounded-lg scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                    alt=""
                  />
                </CardContent>
                <CardFooter className="absolute bottom-0 left-0 w-full flex flex-col items-center   p-1 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0    backdrop-blur-md bg-muted/100 mx-auto">
                  <h1 className="text-2xl font-bold text-[#1e293b] rounded-b-lg">
                    JavaScript Programming
                  </h1>
                  <h1 className="text-sm font-light text-[#1e293b]">
                    Certificate of completion
                  </h1>
                </CardFooter>
              </Card>
              {/* Second cert  */}
              <Card className="bg-background group relative overflow-hidden p-0 rouded-lg h-72 w-[22rem] mt-2  ">
                <CardContent className="p-0 h-full  ">
                  <img
                    src={softwareengineering}
                    className="animate-fade-in block h-full w-full  rounded-lg scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                    alt=""
                  />
                </CardContent>
                <CardFooter className="absolute bottom-0 left-0 w-full flex flex-col items-center   p-1 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0    backdrop-blur-md bg-muted/100 mx-auto">
                  <h1 className="text-2xl font-bold text-[#1e293b] rounded-b-lg">
                    Software Engineering
                  </h1>
                  <h1 className="text-sm font-light text-[#1e293b]">
                    Certificate of completion
                  </h1>
                </CardFooter>
              </Card>
              {/* Third cert  */}
              <Card className="bg-background group relative overflow-hidden p-0 rouded-lg h-72 w-[22rem] mt-2  ">
                <CardContent className="p-0 h-full  ">
                  <img
                    src={cloudcomputing}
                    className="animate-fade-in block h-full w-full  rounded-lg scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                    alt=""
                  />
                </CardContent>
                <CardFooter className="absolute bottom-0 left-0 w-full flex flex-col items-center   p-1 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0    backdrop-blur-md bg-muted/100 mx-auto">
                  <h1 className="text-2xl font-bold text-[#1e293b]   rounded-b-lg">
                    Cloud Computing
                  </h1>
                  <h1 className="text-sm font-light text-[#1e293b]  ">
                    Certificate of completion
                  </h1>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;

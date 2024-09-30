import React from 'react'
import { technologies } from '@/data/AboutMe/Skill/technologies';
import { img } from 'framer-motion/client';
const Skill = () => {
  return (
    <section className=" bg-background   ">
      <div className=" lg:px-20  min-h-screen ">
        <div className="py-20">
          <div className="flex flex-row mx-20 ">
            <div className=" w-1/2 flex flex-col    justify-center bg-red-500 ">
              {technologies &&
                technologies.map((item, index) => (
                  <div key={index}>
                    <img src={item.icon} />
                  </div>
                ))}
            </div>
            <div className=" w-1/2 flex justify-center  flex-col">
              <h1 className="text-foreground text-[42px] font-medium tracking-wider bg-red-900">
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
}

export default Skill

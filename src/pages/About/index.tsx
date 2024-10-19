import React from 'react'
import AboutMe from '@/pages/About/AboutMe';
import Certification from '@/pages/About/Certification'
import Skill from "@/pages/About/Skill";
import Experience from "@/pages/About/Experience";
const AboutMeLayout = () => {
  return (
    <div>
      <AboutMe />
      <Skill />
      <Experience />
      <Certification />
    </div>
  );
}

export default AboutMeLayout

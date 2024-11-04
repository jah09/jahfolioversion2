import { IconType } from "react-icons";

import {
  FaReact,
  FaLaravel,
  FaNodeJs,
  FaHtml5,
  FaPhp,
  FaVuejs,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaVuejs,
  FaWordpress,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  BiLogoPostgresql,
  BiLogoMongodb,
  BiLogoTypescript,
} from "react-icons/bi";

import { IoLogoCss3 } from "react-icons/io";
import { FaJsSquare } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiLaragon, SiAndroidstudio } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { TbBrandDjango } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { SiXamarin } from "react-icons/si";
import { SiPostman } from "react-icons/si";

export interface Academics {
  schoolName: string;
  course: string;
  date: string;
  address: string;
}
export interface Experience {
  date?: string;
  jobTitle?: string;
  company?: string;
  jobDescription?: string;
  techStack?: TechStack[];
  academics?: Academics;
}
export interface TechStack {
  icon: IconType;
}

export const experiences: Experience[] = [
  {
    date: "Oct 10, 2024",
    jobTitle: "Software Engineer",
    company: "CLI",
    jobDescription:
      "My primary focus is on full-stack web development, particularly building websites for internal company use..  Unfortunately I cant share more details due to NDA.",
    techStack: [
      {
        icon: FaLaravel,
      },
      {
        icon: FaReact,
      },
      {
        icon: SiPostman,
      },
      {
        icon: BiLogoPostgresql,
      },
      {
        icon: RiTailwindCssFill,
      },
    ],
  },
  {
    date: "July 3, 2024",
    jobTitle: "Software Developer Intern",
    company: "HiPE Japan",
    jobDescription:
      "Worked with a team to develop an HRIS project, implementing a task board feature, fetching and displaying categorized tickets from the database, and creating a client UI for data integration.",
    techStack: [
      {
        icon: SiPostman,
      },
      {
        icon: FaLaravel,
      },
      {
        icon: FaVuejs,
      },
      {
        icon: SiLaragon,
      },
    ],
  },
  {
    date: "Jul 10, 2023",
    jobTitle: "Mobile Developer",
    company: "Willies English",
    jobDescription:
      "Developed a mobile application. Converted prototype from Figma into application.",
    techStack: [
      {
        icon: SiAndroidstudio,
      },
      {
        icon: IoLogoFirebase,
      },
    ],
  },
  {
    academics: {
      schoolName: "CTU-Main",
      course: "BS in Information Technology",
      date: "July 20,2024",
      address: "Cebu City, 6000",
    },
  },
];

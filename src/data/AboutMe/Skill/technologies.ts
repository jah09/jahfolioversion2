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
export interface Technology {
  techLink: string;

  icon: IconType;
}
export const technologies: Technology[] = [
  {
    techLink: "https://react.dev/learn",
    icon: FaReact,
  },
  {
    techLink: "https://laravel.com/docs/11.x/readme",
    icon: FaLaravel,
  },
  {
    techLink: "https://tailwindcss.com/",
    icon: RiTailwindCssFill,
  },
  {
    techLink: "https://www.postgresql.org/",
    icon: BiLogoPostgresql,
  },
  {
    techLink: "https://www.postman.com/",
    icon: SiPostman,
  },
  {
    techLink: "https://reactnative.dev/docs/getting-started",
    icon: FaReact,
  },
  {
    //"https://expressjs.com",
    techLink: "https://nodejs.org/en",
    icon: FaNodeJs,
  },
  {
    techLink: "https://www.w3schools.com/html/default.asp",
    icon: FaHtml5,
  },
  {
    techLink: "https://www.w3schools.com/css/default.asp",
    icon: IoLogoCss3,
  },
  {
    techLink: "https://www.w3schools.com/js/default.asp",
    icon: FaJsSquare,
  },
  {
    techLink: "https://www.typescriptlang.org/s",
    icon: BiLogoTypescript,
  },
  {
    techLink: "https://laragon.org/",
    icon: SiLaragon,
  },
  {
    techLink: "https://www.php.net/docs.php",
    icon: FaPhp,
  },
  {
    techLink: "https://www.djangoproject.com/",
    icon: TbBrandDjango,
  },
  {
    techLink: "https://docs.python.org/3/",
    icon: FaPython,
  },
  {
    techLink: "https://vuejs.org/",
    icon: FaVuejs,
  },
  {
    techLink: "https://git-scm.com/doc",
    icon: FaGitAlt,
  },
  {
    techLink: "https://docs.github.com/en",
    icon: FaGithub,
  },
  {
    techLink: "https://dev.mysql.com/doc/",
    icon: GrMysql,
  },
  {
    techLink: "https://account.mongodb.com/",
    icon: BiLogoMongodb,
  },
  {
    techLink: "https://firebase.google.com/docs",
    icon: IoLogoFirebase,
  },
  {
    techLink: "https://help.figma.com/hc/en-us",
    icon: CgFigma,
  },
  {
    techLink: "https://developer.android.com/docs",
    icon: SiAndroidstudio,
  },
  {
    techLink: "https://learn.microsoft.com/en-us/xamarin/",
    icon: SiXamarin,
  },
  {
    techLink: "https://wordpress.org/",
    icon: FaWordpress,
  },
  // {
  //   techLink: "",
  //   icon: FaJsSquare,
  // },
  // {
  //   techLink: "",
  //   icon: FaJsSquare,
  // },
  // {
  //   techLink: "",
  //   icon: FaJsSquare,
  // },
  // {
  //   techLink: "",
  //   icon: FaJsSquare,
  // },
];

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
  techName: string;
  icon: IconType;
}
export const technologies: Technology[] = [
  {
    techName: "ReactJs",
    techLink: "https://react.dev/learn",
    icon: FaReact,
  },
  {
    techName: "Laravel",
    techLink: "https://laravel.com/docs/11.x/readme",
    icon: FaLaravel,
  },
  {
    techName: "Tailwind",
    techLink: "https://tailwindcss.com/",
    icon: RiTailwindCssFill,
  },
  {
    techName: "Postre",
    techLink: "https://www.postgresql.org/",
    icon: BiLogoPostgresql,
  },
  {
    techName: "Postman",
    techLink: "https://www.postman.com/",
    icon: SiPostman,
  },
  {
    techName: "React Native",
    techLink: "https://reactnative.dev/docs/getting-started",
    icon: FaReact,
  },
  {
    techName: "NodeJs",
    techLink: "https://nodejs.org/en",
    icon: FaNodeJs,
  },
  {
    techName: "Html",
    techLink: "https://www.w3schools.com/html/default.asp",
    icon: FaHtml5,
  },
  {
    techName: "Css",

    techLink: "https://www.w3schools.com/css/default.asp",
    icon: IoLogoCss3,
  },
  {
    techName: "Js",
    techLink: "https://www.w3schools.com/js/default.asp",
    icon: FaJsSquare,
  },
  {
    techName: "Ts",
    techLink: "https://www.typescriptlang.org/s",
    icon: BiLogoTypescript,
  },
  {
    techName: "Laragon",
    techLink: "https://laragon.org/",
    icon: SiLaragon,
  },
  {
    techName: "Php",
    techLink: "https://www.php.net/docs.php",
    icon: FaPhp,
  },
  {
    techName: "Django",
    techLink: "https://www.djangoproject.com/",
    icon: TbBrandDjango,
  },
  {
    techName: "Python",
    techLink: "https://docs.python.org/3/",
    icon: FaPython,
  },
  {
    techName: "Vuejs",
    techLink: "https://vuejs.org/",
    icon: FaVuejs,
  },
  {
    techName: "Git",
    techLink: "https://git-scm.com/doc",
    icon: FaGitAlt,
  },
  {
    techName: "Github",
    techLink: "https://docs.github.com/en",
    icon: FaGithub,
  },
  {
    techName: "Mysql",
    techLink: "https://dev.mysql.com/doc/",
    icon: GrMysql,
  },
  {
    techName: "MongoDb",
    techLink: "https://account.mongodb.com/",
    icon: BiLogoMongodb,
  },
  {
    techName: "Firebase",

    techLink: "https://firebase.google.com/docs",
    icon: IoLogoFirebase,
  },
  {
    techName: "Figma",
    techLink: "https://help.figma.com/hc/en-us",
    icon: CgFigma,
  },
  {
    techName: "Android Studio",
    techLink: "https://developer.android.com/docs",
    icon: SiAndroidstudio,
  },
  {
    techName: "Xamarin",
    techLink: "https://learn.microsoft.com/en-us/xamarin/",
    icon: SiXamarin,
  },
  {
    techName: "Wordpress",
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

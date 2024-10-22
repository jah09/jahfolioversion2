import { v4 as uuid } from "uuid";
import { IconType } from "react-icons";
import { SiReactquery } from "react-icons/si";
import { FaReact, FaLaravel, FaVuejs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { SiLaragon, SiAndroidstudio } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import project_pos from "@/assets/image/project_pos.png";
import file from "@/assets/image/file.png";
import project_portfolio from "@/assets/image/project_portfolio.png";
import project_joblisting from "@/assets/image/project_joblisting.png";
import project_dailybudd from "@/assets/image/project_dailybudd.png";
import project_jokes from "@/assets/image/project_jokes.png";
import project_jalida from "@/assets/image/project_jalida.png";
import project_tubig from "@/assets/image/project_tubig.png";
export interface TechStack {
  icon?: IconType;
  tag: string;
  techStackName: string;
}

export interface Project {
  id: string;
  isImportant: boolean;
  name: string;
  description: string;
  image: string;
  githubRepo: string;
  liveDemo: string;
  techStack?: TechStack[];
}

const projectsData: Project[] = [
  {
    id: uuid(),
    isImportant: true,
    name: "2big Web and Mobile App",
    description:
      "Capstone Project. Many features for this project. Click Github to see more details about the project.",
    image: project_tubig,
    githubRepo: "https://github.com/jah09/2bigCustomerReporn",
    liveDemo: "",
    techStack: [
      {
        icon: FaReact,
        tag: "reactnative",
        techStackName: "ReactJs",
      },
      {
        icon: IoLogoFirebase,
        tag: "firebase",
        techStackName: "Firebase",
      },
      {
        icon: IoLogoCss3,
        tag: "css",
        techStackName: "Css",
      },
      {
        icon: FcGoogle,
        tag: "gcp",
        techStackName: "Gcp",
      },
    ],
  },
  {
    id: uuid(),
    isImportant: true,
    name: "Portfolio Version 1",
    description: "Personal Project. This is my first version of portfolio",
    image: project_portfolio,
    githubRepo: "https://github.com/jah09/2bigCustomerReporn",
    liveDemo: "",
    techStack: [
      {
        icon: FaReact,
        tag: "reactjs",
        techStackName: "ReactJs",
      },
      {
        icon: RiTailwindCssFill,
        tag: "tailwind",
        techStackName: "Tailwind",
      },  
    ],
  },

  {
    id: uuid(),
    isImportant: true,
    name: "Joblisting Revamp",
    description:
      "Intern Project. This project can add/display job. Create resume to use in job's application. Notification feature also available.",
    image: project_joblisting,
    githubRepo: "https://github.com/jah09/job-listing-revamp",
    liveDemo: "",
    techStack: [
      {
        icon: FaLaravel,
        tag: "laravel",
        techStackName: "Laravel",
      },
      {
        icon: RiTailwindCssFill,
        tag: "tailwind",
        techStackName: "Tailwind",
      },
      {
        icon: GrMysql,
        tag: "mysql",
        techStackName: "MySQL",
      },
      {
        icon: SiLaragon,
        tag: "laragon",
        techStackName: "Laragon",
      },
    ],
  },
  {
    id: uuid(),
    isImportant: true,
    name: "Pos System",
    description:
      "Intern Project. Merchant can add and display brand, product andPro category. Utilize the usage of S3 bucket.",
    image: project_pos,
    githubRepo: "",
    liveDemo: "",
    techStack: [
      {
        icon: FaLaravel,
        tag: "laravel",
        techStackName: "Laravel",
      },
      {
        icon: RiTailwindCssFill,
        tag: "tailwind",
        techStackName: "TailwindCss",
      },
      {
        icon: GrMysql,
        tag: "mysql",
        techStackName: "MySQL",
      },
      {
        icon: SiLaragon,
        tag: "laragon",
        techStackName: "Laragon",
      },
      {
        icon: FaVuejs,
        tag: "vuejs",
        techStackName: "VueJs",
      },
    ],
  },
  {
    id: uuid(),
    isImportant: false,
    name: "Daily Routine Budd",
    description:
      "Personal project. Just like a ToDo list, that can add daily routine. Edit the item and can delete. Understanding also the react hooks.",
    image: project_dailybudd,
    githubRepo: "https://github.com/jah09/dailyroutinebud",
    liveDemo: "https://jah09.github.io/dailyroutinebud/",
    techStack: [
      {
        icon: FaReact,
        tag: "reactjs",
        techStackName: "Reactjs",
      },
      {
        icon: RiTailwindCssFill,
        tag: "tailwind",
        techStackName: "Tailwind",
      },
    ],
  },
  {
    id: uuid(),
    isImportant: false,
    name: "JalidaLand",
    description:
      "Personal project. Search your favorite movie. Also, a practice in how to use fetch in React. Understand the response from the API.",
    image: project_jalida,
    githubRepo: "https://github.com/jah09/jalida",
    liveDemo: "https://jah09.github.io/jalida/",
    techStack: [
      {
        icon: FaReact,
        tag: "reactjs",
        techStackName: "Reactjs",
      },
      {
        icon: IoLogoCss3,
        tag: "css",
        techStackName: "CSS",
      },
    ],
  },
  {
    id: uuid(),
    isImportant: false,
    name: "Random Jokes",
    description:
      "Practice project. Generates a random jokes from Chuck Norries API. I used Tanstack Query to understand how to it works.",
    image: project_jokes,
    githubRepo: "https://github.com/jah09/randomjokes",
    liveDemo: "https://jah09.github.io/randomjokes/",
    techStack: [
      {
        icon: FaReact,
        tag: "reactjs",
        techStackName: "Reactjs",
      },
      {
        icon: RiTailwindCssFill,
        tag: "tailwind",
        techStackName: "Tailwind",
      },
      {
        icon: SiReactquery,
        tag: "reactquery",
        techStackName: "Tanstack Query",
      },
    ],
  },
  {
    id: uuid(),
    isImportant: false,
    name: "MovieWavez",
    description:
      "Personal project. Search your favorite movie  and get the result. Understand the retrofit/REST API using Android Studio.",
    image: project_pos,
    githubRepo: "https://github.com/jah09/movie_wavez",
    liveDemo: "",
    techStack: [
      {
        icon: SiAndroidstudio,
        tag: "androidstudio",
        techStackName: "Android Studio ",
      },
      {
        icon: IoLogoFirebase,
        tag: "firebase",
        techStackName: "Firebase",
      },
      {
        tag: "retrofit",
        techStackName: "Retrofit",
      },
    ],
  },
  {
    id: uuid(),
    isImportant: false,
    name: "NewsSurge360",
    description:
      "Personal project. Search news, and get the result. Understand the REST API/Retrofit using Android Studio.",
    image: project_pos,
    githubRepo: "https://github.com/jah09/news_surge360",
    liveDemo: "",
    techStack: [
      {
        icon: SiAndroidstudio,
        tag: "androidstudio",
        techStackName: "Android Studio ",
      },
      {
        icon: IoLogoFirebase,
        tag: "firebase",
        techStackName: "Firebase",
      },
      {
        tag: "retrofit",
        techStackName: "Retrofit",
      },
    ],
  },
  {
    id: uuid(),
    isImportant: false,
    name: "Daily Agenda",
    description:
      "Personal project. ToDo list, can create, read, update and delete your To Do items.",
    image: project_pos,
    githubRepo: "https://github.com/jah09/daily-agenda",
    liveDemo: "",
    techStack: [
      {
        icon: SiAndroidstudio,
        tag: "androidstudio",
        techStackName: "Android Studio ",
      },
      {
        icon: IoLogoFirebase,
        tag: "firebase",
        techStackName: "Firebase",
      },
      {
        tag: "firebasestorage",
        techStackName: "Firebase Storage",
      },
    ],
  },
];

export default projectsData;

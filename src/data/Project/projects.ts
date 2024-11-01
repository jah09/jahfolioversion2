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
//Capstone images
import project_tubig from "@/assets/image/project_tubig.png";
import project_tubig2 from "@/assets/image/project_tubig2.png";
import project_tubig3 from "@/assets/image/project_tubig3.png";
import project_tubig4 from "@/assets/image/project_tubig4.png";
import project_tubig5 from "@/assets/image/project_tubig5.png";
//Portfolio images
import project_portfolio from "@/assets/image/project_portfolio.png";
import project_portfolio2 from "@/assets/image/project_portfolio2.png";
import project_portfolio3 from "@/assets/image/project_portfolio3.png";
import project_portfolio4 from "@/assets/image/project_portfolio4.png";

import project_pos from "@/assets/image/project_pos.png";
import project_newsurge from "@/assets/image/project_newsurge.png";
import project_dailyagenda from "@/assets/image/project_dailyagenda.png";
import project_joblisting from "@/assets/image/project_joblisting.png";
import project_dailybudd from "@/assets/image/project_dailybudd.png";
import project_jokes from "@/assets/image/project_jokes.png";
import project_jalida from "@/assets/image/project_jalida.png";
import project_garboogle from "@/assets/image/project_garboogle.png";
import project_moviewaze from "@/assets/image/project_moviewaze.png";

export interface TechStack {
  icon?: IconType;
  tag: string;
  techStackName: string;
}
export interface Feature {
  featureDescription: string;
}
export interface Images {
  imageUrl: string;
}
export interface Project {
  tag: string;
  id: string;
  isImportant: boolean;
  name: string;
  description: string;
  images?: Images[];
  githubRepo: string;
  liveDemo: string;
  techStack?: TechStack[];
  features?: Feature[];
}

const projectsData: Project[] = [
  {
    id: uuid(),
    tag: "mobile",
    isImportant: true,
    name: "2big Web and Mobile App",
    description:
      "Capstone Project. This study aims to design and develop a platform to manage orders, deliveries, and inventory for water refilling stations.",
    images: [
      {
        imageUrl: project_tubig,
      },
      {
        imageUrl: project_tubig2,
      },
      {
        imageUrl: project_tubig3,
      },
      {
        imageUrl: project_tubig4,
      },
      {
        imageUrl: project_tubig5,
      },
    ],
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
    features: [
      {
        featureDescription: "Customer can take orders",
      },
      {
        featureDescription: "Monitor the following: their deliveries",
      },
      {
        featureDescription: "Order status and points",
      },
      {
        featureDescription:
          "Customer can view: list of water refilling stations nearby",
      },
      {
        featureDescription: "WRS products and rates, and",
      },
      {
        featureDescription: "Operation time.",
      },
      {
        featureDescription: "Customer also can post rates and reviews.",
      },
    ],
  },
  {
    id: uuid(),
    tag: "web",
    isImportant: true,
    name: "Portfolio Version 1",
    description: "Personal Project. This is my first version of portfolio",
    images: [
      {
        imageUrl: project_portfolio,
      },
      {
        imageUrl: project_portfolio2,
      },
      {
        imageUrl: project_portfolio3,
      },
      {
        imageUrl: project_portfolio4,
      },
    ],
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
    features: [],
  },
  {
    id: uuid(),
    tag: "web",
    isImportant: true,
    name: "Joblisting Revamp",
    description:
      "Intern Project. This project can add/display job. Create resume to use in job's application. Notification feature also available.",
    images: [
      {
        imageUrl: project_joblisting,
      },
    ],
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
    features: [
      {
        featureDescription: "User can add jobs posting",
      },
      {
        featureDescription: "User can create a resume",
      },
      {
        featureDescription: "User can apply to a job",
      },
      {
        featureDescription: "User can store files in an S3 bucket",
      },
      {
        featureDescription: "And many more.",
      },
    ],
  },
  {
    id: uuid(),
    tag: "web",
    isImportant: true,
    name: "Pos System",
    description:
      "Intern Project. Merchant can add and display brand, product andPro category. Utilize the usage of S3 bucket.",
    images: [
      {
        imageUrl: project_pos,
      },
    ],
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
    features: [
      {
        featureDescription: "User can add brand, product, and category",
      },
      {
        featureDescription: "Modify brands",
      },
      {
        featureDescription: "And many more.",
      },
    ],
  },
  {
    id: uuid(),
    tag: "web",
    isImportant: false,
    name: "Daily Routine Budd",
    description:
      "Personal project. Just like a ToDo list, that can add daily routine. Edit the item and can delete. Understanding also the react hooks.",
    images: [
      {
        imageUrl: project_dailybudd,
      },
    ],
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
    features: [
      {
        featureDescription: "User can add,edit and delete daily routine",
      },
    ],
  },
  {
    id: uuid(),
    tag: "web",
    isImportant: false,
    name: "JalidaLand",
    description:
      "Personal project. Search your favorite movie. Also, a practice in how to use fetch in React. Understand the response from the API.",
    images: [
      {
        imageUrl: project_jalida,
      },
    ],
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
    features: [
      {
        featureDescription: "User can search their favorite movies",
      },
    ],
  },
  {
    id: uuid(),
    tag: "web",
    isImportant: false,
    name: "Random Jokes",
    description:
      "Practice project. Generates a random jokes from Chuck Norries API. I used Tanstack Query to understand how to it works.",
    images: [
      {
        imageUrl: project_jokes,
      },
    ],
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
    features: [
      {
        featureDescription: "Generate different joke from the API.",
      },
    ],
  },
  {
    id: uuid(),
    tag: "mobile",
    isImportant: false,
    name: "MovieWaze",
    description:
      "Personal project. Search your favorite movie  and get the result. Understand the retrofit/REST API using Android Studio.",
    images: [
      {
        imageUrl: project_moviewaze,
      },
    ],
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
    features: [
      {
        featureDescription:
          "Search your favorite movie with a different genre and get the result.",
      },
    ],
  },
  {
    id: uuid(),
    tag: "mobile",
    isImportant: false,
    name: "NewsSurge360",
    description:
      "Personal project. Search news, and get the result. Understand the REST API/Retrofit using Android Studio.",
    images: [
      {
        imageUrl: project_newsurge,
      },
    ],
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
    features: [
      {
        featureDescription:
          "Search news with a different category and get the result.",
      },
      {
        featureDescription: "Explore news contents",
      },
    ],
  },
  {
    id: uuid(),
    tag: "mobile",
    isImportant: false,
    name: "Garboogle",
    description: "Personal project.  Import different garbage article.",
    images: [
      {
        imageUrl: project_garboogle,
      },
    ],
    githubRepo: "https://github.com/jah09/Garboogle",
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
    features: [
      {
        featureDescription:
          "User can add new article. They can modify it and delete article and view externally.",
      },
      {
        featureDescription: "User can edit and update their profile.",
      },
    ],
  },
  {
    id: uuid(),
    tag: "mobile",
    isImportant: false,
    name: "Daily Agenda",
    description:
      "Personal project. ToDo list, can create, read, update and delete your ToDo items.",
    images: [
      {
        imageUrl: project_dailyagenda,
      },
    ],
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
    features: [
      {
        featureDescription:
          "User can add new ToDo item. They can modify it and delete ToDo item.",
      },
      {
        featureDescription: "Completed and uncompleted task.",
      },
      {
        featureDescription: "User can edit and update their profile.",
      },
    ],
  },
];

export default projectsData;

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
//Joblisting portfolio
import project_joblisting1 from "@/assets/image/project_joblisting1.png";
import project_joblisting2 from "@/assets/image/project_joblisting2.png";
import project_joblisting3 from "@/assets/image/project_joblisting3.png";
import project_joblisting4 from "@/assets/image/project_joblisting4.png";
import project_joblisting5 from "@/assets/image/project_joblisting5.png";
import project_joblisting6 from "@/assets/image/project_joblisting6.png";
//Pos project
import project_pos from "@/assets/image/project_pos.png";
import project_pos2 from "@/assets/image/project_pos2.png";
import project_pos3 from "@/assets/image/project_pos3.png";
import project_pos4 from "@/assets/image/project_pos4.png";
import project_pos5 from "@/assets/image/project_pos5.png";
import project_pos6 from "@/assets/image/project_pos6.png";
//NewSurge
import project_newsurge from "@/assets/image/project_newsurge.png";
import project_newsurge2 from "@/assets/image/project_newsurge2.png";
import project_newsurge3 from "@/assets/image/project_newsurge3.png";
import project_newsurge4 from "@/assets/image/project_newsurge4.png";
import project_newsurge5 from "@/assets/image/project_newsurge5.png";
//Garboogle
import project_garboogle from "@/assets/image/project_garboogle.png";
import project_garboogle2 from "@/assets/image/project_garboogle2.png";
import project_garboogle3 from "@/assets/image/project_garboogle3.png";
import project_garboogle4 from "@/assets/image/project_garboogle4.png";
import project_garboogle5 from "@/assets/image/project_garboogle5.png";
import project_garboogle6 from "@/assets/image/project_garboogle6.png";
import project_garboogle7 from "@/assets/image/project_garboogle7.png";
//Daily Agenda
import project_dailyagenda from "@/assets/image/project_dailyagenda.png";
import project_dailyagenda2 from "@/assets/image/project_dailyagenda2.png";
import project_dailyagenda3 from "@/assets/image/project_dailyagenda3.png";
import project_dailyagenda4 from "@/assets/image/project_dailyagenda4.png";
import project_dailyagenda5 from "@/assets/image/project_dailyagenda5.png";
import project_dailyagenda6 from "@/assets/image/project_dailyagenda6.png";
import project_dailyagenda7 from "@/assets/image/project_dailyagenda7.png";
import project_dailyagenda8 from "@/assets/image/project_dailyagenda8.png";
import project_dailyagenda9 from "@/assets/image/project_dailyagenda9.png";
 

import project_dailybudd from "@/assets/image/project_dailybudd.png";
import project_jokes from "@/assets/image/project_jokes.png";
import project_jalida from "@/assets/image/project_jalida.png";
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
  id: string;
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
        id: uuid(),
        imageUrl: project_tubig,
      },
      {
        id: uuid(),
        imageUrl: project_tubig2,
      },
      {
        id: uuid(),
        imageUrl: project_tubig3,
      },
      {
        id: uuid(),
        imageUrl: project_tubig4,
      },
      {
        id: uuid(),
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
        id: uuid(),
        imageUrl: project_portfolio,
      },
      {
        id: uuid(),
        imageUrl: project_portfolio2,
      },
      {
        id: uuid(),
        imageUrl: project_portfolio3,
      },
      {
        id: uuid(),
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
        id: uuid(),
        imageUrl: project_joblisting1,
      },
      {
        id: uuid(),
        imageUrl: project_joblisting2,
      },
      {
        id: uuid(),
        imageUrl: project_joblisting3,
      },
      {
        id: uuid(),
        imageUrl: project_joblisting4,
      },
      {
        id: uuid(),
        imageUrl: project_joblisting5,
      },
      {
        id: uuid(),
        imageUrl: project_joblisting6,
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
        id: uuid(),
        imageUrl: project_pos,
      },
      {
        id: uuid(),
        imageUrl: project_pos2,
      },
      {
        id: uuid(),
        imageUrl: project_pos3,
      },
      {
        id: uuid(),
        imageUrl: project_pos4,
      },
      {
        id: uuid(),
        imageUrl: project_pos5,
      },
      {
        id: uuid(),
        imageUrl: project_pos6,
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
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
        imageUrl: project_newsurge2,
      },
      {
        id: uuid(),
        imageUrl: project_newsurge,
      },
      {
        id: uuid(),
        imageUrl: project_newsurge3,
      },
      {
        id: uuid(),
        imageUrl: project_newsurge4,
      },
      {
        id: uuid(),
        imageUrl: project_newsurge5,
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
        id: uuid(),
        imageUrl: project_garboogle,
      },
      {
        id: uuid(),
        imageUrl: project_garboogle2,
      },
      {
        id: uuid(),
        imageUrl: project_garboogle3,
      },
      {
        id: uuid(),
        imageUrl: project_garboogle4,
      },
      {
        id: uuid(),
        imageUrl: project_garboogle5,
      },
      {
        id: uuid(),
        imageUrl: project_garboogle6,
      },
      {
        id: uuid(),
        imageUrl: project_garboogle7,
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
        id: uuid(),
        imageUrl: project_dailyagenda,
      },
      {
        id: uuid(),
        imageUrl: project_dailyagenda2,
      },
      {
        id: uuid(),
        imageUrl: project_dailyagenda3,
      },
      {
        id: uuid(),
        imageUrl: project_dailyagenda4,
      },
      {
        id: uuid(),
        imageUrl: project_dailyagenda9,
      },
      {
        id: uuid(),
        imageUrl: project_dailyagenda5,
      },
      {
        id: uuid(),
        imageUrl: project_dailyagenda6,
      },
      {
        id: uuid(),
        imageUrl: project_dailyagenda7,
      },
      {
        id: uuid(),
        imageUrl: project_dailyagenda8,
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

import { IconType } from "react-icons"
import { FaReact } from "react-icons/fa";
export interface Technology{
    techLink: string,
    techName: string,
    icon: IconType
}
export const technologies: Technology[] = [
  {
    techName: "React",
    techLink: "",
    icon: FaReact,
  },
];

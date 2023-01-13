import Image from "next/image";
import {
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiSequelize,
  SiPassport,
  SiTailwindcss,
  SiTypescript,
  SiVite
} from "react-icons/si";
import astroPic from "@assets/astro.svg";

export const ICONS_BY_TECH = [
  {
    name: "React",
    icon: <SiReact />,
  },
  {
    name: "Redux",
    icon: <SiRedux />,
  },
  {
    name: "Node",
    icon: <SiNodedotjs />,
  },
  {
    name: "Express",
    icon: <SiExpress />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
  },
  {
    name: "Sequelize",
    icon: <SiSequelize />,
  },
  {
    name: "Passport",
    icon: <SiPassport />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
  },
  {
    name: "Astro",
    icon: <Image src={astroPic} alt="astro" width={16} height={16} />
  },
  {
    name: "Typescript",
    icon: <SiTypescript />,
  },
  {
    name: "Vite",
    icon: <SiVite />,
  }
];
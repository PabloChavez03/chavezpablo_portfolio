import Link from "next/link";
import ButtonCV from "./utils/ButtonCV";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  return (
    <nav className="bg-deepGreen-900 p-5 w-full shadow-sm">
      <div className="container flex md:flex-wrap justify-between mx-auto items-center">
        <div className="flex">
          <p className="text-gray-200 font-serif text-3xl transition-colors delay-50 hover:bg-gradient-to-r hover:from-red-500 hover:to-purple-500 hover:text-transparent hover:bg-clip-text hover:animate-text">
            CHÁVEZ.
          </p>
        </div>
        <ul className="hidden md:flex md:visible md:flex-row font-mukta text-lg">
          <Link href={"/"}>
            <li className="px-4 py-2 text-gray-200 cursor-pointer hover:border-b hover:border-amber-400 hover:text-amber-400 transition-colors duration-300">
              <a>Bienvenida</a>
            </li>
          </Link>
          <Link href={"/about"}>
            <li className="px-4 py-2 text-gray-200 cursor-pointer hover:border-b hover:border-amber-400 hover:text-amber-400 transition-colors duration-300">
              <a>Sobre mí</a>
            </li>
          </Link>
          <Link href={"/projects"}>
            <li className="px-4 py-2 text-gray-200 cursor-pointer hover:border-b hover:border-amber-400 hover:text-amber-400 transition-colors duration-300">
              <a>Proyectos</a>
            </li>
          </Link>
          <Link href={"/contact"}>
            <li className="px-4 py-2 text-gray-200 cursor-pointer hover:border-b hover:border-amber-400 hover:text-amber-400 transition-colors duration-300">
              <a>Contáctame</a>
            </li>
          </Link>
        </ul>
        <div className="invisible md:visible">
          <ButtonCV
            text={"Descargar CV"}
            path={
              "https://drive.google.com/file/d/1FR3GTMylvy40bKL5vIPlmI4YOvVU4Wsi/view?usp=sharing"
            }
            window={"_blank"}
            relation={"noreferrer"}
          />
        </div>
        <div className="md:hidden">
          <AiOutlineMenu className="text-gray-200 transition-colors duration-75 hover:text-amber-400" 
          size={34}
          />
           <ul className="absolute z-[-1] md:flex md:visible md:flex-row font-mukta text-lg">
          <Link href={"/"}>
            <li className="py-2 text-gray-200 cursor-pointer hover:border-b hover:border-amber-400 hover:text-amber-400 transition-colors duration-300">
              <a>Bienvenida</a>
            </li>
          </Link>
          <Link href={"/about"}>
            <li className="py-2 text-gray-200 cursor-pointer hover:border-b hover:border-amber-400 hover:text-amber-400 transition-colors duration-300">
              <a>Sobre mí</a>
            </li>
          </Link>
          <Link href={"/projects"}>
            <li className="py-2 text-gray-200 cursor-pointer hover:border-b hover:border-amber-400 hover:text-amber-400 transition-colors duration-300">
              <a>Proyectos</a>
            </li>
          </Link>
          <Link href={"/contact"}>
            <li className="py-2 text-gray-200 cursor-pointer hover:border-b hover:border-amber-400 hover:text-amber-400 transition-colors duration-300">
              <a>Contáctame</a>
            </li>
          </Link>
        </ul>
        </div>
      </div>
    </nav>
  );
}

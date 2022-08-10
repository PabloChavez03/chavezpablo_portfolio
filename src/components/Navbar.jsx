import Link from "next/link";
import ButtonCV from "./utils/ButtonCV";

export default function Navbar() {
  return (
    <nav className="bg-deepGreen-900 p-5 w-screen shadow-sm">
      <div className="container flex flex-wrap justify-between mx-auto items-center">
        <div className="flex">
          <p className="text-gray-200 font-serif text-3xl transition-colors delay-50 hover:bg-gradient-to-r hover:from-red-500 hover:to-purple-500 hover:text-transparent hover:bg-clip-text hover:animate-text">
            CHÁVEZ.
          </p>
        </div>
        <ul className="flex flex-row font-mukta text-lg">
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
          <Link href={'projects'}><li className="px-4 py-2 text-gray-200 cursor-pointer hover:border-b hover:border-amber-400 hover:text-amber-400 transition-colors duration-300">
            <a>Proyectos</a>
          </li></Link>
          <li className="px-4 py-2 text-gray-200 hover:border-b hover:border-amber-400 hover:text-amber-400 transition-colors duration-300">
            <a href="#">Contactame</a>
          </li>
        </ul>
        <ButtonCV text={"Descargar CV"} path={'CV-Pablo-Chavez.pdf'} name={'CV'}/>
      </div>
    </nav>
  );
}

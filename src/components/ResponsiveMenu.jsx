import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const ResponsiveMenu = () => {
  const [oculto,setOculto] = useState(true)
  const size = globalThis.innerWidth // ancho de la ventana
  console.log(size)
  return (
    <div className="md:hidden flex justify-center">
      <button className="peer">
        <AiOutlineMenu
          className="text-gray-200 transition-colors duration-75 hover:text-amber-400"
          size={34}
          onClick={() => oculto? setOculto(false) : setOculto(true)}
        />
      </button>
      <div hidden={oculto} className="absolute top-[8vh] -right-0 z-[1] py-20 px-[38vw] xs:px-[40vw] bg-deepGreen-900 md:flex md:visible md:flex-row font-mukta text-lg">
        <ul className="">
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
  );
};

export default ResponsiveMenu;

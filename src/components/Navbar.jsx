import Link from 'next/link'
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
          <li className="px-4 py-2 text-gray-200 hover:border-b hover:border-amber-400 hover:text-amber-400 transition-colors duration-300  active:border-amber-400 active:text-amber-400">
            <Link href={'/'}><a>Bienvenida</a></Link>
          </li>
          <li className="px-4 py-2 text-gray-200 hover:border-b hover:border-amber-400 hover:text-amber-400 transition-colors duration-300  active:border-amber-400 active:text-amber-400">
            <Link href={'/about'}><a>Sobre mi</a></Link>
          </li>
          <li className="px-4 py-2 text-gray-200 hover:border-b hover:border-amber-400 hover:text-amber-400 transition-colors duration-300  active:border-amber-400 active:text-amber-400">
            <a href="#">Proyectos</a>
          </li>
          <li className="px-4 py-2 text-gray-200 hover:border-b hover:border-amber-400 hover:text-amber-400 transition-colors duration-300  active:border-amber-400 active:text-amber-400">
            <a href="#">Contactame</a>
          </li>
        </ul>
        <ButtonCV text={'Descargar CV'} path={'#_'}/>
      </div>
    </nav>
  );
}

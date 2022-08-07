import ButtonCV from "./utils/ButtonCV";

export default function Navbar() {
  return (
    <nav className="bg-nav p-5 w-screen">
      <div className="container flex flex-wrap justify-between mx-auto items-center">
        <div className="flex">
          <p className="text-gray-200 font-serif text-3xl">
            CHÁVEZ
          </p>
        </div>
        <ul className="flex flex-row">
          <li className="px-2 py-2 text-gray-200 hover:border-b hover:border-amber-400 hover:text-amber-400 transition-all ease-out duration-300  active:border-amber-400 active:text-amber-400">
            <a href="#">Bienvenida</a>
          </li>
          <li className="px-2 py-2 text-gray-200 hover:border-b hover:border-amber-400 hover:text-amber-400 transition-all ease-out duration-300  active:border-amber-400 active:text-amber-400">
            <a href="#">Sobre mi</a>
          </li>
          <li className="px-2 py-2 text-gray-200 hover:border-b hover:border-amber-400 hover:text-amber-400 transition-all ease-out duration-300  active:border-amber-400 active:text-amber-400">
            <a href="#">Proyectos</a>
          </li>
          <li className="px-2 py-2 text-gray-200 hover:border-b hover:border-amber-400 hover:text-amber-400 transition-all ease-out duration-300  active:border-amber-400 active:text-amber-400">
            <a href="#">Contactame</a>
          </li>
        </ul>
        <ButtonCV text={'Descargar CV'}/>
      </div>
    </nav>
  );
}

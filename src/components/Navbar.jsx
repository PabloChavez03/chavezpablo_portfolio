export default function Navbar() {
  return (
    <nav className="bg-nav p-8">
      <div className="container flex flex-wrap justify-between mx-auto">
        <div className="flex">
          <p className="text-gray-200">
            <strong>Pablo Chavez</strong>
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
        <div>
          <a
            href="#_"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-gray-200 rounded hover:bg-white group"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-amber-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-green-900 transition-colors duration-300 ease-in-out group-hover:text-black">
              Download CV
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}

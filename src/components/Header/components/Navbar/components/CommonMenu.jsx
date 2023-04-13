import Link from 'next/link'

const CommonMenu = () => {
  return (
    <ul className="hidden md:flex md:visible md:flex-row font-mukta text-lg">
      <Link href={'/'}>
        <li className="px-4 py-2 text-gray-200 cursor-pointer">
          <a className="hover:underline hover:underline-offset-[1em] hover:underline-amber-400 hover:text-amber-400 transition-colors duration-300">
            Bienvenida
          </a>
        </li>
      </Link>
      <Link href={'/about'}>
        <li className="px-4 py-2 text-gray-200 cursor-pointer">
          <a className="hover:underline hover:underline-offset-[1em] hover:underline-amber-400 hover:text-amber-400 transition-colors duration-300">
            Sobre mí
          </a>
        </li>
      </Link>
      <Link href={'/projects'}>
        <li className="px-4 py-2 text-gray-200 cursor-pointer">
          <a className="hover:underline hover:underline-offset-[1em] hover:underline-amber-400 hover:text-amber-400 transition-colors duration-300">
            Proyectos
          </a>
        </li>
      </Link>
      <Link href={'/contact'}>
        <li className="px-4 py-2 text-gray-200 cursor-pointer">
          <a className="hover:underline hover:underline-offset-[1em] hover:underline-amber-400 hover:text-amber-400 transition-colors duration-300">
            Contáctame
          </a>
        </li>
      </Link>
    </ul>
  )
}

export default CommonMenu

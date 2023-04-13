import Link from 'next/link'

const Logo = () => {
  return (
    <div className="flex">
      <Link href={'/'}>
        <a className="text-gray-200 font-serif text-3xl transition-colors delay-50 hover:bg-gradient-to-r hover:from-red-500 hover:to-purple-500 hover:text-transparent hover:bg-clip-text hover:animate-text">
          CHÁVEZ.
        </a>
      </Link>
    </div>
  )
}

export default Logo

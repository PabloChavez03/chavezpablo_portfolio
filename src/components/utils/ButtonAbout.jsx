import { BsArrowRight } from 'react-icons/bs'

export default function ButtonAbout ({ path, text, window, relation }) {
  return (
    <div>
      <a
        href={path}
        className="inline-flex items-center justify-center w-full px-6 py-2 mb-2 text-lg text-white bg-green-500 rounded-md cursor-pointer transition-colors shadow-sm shadow-green-200 hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/30 md:w-auto md:mb-0"
        data-primary="green-400"
        data-rounded="rounded-2xl"
        data-primary-reset="{}"
        target={window}
        rel={relation}
      >
        {text}
        <div className="hidden md:block pl-2"><BsArrowRight/></div>
      </a>
    </div>
  )
}

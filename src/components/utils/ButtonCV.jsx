export default function ButtonCV ({ text, path, window, relation }) {
  return (
    <div>
    <a
      href={path}
      className="relative inline-flex items-center justify-start mx-3 md:mx-0 py-3 px-4 md:px-6 md:py-3 overflow-hidden font-medium transition-all bg-gray-200 rounded hover:bg-white group"
      target={window}
      rel={relation}
    >
      <span className="w-48 h-48 rounded rotate-[-40deg] bg-amber-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
      <span className="md:relative md:w-full md:text-left text-green-900 transition-colors duration-300 ease-in-out group-hover:text-black">
        {text}
      </span>
    </a>
  </div>
  )
}

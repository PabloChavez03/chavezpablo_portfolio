export default function ButtonSubmit() {
  return (
    <div>
      <a
        href="#_"
        className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-green-600 active:shadow-none shadow-lg bg-gradient-to-tr from-green-500 to-green-400 border-green-700 text-white"
      >
        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-36 group-hover:h-10 opacity-10"></span>
        <span className="relative font-josefin">ENVIAR</span>
      </a>
    </div>
  );
}

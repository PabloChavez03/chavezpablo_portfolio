import { BsArrowRight } from "react-icons/bs";

export default function ButtonAbout() {
  return (
    <div>
      <a
        href="#_"
        className="inline-flex items-center justify-center w-full px-6 py-2 mb-2 text-lg text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0"
        data-primary="green-400"
        data-rounded="rounded-2xl"
        data-primary-reset="{}"
      >
        Más detalles
        <div className="pl-2"><BsArrowRight/></div>
      </a>
    </div>
  );
}

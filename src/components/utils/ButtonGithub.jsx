import { SiGithub } from "react-icons/si";

export default function ButtonGithub({path,window,relation}) {
  return (
    <div>
      <a
        href={path}
        className="inline-flex items-center justify-center w-full px-6 py-2 mb-2 text-lg text-white bg-[#333] rounded-md cursor-pointer transition-colors shadow-sm shadow-[#333] hover:bg-gray-300 hover:shadow-lg hover:shadow-gray-500/30 hover:text-[#333] sm:w-auto sm:mb-0"
        data-primary="green-400"
        data-rounded="rounded-2xl"
        data-primary-reset="{}"
        target={window}
        rel={relation}
      >
        <div><SiGithub size={27}/></div>
      </a>
    </div>
  );
}

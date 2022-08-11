import Image from "next/image";
import profilePic from "../../public/pablito.png";
import ButtonCV from "./utils/ButtonCV";

import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { AiOutlineMinus } from "react-icons/ai";

export default function Bienvenida() {
  return (
    <div className="grid grid-cols-7 gap-4 place-content-center place-items-center m-auto">
      <div className="col-start-1 col-end-5 m-5 p-10">
        <div className="mb-4">
          <div className="mb-4">
            <h1 className="text-amber-400 font-mono">Divide y conquistarás</h1>
          </div>
          <h1 className="font-serif text-6xl text-gray-200">
            Full Stack Developer
          </h1>
          <h1 className="font-serif text-6xl text-gray-200">Pablo Chávez</h1>
        </div>
        <div className="mt-4">
          <span className="text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quod
            atque, error veniam laudantium doloribus facilis impedit labore
            vero, earum, sed reiciendis eveniet nobis.
          </span>
        </div>
        <div className="flex items-center mt-2 py-2">
          <div className="py-2">
            <ButtonCV text={"Sobre mí"} path={'/about'}/>
          </div>
          <div className="ml-9">
            <AiOutlineMinus className="text-gray-200 transition-colors duration-75 hover:text-amber-400" size={30} />
          </div>
          <div className="flex flex-row ml-4">
            <div>
              <a
                href="https://github.com/PabloChavez03"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub
                  className="text-gray-200 mx-4 transition-colors duration-75 hover:text-amber-400"
                  size={34}
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/pablo-oscar-chavez/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLinkedin
                  className="text-gray-200 mx-4 transition-colors duration-75 hover:text-amber-400"
                  size={34}
                />
              </a>
            </div>
            <div>
              <SiWhatsapp
                className="text-gray-200 mx-4 transition-colors duration-75 hover:text-amber-400"
                size={34}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-start-5 col-end-8 m-5 p-5 max-w-md">
        <Image src={profilePic} alt={"profile picture"} className="" />
      </div>
    </div>
  );
}

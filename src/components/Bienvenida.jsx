import Image from "next/image";
import profilePic from "@assets/pablito.png";
import ButtonCV from "@components/utils/ButtonCV";

import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { AiOutlineMinus } from "react-icons/ai";

export default function Bienvenida() {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-7 sm:gap-4 sm:place-content-center sm:place-items-center m-auto">
      <div className="flex  flex-col md:block items-center justify-between md:col-start-1 md:col-end-5 p-7">
        <div className="mb-2">
          <div className="mb-6">
            <h1 className="pb-2 text-center md:text-left text-amber-400 font-mono">Divide y conquistarás</h1>
          </div>
          <h1 className="font-serif text-center md:text-left text-6xl text-gray-200">
            Full Stack Developer
          </h1>
          <h1 className="font-serif text-center md:text-left text-6xl text-gray-200">Pablo Chávez</h1>
        </div>
        <div className="mt-4">
          <p className="text-center md:text-left text-gray-200">
            Desarrollador web con un año de experiencia y en crecimiento. Mis
            destrezas residen en diseñar y crear sitios web que faciliten las necesidades de las personas, y otras más.
          </p>
        </div>
        <div className="flex flex-row-reverse justify-between md:flex-row md:justify-start items-center mt-2 py-2">
          <div className="py-2">
            <ButtonCV text={"Sobre mí"} path={"/about"} />
          </div>
          <div className="hidden md:block lg:ml-9">
            <AiOutlineMinus
              className="text-gray-200 transition-colors duration-75 hover:text-amber-400"
              size={30}
            />
          </div>
          <div className="flex flex-row lg:ml-4">
            <div>
              <a
                href="https://github.com/PabloChavez03"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub
                  className="text-gray-200 mx-3 md:mx-4 transition-colors duration-75 hover:text-amber-400"
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
                  className="text-gray-200 mx-3 md:mx-4 transition-colors duration-75 hover:text-amber-400"
                  size={34}
                />
              </a>
            </div>
            <div>
              <a
                href="http://wa.me/5493442654108#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiWhatsapp
                  className="text-gray-200 mx-3 md:mx-4 transition-colors duration-75 hover:text-amber-400"
                  size={34}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block md:col-start-5 md:col-end-8 m-5 p-5 max-w-md">
        <Image src={profilePic} alt={"profile picture"} />
      </div>
    </div>
  );
}

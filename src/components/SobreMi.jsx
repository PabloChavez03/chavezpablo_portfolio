import React from "react";
import Image from "next/image";
import profileCoffe from "../../public/pablitoCoofe.png";
import ButtonAbout from "./utils/ButtonAbout";

export default function SobreMi() {
  return (
    <div className="grid grid-cols-7 gap-4 place-content-center place-items-center h-screen bg-gray-200">
      <div className="col-start-1 col-end-4 m-4 p-10 max-w-sm">
        <div className="flex flex-col">
          <Image src={profileCoffe} alt={"profile coffe"} />
          <div>
            <h1 className="text-slate-500 italic font-josefin text-base text-center">
              `` La disciplina es el puente entre las metas y los logros. ``
            </h1>
          </div>
        </div>
      </div>
      <div className="col-start-4 col-end-8 m-5 mr-14 p-10 rounded-lg">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <h1 className="mb-8 text-4xl">Sobre mí</h1>
            <div className="mb-8">
              <ButtonAbout path={'/projects'} text={'Mis proyectos'}/>
            </div>
          </div>
          <div>
            <p className="text-justify tracking-wide text-lg text-green-800 font-mukta">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
              velit a iusto sapiente libero delectus ipsa vero nam vel fuga
              sequi non dolorem, rem architecto ad perspiciatis rerum iure
              ducimus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos libero tempore repellat culpa iusto perspiciatis ipsum
              nisi quisquam! Doloribus, eveniet? Blanditiis, saepe voluptatem.
              Quis facere, minus ipsum nobis aspernatur ipsa. Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Esse error magni eius
              sequi dolor voluptatibus. Inventore consequatur tempore
              dignissimos? Dignissimos consequuntur nam similique iste eos
              aliquid tempora distinctio odit sit?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

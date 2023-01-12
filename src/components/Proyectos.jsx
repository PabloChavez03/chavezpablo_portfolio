import { VscEmptyWindow } from "react-icons/vsc";
import Proyecto from "./Proyecto";

export default function Proyectos({ data }) {
  return (
    <div className="flex flex-col bg-gray-200 w-screen overflow-x-hidden">
      <h1 className="m-4 py-1 pt-6 text-5xl font-josefin underline underline-offset-8 selection:bg-green-400 selection:text-green-900 transition-colors hover:text-green-900">
        Proyectos
      </h1>

      {data.length
        ? data.map((project) => {
            const {
              titleProject,
              content,
              urlProject,
              titleTecnologies,
              contentTecnologies,
              image,
            } = project;
            return (
              <Proyecto
                key={titleProject}
                title={titleProject}
                content={content}
                urlProject={urlProject}
                titleTech={titleTecnologies}
                contentTech={contentTecnologies}
                image={image}
              />
            );
          })
        : null}
      <div className="flex flex-col items-center m-4 mb-12 transition-colors hover:animate-pulse hover:text-green-900 delay-100">
        <div className="py-2">
          <VscEmptyWindow size={150} />
        </div>
        <div className="m-2">
          <h1 className="selection:bg-green-400 selection:text-green-900 font-josefin text-2xl">
            Proximamente más proyectos
          </h1>
        </div>
      </div>
    </div>
  );
}

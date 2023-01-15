import Image from "next/image";
import ButtonAbout from "@components/utils/ButtonAbout";
import { ICONS_BY_TECH } from "@constants/icons-by-tech";
import { IMAGE_BY_PROJECT } from "@constants/image-by-project";
import ButtonGithub from "@components/utils/ButtonGithub";

function ProyectoResponsive({
  title,
  content,
  urlProject,
  titleTech,
  contentTech,
  image,
  urlGithub,
}) {
  const imagenByProject = IMAGE_BY_PROJECT.find(
    (project) => project.name === image.alt
  );
  return (
    <div className="flex flex-col max-w-full md:hidden">
      <div className="flex flex-col items-center px-2 py-10">
        <h1 className="text-2xl underline underline-offset-4 font-josefin selection:bg-green-400 selection:text-green-900">
          {title}
        </h1>
        <div className="mt-8 -mb-4">
          <Image
            src={imagenByProject.src}
            alt={image.alt}
            className="rounded-lg transition-all delay-50 duration-500 hover:hue-rotate-180"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-center tracking-wide font-mukta p-4 indent-4 selection:bg-green-400 selection:text-green-900">
          {content}
        </p>
        <div className="flex flex-col items-center px-2">
          <h1 className="text-xl text-center pt-3 font-josefin selection:bg-green-400 selection:text-green-900">
            {titleTech}
          </h1>
          <div className="flex flex-wrap justify-center text-sm py-2">
            {contentTech.length
              ? contentTech.map((content) => {
                  const iconByTech = ICONS_BY_TECH.find(
                    (title) => title.name === content.title
                  );
                  return (
                    <div
                      key={content.title}
                      className="flex items-center pr-2 transition-colors hover:text-green-900"
                    >
                      {iconByTech?.icon}
                      <a
                        href={content.href}
                        target={"_blank"}
                        rel="noreferrer"
                        className="px-1 selection:bg-green-400 selection:text-green-900"
                      >
                        {content.title}
                      </a>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
        <div className="py-2 px-4">
          <ButtonAbout
            text={"Ir a la web"}
            path={urlProject}
            window={"_blank"}
            relation={"noopener noreferrer"}
          />
          <ButtonGithub
            path={urlGithub}
            window={"_blank"}
            relation={"noopener noreferrer"}
          />
        </div>
      </div>
    </div>
  );
}

export default ProyectoResponsive;

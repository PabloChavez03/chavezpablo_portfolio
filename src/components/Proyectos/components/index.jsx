import ProyectoCommon from "./Proyecto/components/ProyectoCommon";
import ProyectoResponsive from "./Proyecto/components/ProyectoResponsive";

function Proyecto({
  title,
  content,
  urlProject,
  titleTech,
  contentTech,
  image,
  urlGithub,
}) {
  return (
    <div className="flex justify-between">
      <ProyectoCommon title={title} content={content} urlProject={urlProject} titleTech={titleTech} contentTech={contentTech} image={image} urlGithub={urlGithub}/>
      <ProyectoResponsive title={title} content={content} urlProject={urlProject} titleTech={titleTech} contentTech={contentTech} image={image} urlGithub={urlGithub}/>
    </div>
  );
}

export default Proyecto;

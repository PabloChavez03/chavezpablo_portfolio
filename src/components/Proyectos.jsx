import Image from "next/image";
import clothes22Pic from "../../public/clothes22.png";
import piFoodPic from "../../public/pifood.png";
import ButtonAbout from "../components/utils/ButtonAbout";
import {
  SiRedux,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiSequelize,
  SiPassport,
} from "react-icons/si";
import { VscEmptyWindow } from "react-icons/vsc";

export default function Proyectos() {
  return (
    <div className="flex flex-col bg-gray-200 w-screen overflow-x-hidden">
      <div className="flex justify-center">
        <h1 className="m-4 py-3 pt-6 text-6xl font-josefin selection:bg-green-400 selection:text-green-900 transition-colors hover:text-green-900">
          Proyectos
        </h1>
      </div>
      <div className="flex justify-between border-y-2 transition-colors hover:border-green-900 hover:border-opacity-50">
        <div className="flex w-2/6 m-4 mr-10 py-14">
          <Image
            src={clothes22Pic}
            alt={"clothes 22 picture"}
            className="rounded-lg transition-all delay-50 duration-500 hover:hue-rotate-180"
          />
        </div>
        <div className="container flex flex-col justify-center">
          <div className="flex justify-between items-center py-2 pb-3">
            <div>
              <h1 className="text-2xl underline underline-offset-4 font-josefin selection:bg-green-400 selection:text-green-900">
                Clothes 22
              </h1>
            </div>
            <div className="pr-4 ">
              <ButtonAbout
                text={"Ir a"}
                path={"https://clothes-22.vercel.app/"}
                window={"_blank"}
                relation={"noopener noreferrer"}
              />
            </div>
          </div>
          <p className="text-justify tracking-wide font-mukta pr-4 indent-4 selection:bg-green-400 selection:text-green-900">
            Desarrollo de un E-commerce que realicé en conjunto a un equipo de
            desarrolladores. La aplicación consta de las características innatas
            de un e-commerce (CRUD de productos, autenticación, catálogo,
            checkout, etc…). Integración de pasarela de pagos con Mercado Pago.
            Envío de emails transaccionales con NodeMailer. Sistema de
            descuentos a productos. Gestión y envío de boletines informativos.
            Administración de carrito de compras y órdenes de productos.
            Administración de usuarios y gestión de claves. Para la toma de
            decisiones del proyecto optamos por metodologías ágiles con sprints
            semanales (SCRUM).
          </p>
          <div>
            <h1 className="text-lg pt-3 font-josefin selection:bg-green-400 selection:text-green-900">
              Tecnologias
            </h1>
            <div className="flex justify-center text-sm ">
              <div className="flex items-center pr-2 transition-colors hover:text-green-900">
                <SiReact />
                <a
                  href="https://es.reactjs.org/"
                  target={"_blank"}
                  rel="noreferrer"
                  className="px-1 selection:bg-green-400 selection:text-green-900"
                >
                  React
                </a>
              </div>
              <div className="flex items-center pr-2 transition-colors hover:text-green-900">
                <SiRedux />
                <a
                  href={"https://es.redux.js.org/"}
                  target={"_blank"}
                  rel="noreferrer"
                  className="px-1 cursor-pointer selection:bg-green-400 selection:text-green-900"
                >
                  Redux
                </a>
              </div>
              <div className="flex items-center pr-2 transition-colors hover:text-green-900">
                <SiNodedotjs />
                <a
                  href="https://nodejs.org/es/"
                  target={"_blank"}
                  rel={"noreferrer"}
                  className="px-1 selection:bg-green-400 selection:text-green-900"
                >
                  Node
                </a>
              </div>
              <div className="flex items-center pr-2 transition-colors hover:text-green-900">
                <SiExpress />
                <a
                  href="http://expressjs.com/"
                  target={"_blank"}
                  rel="noreferrer"
                  className="px-1 selection:bg-green-400 selection:text-green-900"
                >
                  Express
                </a>
              </div>
              <div className="flex items-center pr-2 transition-colors hover:text-green-900">
                <SiPostgresql />
                <a
                  href="https://www.postgresql.org/"
                  target={"_blank"}
                  rel="noreferrer"
                  className="px-1 selection:bg-green-400 selection:text-green-900"
                >
                  PostgreSQL
                </a>
              </div>
              <div className="flex items-center pr-2 transition-colors hover:text-green-900">
                <SiSequelize />
                <a
                  href="https://sequelize.org/"
                  target={"_blank"}
                  rel={"noreferrer"}
                  className="px-1 selection:bg-green-400 selection:text-green-900"
                >
                  Sequelize
                </a>
              </div>
              <div className="flex items-center pr-2 transition-colors hover:text-green-900">
                <SiPassport />
                <a
                  href="https://www.passportjs.org/"
                  target={"_blank"}
                  rel="noreferrer"
                  className="px-1 selection:bg-green-400 selection:text-green-900"
                >
                  Passport
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between border-y-2 transition-colors hover:border-green-900 hover:border-opacity-50">
        <div className="flex w-2/6 m-4 mr-10 py-10">
          <Image
            src={piFoodPic}
            alt={"pi food picture"}
            className="rounded-lg transition-all delay-50 duration-500 hover:hue-rotate-180"
          />
        </div>
        <div className="container flex flex-col justify-center">
          <div className="flex justify-between items-center py-2 pb-3">
            <div>
              <h1 className="text-2xl underline underline-offset-4 font-josefin selection:bg-green-400 selection:text-green-900">
                PI Food
              </h1>
            </div>
            <div className="pr-4">
              <ButtonAbout
                text={"Ir a"}
                path={"https://pi-food-main-opal.vercel.app"}
                window={"_blank"}
                relation={"noopener noreferrer"}
              />
            </div>
          </div>
          <p className="text-justify tracking-wide font-mukta pr-4 indent-4 selection:bg-green-400 selection:text-green-900">
            Desarrollo de una SPA (Single Page Application) utilizando React
            para el Front End y Redux como state management. Todos los
            componentes fueron desarrollados con CSS sin uso de librerias
            externas. La SPA consume datos de una base de datos PostgreSQL a
            través de un Back End desarrollado en NodeJS utilizando Express.
            Algunos características del proyecto: Cache de búsquedas,
            ordenamientos y filtros, formulario controlado para creación de
            recetas.
          </p>
          <p className="text-right text-slate-500 tracking-wide font-mukta pr-4 indent-4 selection:bg-green-400 selection:text-green-900 italic">
            Las recetas originales son extraidas de{" "}
            <a
              className="text-blue-600 after:content-['_↗'] ..."
              href="https://spoonacular.com/food-api"
              target="_blank"
              rel="noreferrer"
            >
              spoonacular
            </a>
          </p>
          <div>
            <h1 className="text-lg pt-3 font-josefin selection:bg-green-400 selection:text-green-900">
              Tecnologias
            </h1>
            <div className="flex justify-center text-sm">
              <div className="flex items-center pr-2 transition-colors hover:text-green-900">
                <SiReact />
                <a
                  href="https://es.reactjs.org/"
                  target={"_blank"}
                  rel="noreferrer"
                  className="px-1 selection:bg-green-400 selection:text-green-900"
                >
                  React
                </a>
              </div>
              <div className="flex items-center pr-2 transition-colors hover:text-green-900">
                <SiRedux />
                <a
                  href={"https://es.redux.js.org/"}
                  target={"_blank"}
                  rel="noreferrer"
                  className="px-1 cursor-pointer selection:bg-green-400 selection:text-green-900"
                >
                  Redux
                </a>
              </div>
              <div className="flex items-center pr-2 transition-colors hover:text-green-900">
                <SiNodedotjs />
                <a
                  href="https://nodejs.org/es/"
                  target={"_blank"}
                  rel={"noreferrer"}
                  className="px-1 selection:bg-green-400 selection:text-green-900"
                >
                  Node
                </a>
              </div>
              <div className="flex items-center pr-2 transition-colors hover:text-green-900">
                <SiExpress />
                <a
                  href="http://expressjs.com/"
                  target={"_blank"}
                  rel="noreferrer"
                  className="px-1 selection:bg-green-400 selection:text-green-900"
                >
                  Express
                </a>
              </div>
              <div className="flex items-center pr-2 transition-colors hover:text-green-900">
                <SiPostgresql />
                <a
                  href="https://www.postgresql.org/"
                  target={"_blank"}
                  rel="noreferrer"
                  className="px-1 selection:bg-green-400 selection:text-green-900"
                >
                  PostgreSQL
                </a>
              </div>
              <div className="flex items-center pr-2 transition-colors hover:text-green-900">
                <SiSequelize />
                <a
                  href="https://sequelize.org/"
                  target={"_blank"}
                  rel={"noreferrer"}
                  className="px-1 selection:bg-green-400 selection:text-green-900"
                >
                  Sequelize
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center m-4 transition-colors hover:animate-pulse hover:text-green-900 delay-100">
        <div className="py-2">
          <VscEmptyWindow size={150} />
        </div>
        <div className="pb-4">
          <h1 className="selection:bg-green-400 selection:text-green-900 font-josefin text-2xl">
            Proximamente más proyectos
          </h1>
        </div>
      </div>
    </div>
  );
}

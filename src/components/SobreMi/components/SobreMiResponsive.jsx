import Image from 'next/image'
import profileCoffe from '@assets/pablitoCoofe.png'
import ButtonAbout from '@components/utils/ButtonAbout'

function SobreMiResponsive () {
  return (
    <div className="md:hidden flex flex-col items-center h-screen w-screen bg-gray-200 overflow-x-hidden">
      <div className="flex flex-col items-center p-8 max-w-sm">
        <h1 className="underline underline-offset-8 my-6 text-4xl font-josefin selection:bg-green-400 selection:text-green-900 transition-colors hover:text-green-900">
          Sobre mí
        </h1>
        <div className="flex flex-col">
          <Image src={profileCoffe} alt={'profile coffe'} />
          <div>
            <h1 className="text-slate-500 italic font-josefin text-base text-center">
              `` La disciplina es el puente entre las metas y los logros. ``
            </h1>
          </div>
        </div>
      </div>
      <div className="p-8 rounded-lg">
        <div className="flex flex-col items-center">
          <p className="text-center tracking-wide text-lg text-green-800 font-mukta">
            Nací y crecí en la ciudad de{' '}
            <a
              href="https://www.google.com/maps/place/Gualeguaych%C3%BA,+Entre+R%C3%ADos/data=!4m2!3m1!1s0x95baa828f3333543:0xa95f93d6a79497c1?sa=X&ved=2ahUKEwjk7MabysT5AhXGl5UCHU98DZ8Q8gF6BAh-EAE"
              target="_blank"
              rel="noopener noreferrer"
              className="underline whitespace-nowrap after:content-['_↗'] ..."
            >
              Gualeguaychú, Entre Ríos, Argentina
            </a>
            . Desde pequeño siempre fui una persona curiosa, dedicada y
            detallista a la hora de aprender o hacer tareas. Hoy con 25 años, y
            con el mismo espíritu tengo el placer de enfocarme en lo que me
            apasiona:
            <span className="font-bold">
              {' '}
              desarrollar y crear soluciones para las personas
            </span>
            . Gracias a esto, a lo largo de mi vida y experiencia como
            desarrollador, me dedico a incrementar mis habilidades para la
            resolución de problemas y el trabajo en equipo, lo que me ha
            proporcionado tener una gran capacidad de aprendizaje de nuevas
            herramientas, tecnologías y buenas habilidades de comunicación.
          </p>
          <div className="flex flex-row justify-between items-center pb-4 pt-10">
            <ButtonAbout path={'/projects'} text={'Mis proyectos'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SobreMiResponsive

import Image from 'next/image'
import profileContact from '@assets/pablitoContact.png'

function ExtraComponent () {
  return (
    <div className="bg-gray-200 h-screen md:h-auto flex items-center px-1 md:px-0 md:bg-transparent md:col-start-5 md:col-end-8">
      <div className="flex flex-col items-center">
          <p className="text-slate-500 italic font-josefin text-base text-center">
            `` Gracias por haberte pasado por aquí. Creé con mucho amor y cariño
            este portafolio, por el momento es pequeño pero con el tiempo irá
            creciendo, tendrá más features, experiencias y MUCHOS MÁS PROYECTOS
            ! ``
          </p>
        <div className="max-w-sm">
          <Image src={profileContact} alt="profile contact picture" />
        </div>
      </div>
    </div>
  )
}

export default ExtraComponent

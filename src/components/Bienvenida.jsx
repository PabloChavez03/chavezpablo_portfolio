import Image from 'next/image'
import profilePic from '../../public/pablito.png'

export default function Bienvenida() {
  return (
    <div className="grid grid-cols-7 gap-4 place-content-center place-items-center m-auto">
      <div className="col-start-1 col-end-5 m-5 p-10">
        <div className="mb-4">
          <div className="mb-4">
            <h1 className="text-amber-400 font-mono">
              Divide y conquistaras
            </h1>
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
      </div>
      <div className="col-start-5 col-end-7 m-5 p-10">
        <div className=''>
          <Image src={profilePic} alt={'profile picture'}/>
        </div>
      </div>
    </div>
  );
}

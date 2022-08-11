import Image from 'next/image';
import { useRef,useState } from 'react';
import ButtonSubmit from './utils/ButtonSubmit';
import profileContact from '../../public/pablitoContact.png'
import emailjs from '@emailjs/browser';

let initialState = {
  user_name: '',
  user_email: '',
  message: '',
}


export default function Contactame() {
  const form = useRef();
  const [input,setInput] = useState(initialState);
  const [err,setErr] = useState(initialState);



  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((prev) => ({
      ...prev,
      [name]: value
    }))
    console.log(input)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input)
    // emailjs.sendForm(process.env.YOUR_SERVICE_ID, process.env.YOUR_TEMPLATE_ID, form.current, process.env.YOUR_PUBLIC_KEY)
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  }

  return (
    <div className="grid grid-cols-7 gap-4 place-content-center place-items-center h-screen bg-gray-200 overflow-x-hidden">
      <div className="col-start-1 col-end-5">
        <div className="m-2 pt-12 p-10">
          <form className="flex flex-col" ref={form} onSubmit={(e) => handleSubmit(e)}>
            <div className="flex flex-col pb-4 mb-2">
              <h1 className="text-4xl py-2 pb-4 font-josefin">Contáctame</h1>
              <p className='font-mukta'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore laboriosam, quidem assumenda quas recusandae incidunt
                debitis, impedit labore ipsum velit totam esse earum natus eaque
                quod enim, facilis est reprehenderit.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row justify-between my-2 py-2">
                <div className="flex flex-col">
                  <label htmlFor="name" className="pb-1 font-mukta after:content-['*'] after:ml-1 after:text-red-500">
                    NOMBRE
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    value={input.user_name}
                    id="name"
                    className="h-9 w-80 px-3 font-mukta bg-green-900 bg-opacity-20 transition-colors focus:shadow-lg focus:bg-green-900 focus:bg-opacity-10 focus:text-green-900 focus:ring-2 focus:ring-green-900 focus:outline-none"
                    autoComplete='off'
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="pb-1 font-mukta after:content-['*'] after:ml-1 after:text-red-500">
                    CORREO
                  </label>
                  <input
                    type="text"
                    name="user_email"
                    value={input.user_email}
                    id="email"
                    className="h-9 w-80 px-3 font-mukta bg-green-900 bg-opacity-20 transition-colors focus:shadow-lg focus:bg-green-900 focus:bg-opacity-10 focus:text-green-900 focus:ring-2 focus:ring-green-900 focus:outline-none"
                    autoComplete='off'
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="pb-1 font-mukta after:content-['*'] after:ml-1 after:text-red-500">MENSAJE</label>
                <textarea
                  name="message"
                  value={input.message}  
                  cols="30"
                  rows="8"
                  className="bg-green-900 px-3 py-2 font-mukta bg-opacity-20 transition-colors focus:shadow-xl focus:bg-green-900 focus:bg-opacity-10 focus:text-green-900 focus:ring-2 focus:ring-green-900 focus:outline-none"
                  autoComplete='off'
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className='flex justify-end pt-2 mt-2'>
                <ButtonSubmit status={input.isEmpty}/>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-start-5 col-end-8 m-4 p-10 pt-12">
        <div className='flex flex-col items-center'>
          <div className='mt-10'>
            <p className='text-slate-500 italic font-josefin text-base text-center'>
              `` Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nam harum quibusdam. Numquam porro, quas natus officia aliquid deleniti omnis, magni reprehenderit totam explicabo labore! `` 
            </p>
          </div>
          <div className='max-w-sm'>
            <Image src={profileContact} alt='profile contact picture'/>
          </div>
        </div>
      </div>
    </div>
  );
}

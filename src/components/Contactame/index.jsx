import { useRef, useState } from "react";
import ButtonSubmit from "@components/utils/ButtonSubmit";
// import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import ExtraComponent from "@components/ExtraComponent";

let initialState = {
  user_name: "",
  user_email: "",
  message: "",
};

export default function Contactame() {
  const form = useRef();
  const [input, setInput] = useState(initialState);
  const [err, setErr] = useState(initialState);

  const validateEmail = (email) => {
    const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    return regex.test(email);
  };

  const validate = (input) => {
    let err = {};

    if (!input.user_name) {
      err.user_name = "Debe ingresar un nombre";
    }
    if (!input.message) {
      err.message = "Debe ingresar un mensaje";
    }
    if (!input.user_email) {
      err.user_email = "Debe ingresar un correo";
    } else if (!validateEmail(input.user_email)) {
      err.user_email = "Debe ingresar un correo valido";
    }
    return err;
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErr(
      validate({
        ...input,
        [name]: value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // emailjs
    //   .sendForm(
    //     process.env.YOUR_SERVICE_ID,
    //     process.env.YOUR_TEMPLATE_ID,
    //     form.current,
    //     process.env.YOUR_PUBLIC_KEY
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    toast.success("Mensaje enviado", {
      position: "bottom-right",
      autoClose: 2500,
      closeOnClick: true,
      pauseOnHover: false,
      theme: "colored",
    });

    setInput({
      user_name: "",
      user_email: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col md:grid md:grid-cols-7 md:gap-4 md:place-content-center md:place-items-center md:w-full min-h-screen bg-gray-200">
      <div className="flex flex-col md:col-start-1 md:col-end-5">
        <div className="flex md:block md:pt-12 p-5 md:p-10">
          <form
            className="flex flex-col"
            ref={form}
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="flex flex-col md:pb-4 md:mb-2">
              <h1 className="underline underline-offset-8 text-4xl py-2 pb-4 font-josefin">
                Contáctame  
              </h1>
              <p className="pt-2 md:pt-0 md:py-0 font-mukta">
                Me encuentro aquí para responder cualquier pregunta que puedas
                tener sobre mi experiencia o servicio. Siempre puedes
                comunicarte conmigo completando el formulario que se encuentra
                debajo o en mis redes sociales, y te responderé tan pronto como
                pueda.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-wrap md:flex-row justify-between my-2 py-2">
                <div className="flex flex-col w-full md:w-auto">
                  <div className="flex justify-between">
                    <label
                      htmlFor="name"
                      className="py-2 md:pb-1 font-mukta after:content-['*'] after:ml-1 after:text-red-500"
                    >
                      NOMBRE
                    </label>
                    <span
                      hidden={!err.user_name}
                      className="before:content-['*'] before:mr-.75  before:text-red-500 text-red-500 italic text-xs"
                    >
                      {err.user_name}
                    </span>
                  </div>
                  <input
                    type="text"
                    name="user_name"
                    value={input.user_name}
                    id="name"
                    className="h-9 md:w-80 px-3 font-mukta bg-green-900 bg-opacity-20 transition-colors focus:shadow-lg focus:bg-green-900 focus:bg-opacity-10 focus:text-green-900 focus:ring-2 focus:ring-green-900 focus:outline-none"
                    autoComplete="off"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col w-full md:w-auto">
                  <div className="flex justify-between">
                    <label
                      htmlFor="email"
                      className="py-2 md:pb-1 font-mukta after:content-['*'] after:ml-1 after:text-red-500"
                    >
                      CORREO
                    </label>
                    <span
                      hidden={!err.user_email}
                      className="before:content-['*'] before:mr-.75 before:text-red-500 text-red-500 italic text-xs"
                    >
                      {err.user_email}
                    </span>
                  </div>
                  <input
                    type="text"
                    name="user_email"
                    value={input.user_email}
                    id="email"
                    className="h-9 md:w-80 px-3 font-mukta bg-green-900 bg-opacity-20 transition-colors focus:shadow-lg focus:bg-green-900 focus:bg-opacity-10 focus:text-green-900 focus:ring-2 focus:ring-green-900 focus:outline-none"
                    autoComplete="off"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full md:w-auto">
                <div className="flex justify-between">
                  <label className="-mt-1 md:mt-0 pb-1 font-mukta after:content-['*'] after:ml-1 after:text-red-500">
                    MENSAJE
                  </label>
                  <span
                    hidden={!err.message}
                    className="before:content-['*'] before:mr-.75 before:text-red-500 text-red-500 italic text-xs"
                  >
                    {err.message}
                  </span>
                </div>
                <textarea
                  name="message"
                  value={input.message}
                  cols="30"
                  rows="8"
                  className="bg-green-900 px-3 py-2 font-mukta bg-opacity-20 transition-colors focus:shadow-xl focus:bg-green-900 focus:bg-opacity-10 focus:text-green-900 focus:ring-2 focus:ring-green-900 focus:outline-none"
                  autoComplete="off"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="flex justify-center md:justify-end pt-2 mt-2">
                <ButtonSubmit
                  status={Object.values(err).length === 0 ? false : true}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden md:block md:col-start-5 md:col-end-8 m-4 p-10 pt-12">
        <ExtraComponent />
      </div>
    </div>
  );
}

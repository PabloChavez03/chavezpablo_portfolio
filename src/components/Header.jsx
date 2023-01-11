import Logo from '@components/Logo'
import Navbar from '@components/Navbar'
import ButtonCV from '@components/utils/ButtonCV'

export default function Header() {
  return (
    <header className='flex items-center justify-around bg-deepGreen-900 p-5 w-full shadow-sm'>
      <Logo />
      <Navbar />
      <div className="hidden md:block">
          <ButtonCV
            text={"Descargar CV"}
            path={
              "https://drive.google.com/file/d/1idb6qGnblRpjzT90rEuOMhS2LL_Uk-zM/view?usp=sharing"
            }
            window={"_blank"}
            relation={"noreferrer"}
          />
        </div>
    </header>
  )
}

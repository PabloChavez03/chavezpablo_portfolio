import Footer from "./Footer";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Header";


export default function Layout({ children }) {
  let route = useRouter()
  let status = route.pathname !== '/' ? false : true;
  return (
    <div className="flex flex-wrap justify-center md:h-screen">
      <Header/>
      {children}
      <ToastContainer/>
      {!status ? null : <Footer/>}
    </div>
  );
}

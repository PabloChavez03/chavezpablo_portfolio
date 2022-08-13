import Footer from "./Footer";
import Navbar from "./Navbar";
import { useRouter } from "next/router";


export default function Layout({ children }) {
  let route = useRouter()
  let status = route.pathname !== '/' ? false : true;
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      {children}
      {!status ? null : <Footer/>}
    </div>
  );
}

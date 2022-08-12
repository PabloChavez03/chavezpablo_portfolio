import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      {children}
      {children.type.name === "Bienvenida" ? <Footer /> : null}
    </div>
  );
}

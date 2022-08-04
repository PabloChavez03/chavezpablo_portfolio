import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar/>
      { children }
    </div>
  );
}

import Link from "next/link";
import ButtonCV from "./utils/ButtonCV";
import { AiOutlineMenu } from "react-icons/ai";
import ResponsiveMenu from "./ResponsiveMenu";
import CommonMenu from "./CommonMenu";

export default function Navbar() {
  return (
    <nav>
      <div className="flex md:flex-wrap justify-between mx-auto items-center">
        <CommonMenu />
        <ResponsiveMenu />
      </div>
    </nav>
  );
}

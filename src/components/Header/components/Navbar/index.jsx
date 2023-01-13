import ResponsiveMenu from "@components/Header/components/Navbar/components/ResponsiveMenu";
import CommonMenu from "@components/Header/components/Navbar/components/CommonMenu";

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

import Image from "next/image";
import profileCoffe from "@assets/pablitoCoofe.png";
import ButtonAbout from "@components/utils/ButtonAbout";
import SobreMiCommon from "./components/SobreMiCommon";
import SobreMiResponsive from "./components/SobreMiResponsive";

export default function SobreMi() {
  return (
    <div>
      <SobreMiCommon />
      <SobreMiResponsive />
    </div>
  );
}

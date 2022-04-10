import { useContext } from "react";
import { HeaderContext } from "../Header";
import MenuBars from "./MenuBars";
import MenuText from "./MenuText";

export default function MenuButton() {
  const { handleMenu } = useContext(HeaderContext);

  return (
    <button type="button" className="menuButton group" onClick={handleMenu}>
      <MenuBars />
      <MenuText />
    </button>
  );
}

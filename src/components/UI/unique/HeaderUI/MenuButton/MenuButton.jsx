import { useContext } from "react";
import { HeaderContext } from "../Header";
import MenuBars from "./MenuBars";
import MenuText from "./MenuText";

export default function MenuButton() {
  const { menuClosed, handleMenu } = useContext(HeaderContext);

  return (
    <button
      type="button"
      className={`menuButton group ${
        menuClosed ? "bg-white" : "bg-white md:bg-transparent"
      }`}
      onClick={handleMenu}
    >
      <MenuBars />
      <MenuText />
    </button>
  );
}

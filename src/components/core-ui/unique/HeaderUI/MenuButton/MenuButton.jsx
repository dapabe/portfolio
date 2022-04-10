import { useContext } from "react";
import { HeaderContext } from "../Header";
import MenuBars from "./MenuBars";
import MenuText from "./MenuText";

export default function MenuButton({ ...props }) {
  const { menuClosed, handleMenu } = useContext(HeaderContext);

  return (
    <button
      type="button"
      className="menuButton group"
      onClick={handleMenu}
      {...props}
    >
      <MenuBars />
      <MenuText />
    </button>
  );
}

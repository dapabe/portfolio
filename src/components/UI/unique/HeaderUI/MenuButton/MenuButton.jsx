import { useContext } from "react";
import { GlobalContext } from "@context/GlobalState";
import MenuBars from "./MenuBars";
import MenuText from "./MenuText";

export default function MenuButton() {
  const { menuClosed, handleMenu } = useContext(GlobalContext);

  return (
    <button
      type="button"
      className={`menuButton group ${
        menuClosed ? "bg-white" : "bg-white md:bg-transparent"
      }`}
      onClick={handleMenu}
    >
      <MenuBars displayCondition={menuClosed} />
      <MenuText displayCondition={menuClosed} />
    </button>
  );
}

import { useContext, useEffect } from "react";
import useFocus from "@hooks/useFocus";
import { GlobalContext } from "@context/GlobalState";

import MenuBars from "./MenuBars";
import MenuText from "./MenuText";

export default function MenuButton() {
  const { isMenuOpen, handleMenu } = useContext(GlobalContext);
  const [MenuRef, setMenuRef] = useFocus();

  //  [BUG] unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering
  //  setting ref directly without useEffect causes it.
  //  Waiting till the component has rendered to apply focus

  useEffect(() => {
    isMenuOpen && setMenuRef();
  }, [isMenuOpen, setMenuRef]);
  return (
    <button
      ref={MenuRef}
      type="button"
      className={`menuButton group ${
        isMenuOpen ? "bg-white" : "bg-white md:bg-transparent"
      }`}
      onClick={handleMenu}
    >
      <MenuBars displayCondition={isMenuOpen} />
      <MenuText displayCondition={isMenuOpen} />
    </button>
  );
}

import { useContext, useEffect } from "react";
import useFocus from "@hooks/useFocus";
import { GlobalContext } from "@context/states";

import MenuBars from "./MenuBars";
import MenuText from "./MenuText";

export default function MenuButton() {
  const { isMenuOpen, handleMenu } = useContext(GlobalContext);
  const [MenuRef, setMenuRef] = useFocus();

  //  [BUG] "unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering"
  //  Updating the ref attribute directly without useEffect causes it, wait till the component
  //  has rendered to apply focus.

  useEffect(() => {
    isMenuOpen && setMenuRef();
  }, [isMenuOpen]);
  return (
    <button
      ref={MenuRef}
      type="button"
      className={`menuButton group ${
        isMenuOpen
          ? "rounded-full bg-white"
          : "rounded-full bg-white md:bg-sutilBlack"
      }`}
      onClick={handleMenu}
    >
      <MenuBars displayCondition={isMenuOpen} />
      <MenuText displayCondition={isMenuOpen} />
    </button>
  );
}

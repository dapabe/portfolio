import { useMemo } from "react";

import useToggle from "@hooks/useToggle";
import useNoScroll from "@hooks/useNoScroll";
import useKeyboard from "@hooks/useKeyboard";
import { GlobalContext } from "@context/states";

//  1.Conditions
//  2.Listeners
export default function GlobalProvider({ children }) {
  const [isMenuOpen, toggleMenu] = useToggle();
  const [isLangOptionsOpen, toggleLangOptions] = useToggle();

  //  1.
  const lockScreenConditions = [isMenuOpen, isLangOptionsOpen].some(Boolean);

  //  2.
  useNoScroll(lockScreenConditions);
  useKeyboard({ key: "m", cb: toggleMenu });

  //=====================================================================

  const memoValues = useMemo(
    () => ({
      isMenuOpen,
      toggleMenu,
      isLangOptionsOpen,
      toggleLangOptions,
      lockScreenConditions,
    }),
    [isMenuOpen, isLangOptionsOpen]
  );

  return (
    <GlobalContext.Provider value={memoValues}>
      {children}
    </GlobalContext.Provider>
  );
}

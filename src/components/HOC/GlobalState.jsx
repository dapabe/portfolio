import { useMemo } from "react";

import useToggle from "@hooks/useToggle";
import useNoScroll from "@hooks/useNoScroll";
import { GlobalContext } from "@context/states";

// import useKeyboard from "@hooks/useKeyboard";

//  TODO:     Map each event case.
//            Fix global bug on key
//            interference with user input.

//  1.On document load.
//  2.Events.
export default function GlobalState({ children }) {
  const [isMenuOpen, handleMenu] = useToggle(false);
  const [isLangOptionsOpen, handleLangOptions] = useToggle(false);
  // const events = [
  //   { key: "m", cb: handleMenu, condition: true },
  //   { key: "Escape", cb: handleMenu, condition: isMenuOpen },
  // ];
  const lockScreenConditions = [isMenuOpen, isLangOptionsOpen].some(Boolean);

  //  1.
  useNoScroll(lockScreenConditions);
  // useKeyboard({ key: "m", cb: handleMenu });

  //=====================================================================

  const memoValues = useMemo(
    () => ({
      isMenuOpen,
      handleMenu,
      isLangOptionsOpen,
      handleLangOptions,
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

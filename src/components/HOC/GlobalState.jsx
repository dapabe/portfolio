import { useMemo } from "react";

import useToggle from "@hooks/useToggle";
import useNoScroll from "@hooks/useNoScroll";
import useKeyboard from "@hooks/useKeyboard";
import { GlobalContext } from "@context/states";

//  TODO:     Map each event case.
//            Fix global bug on key
//            interference with user input.

//  1.Conditions
//  2.Listeners
export default function GlobalState({ children }) {
  const [isMenuOpen, handleMenu] = useToggle(false);
  const [isLangOptionsOpen, handleLangOptions] = useToggle(false);

  //  1.
  const lockScreenConditions = [isMenuOpen, isLangOptionsOpen].some(Boolean);

  //  2.
  useNoScroll(lockScreenConditions);
  useKeyboard({ key: "m", cb: handleMenu });
  // useKeyboard({
  //   key: "Escape",
  //   cb: handleMenu,
  //   condition: isMenuOpen === true,
  // });

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

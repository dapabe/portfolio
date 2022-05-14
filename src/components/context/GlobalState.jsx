import { createContext, useMemo } from "react";

import useToggle from "@hooks/useToggle";
import useNoScroll from "@hooks/useNoScroll";
// import useKeyboard from "@hooks/useKeyboard";

export const GlobalContext = createContext({});

//  TODO:     Map each event case.
//            Fix global bug on key
//            interference with user input.

//  1.On document load.
//  2.Events.
export default function GlobalState({ children }) {
  const [isMenuOpen, handleMenu] = useToggle(false);

  // const events = [
  //   { key: "m", cb: handleMenu, condition: true },
  //   { key: "Escape", cb: handleMenu, condition: isMenuOpen },
  // ];

  //  1.
  useNoScroll(isMenuOpen);
  // useKeyboard({ key: "m", cb: handleMenu });

  //  2.
  const closeAndResetPage = () => {
    handleMenu();
    setTimeout(() => window.scroll(0, 0), 200);
  };

  //=====================================================================

  const memoValues = useMemo(
    () => ({
      isMenuOpen,
      handleMenu,
      closeAndResetPage,
    }),
    [isMenuOpen]
  );

  return (
    <GlobalContext.Provider value={memoValues}>
      {children}
    </GlobalContext.Provider>
  );
}

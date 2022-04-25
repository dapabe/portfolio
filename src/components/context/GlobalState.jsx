import { createContext, useMemo } from "react";

import useToggle from "@hooks/useToggle";
import useNoScroll from "@hooks/useNoScroll";
import useKeyboard from "@hooks/useKeyboard";

export const GlobalContext = createContext({});

//  1.On document load.
//  2.Events.
export default function GlobalState({ children }) {
  const [isMenuOpen, handleMenu] = useToggle(); //  Initialized as false

  // const events = [
  //   { key: "m", cb: handleMenu, condition: true },
  //   { key: "Escape", cb: handleMenu, condition: isMenuOpen },
  // ];

  //  1.
  useNoScroll(isMenuOpen);
  useKeyboard({ key: "m", cb: handleMenu }); //  TODO: map each event case.
  //  2.
  const closeAndResetPage = () => {
    handleMenu();
    setTimeout(() => window.scroll(0, 0), 200);
  };
  //=====================================================================
  const values = useMemo(
    () => ({
      isMenuOpen,
      handleMenu,
      closeAndResetPage,
    }),
    [isMenuOpen, handleMenu]
  );

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
}

import { createContext, useMemo } from "react";

import useToggle from "@hooks/useToggle";
import useNoScroll from "@hooks/useNoScroll";
import useKeyboard from "@hooks/useKeyboard";
import usePageOffset from "@hooks/usePageOffset";

export const GlobalContext = createContext({});

const scrollTop = () => window.scroll(0, 0);

//  1.On document load.
//  2.Events.
export default function GlobalState({ children }) {
  const [isMenuOpen, handleMenu] = useToggle(); //  Initialized as false
  const scrollDelay = usePageOffset() ? 300 : 0; //  Detect page scrolled > Height amount

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
    setTimeout(() => {
      scrollTop();
    }, scrollDelay);
  };
  const values = useMemo(
    () => ({
      isMenuOpen,
      handleMenu,
      closeAndResetPage,
      scrollTop,
    }),
    [isMenuOpen, handleMenu]
  );

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
}

import { createContext } from "react";

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

  //  1.
  useNoScroll(isMenuOpen);
  useKeyboard(handleMenu);
  //  2.
  const closeAndResetPage = () => {
    handleMenu();
    setTimeout(() => {
      scrollTop();
    }, scrollDelay);
  };

  return (
    <GlobalContext.Provider
      value={{ isMenuOpen, handleMenu, closeAndResetPage, scrollTop }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

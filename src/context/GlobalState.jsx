import { createContext } from "react";

import useToggle from "@hooks/useToggle";
import useNoScroll from "@hooks/useNoScroll";
import usePageOffset from "@hooks/usePageOffset";

export const GlobalContext = createContext({});

//  1.Stops scrolling on Modal opened.
//  2.Event: window scrolls to the top.
export default function GlobalState({ children }) {
  const [menuClosed, handleMenu] = useToggle(); //  Initialized as false
  const scrollDelay = usePageOffset() ? 300 : 0; //  Detect page scrolled > Height amount

  //  1.
  useNoScroll(menuClosed);

  //  2.
  const CloseAndResetPage = () => {
    handleMenu();
    setTimeout(() => {
      window.scroll(0, 0);
    }, scrollDelay);
  };

  return (
    <GlobalContext.Provider
      value={{ menuClosed, handleMenu, CloseAndResetPage }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

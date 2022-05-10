import { useContext, useRef } from "react";
import { GlobalContext } from "@context/GlobalState";

import Backdrop from "../Backdrop";
import NavRoutes from "./NavRoutes.jsx";
import SocialLinks from "../SocialLinks";

export default function Menu() {
  const { isMenuOpen, handleMenu, closeAndResetPage } =
    useContext(GlobalContext);
  const Modal = useRef(null);

  //  Not selectable if menu is closed.   <- refactor for better keyboard exp
  const NotSelectable = {
    ...(!isMenuOpen && { tabIndex: -1 }),
  };

  const isOpen = isMenuOpen
    ? "z-20 delay-500 opacity-100"
    : "-z-50 opacity-0 -translate-y-[200%]";

  return (
    <section
      role="dialog"
      className={`menuContainer ${isMenuOpen ? "z-20" : "-z-50"}`}
      ref={Modal}
    >
      <Backdrop displayCondition={isMenuOpen} onClick={handleMenu} />
      <nav className={`menu ${isOpen}`} aria-labelledby="modal">
        <ul className="menuLinks">
          <NavRoutes onClick={closeAndResetPage} />
        </ul>
        <div className="flex justify-evenly sm:flex-col sm:justify-end sm:space-y-4">
          <SocialLinks />
        </div>
      </nav>
    </section>
  );
}

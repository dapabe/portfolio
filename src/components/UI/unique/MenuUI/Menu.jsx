import { useContext, useRef } from "react";
import { GlobalContext } from "@context/GlobalState";

import Backdrop from "../Backdrop";
import NavRoutes from "./NavRoutes.jsx";
import SocialLinks from "../SocialLinks";

export default function Menu() {
  const { isMenuOpen, handleMenu, closeAndResetPage, notSelectable } =
    useContext(GlobalContext);
  const Modal = useRef(null);

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
          <NavRoutes onClick={closeAndResetPage} {...notSelectable} />
        </ul>
        <div className="flex justify-evenly sm:flex-col sm:justify-end sm:space-y-4">
          <SocialLinks {...notSelectable} />
        </div>
      </nav>
    </section>
  );
}
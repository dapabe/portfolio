import { useContext, useRef } from "react";
import { GlobalContext } from "@context/states";
import { notSelectable } from "@utils/reusable";

import Backdrop from "../Backdrop";
import NavRoutes from "./NavRoutes.jsx";
import SocialLinks from "@ui/reusable/SocialLinks";

export default function Menu() {
  const { isMenuOpen, handleMenu } = useContext(GlobalContext);
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
          <NavRoutes onClick={handleMenu} {...notSelectable(!isMenuOpen)} />
        </ul>
        <div className="mt-auto flex justify-evenly">
          <SocialLinks {...notSelectable(!isMenuOpen)} />
        </div>
      </nav>
    </section>
  );
}

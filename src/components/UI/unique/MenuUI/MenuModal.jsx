import { useContext, useRef } from "react";
import { createPortal } from "react-dom";
import { GlobalContext } from "@context/GlobalState";

import routesData from "@src/assets/routes.json";
import CustomLink from "@ui/react-router/CustomLink";
import Backdrop from "../Backdrop";
import SocialLinks from "../SocialLinks";

const ROUTES = routesData.links;

function LI_Routes({ conditionalProp, ...props }) {
  const { closeAndResetPage } = props;

  return ROUTES.map(({ to, text }) => (
    <li key={text}>
      <CustomLink {...to} onClick={closeAndResetPage} {...conditionalProp}>
        {text}
      </CustomLink>
    </li>
  ));
}
function Menu() {
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
      <nav className={`menu ${isOpen}`} tabIndex="-1" aria-labelledby="modal">
        <ul className="menuLinks">
          <LI_Routes
            conditionalProp={NotSelectable}
            onClick={closeAndResetPage}
          />
        </ul>
        <div className="flex justify-evenly sm:flex-col sm:justify-end sm:space-y-4">
          <SocialLinks {...NotSelectable} />
        </div>
      </nav>
    </section>
  );
}

export default function MenuModal() {
  return createPortal(<Menu />, document.getElementById("menu-root"));
}

import { useContext, useRef } from "react";
import { GlobalContext } from "@context/GlobalState";

import routesData from "@src/assets/routes.json";
import CustomLink from "@ui/react-router/CustomLink";
import Backdrop from "../Backdrop";
import SocialLinks from "../SocialLinks";

const ROUTES = routesData.links;

export default function MenuModal() {
  const { isMenuOpen, handleMenu, closeAndResetPage } =
    useContext(GlobalContext);
  const Modal = useRef(null);

  //  Not selectable if menu is closed.   <- refactor for better keyboard exp
  const NotSelectable = {
    ...(!isMenuOpen && { tabIndex: -1 }),
  };
  const LI_Routes = () =>
    ROUTES.map(({ to, text }) => (
      <li key={text}>
        <CustomLink to={to} onClick={closeAndResetPage}>
          {text}
        </CustomLink>
      </li>
    ));

  const isOpen = isMenuOpen
    ? "z-20 delay-500 opacity-100"
    : "-z-50 opacity-0 -translate-y-[200%]";

  return (
    <section
      className={`menuContainer ${isMenuOpen ? "z-20" : "-z-50"}`}
      ref={Modal}
    >
      <Backdrop displayCondition={isMenuOpen} onClick={handleMenu} />
      <nav
        className={`menu ${isOpen}`}
        // role="dialog"
        tabIndex="-1"
        aria-labelledby="modal"
      >
        <ul className="menuLinks">
          <LI_Routes />
        </ul>
        <div className="flex justify-evenly sm:flex-col sm:justify-end sm:space-y-4">
          <SocialLinks />
        </div>
      </nav>
    </section>
  );
}

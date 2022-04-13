import { useContext } from "react";
import { GlobalContext } from "@context/GlobalState";

import routesData from "@src/assets/routes.json";
import Backdrop from "../Backdrop";
import SocialLinks from "../SocialLinks";
import CustomLink from "@ui/router/CustomLink";

const ROUTES = routesData.links;

export default function MenuModal() {
  const { menuClosed, handleMenu, CloseAndResetPage } =
    useContext(GlobalContext);

  //  Not selectable if menu is closed.   <- refactor for better keyboard exp
  const NotSelectable = {
    ...(!menuClosed && { tabIndex: -1 }),
  };
  const LI_Routes = () =>
    ROUTES.map(({ to, text }) => (
      <li key={text}>
        <CustomLink
          type="primary"
          to={to}
          onClick={CloseAndResetPage}
          {...NotSelectable}
        >
          {text}
        </CustomLink>
      </li>
    ));

  const isOpen = menuClosed
    ? "z-20 delay-500 opacity-100"
    : "-z-50 opacity-0 -translate-y-[200%]";

  return (
    <section className={`menuContainer ${menuClosed ? "z-20" : "-z-50"}`}>
      <Backdrop displayCondition={menuClosed} onClick={handleMenu} />
      <nav className={`menu ${isOpen}`}>
        <ul className="menuLinks">
          <LI_Routes />
        </ul>
        <div className="flex justify-evenly sm:flex-col sm:justify-end sm:space-y-4">
          <SocialLinks {...NotSelectable} />
        </div>
      </nav>
    </section>
  );
}

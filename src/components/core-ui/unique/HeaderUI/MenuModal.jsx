import { useContext } from "react";
import { HeaderContext } from "./Header";

import useNoScroll from "@hooks/useNoScroll";
import usePageOffset from "@hooks/usePageOffset";

import ROUTES from "@src/assets/routes.json";
import Backdrop from "../Backdrop";
import SocialLinks from "../SocialLinks";
import CustomLink from "@ui/common/CustomLink";

//  Stops scrolling on Modal opened,
//  on anchor selection go window scroll on Y.
export default function MenuModal() {
  const { menuClosed, handleMenu } = useContext(HeaderContext);
  useNoScroll(menuClosed);
  const scrollTime = usePageOffset() ? 300 : 0;
  const closeModal = handleMenu;
  const CloseAndResetPage = () => {
    closeModal();
    setTimeout(() => {
      window.scroll(0, 0);
    }, scrollTime);
  };

  //  Not selectable if menu is closed.   <- refactor
  const NotSelectable = {
    ...(!menuClosed && { tabIndex: -1 }),
  };
  const LI_Routes = ({ ...attr }) =>
    ROUTES.map((element) => (
      <li key={element.text}>
        <CustomLink
          type="primary"
          {...element}
          onClick={CloseAndResetPage}
          {...attr}
        >
          {element.text}
        </CustomLink>
      </li>
    ));

  const isOpen = menuClosed
    ? "z-20 delay-500 opacity-100"
    : "-z-50 opacity-0 -translate-y-[200%]";

  return (
    <section className={`menuContainer ${menuClosed ? "z-20" : "-z-50"}`}>
      <Backdrop onClick={closeModal} />
      <nav className={`menu ${isOpen}`}>
        <ul className="menuLinks">
          <LI_Routes {...NotSelectable} />
        </ul>
        <div className="flex justify-evenly sm:flex-col sm:justify-end sm:space-y-4">
          <SocialLinks {...NotSelectable} />
        </div>
      </nav>
    </section>
  );
}

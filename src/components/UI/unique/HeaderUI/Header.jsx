import { useContext, Suspense, lazy } from "react";
import { GlobalContext } from "@context/GlobalState";

import SkipNav from "./SkipNav";
import CustomLink from "@ui/react-router/CustomLink";
import LangSwitch from "./LangSwitch";
import MenuButton from "./MenuButton/MenuButton";
import SocialLinks from "../SocialLinks";
import Backdrop from "../Backdrop";
import OverlayBars from "./OverlayBars";
const MenuModal = lazy(() => import("./MenuModal"));

export default function Header() {
  const { isMenuOpen, closeAndResetPage } = useContext(GlobalContext);

  //  TODO: Switch Langs, Toggle Light/Dark Theme,
  //  better keyboard navigation.
  return (
    <header>
      <SkipNav />
      <OverlayBars />

      <CustomLink
        to="/"
        className="brandLogo"
        onClick={isMenuOpen ? closeAndResetPage : () => window.scroll(0, 0)}
      >
        dpb
      </CustomLink>
      {/* <LangSwitch/> */}

      <MenuButton />
      <Suspense fallback={<Backdrop displayCondition={isMenuOpen} />}>
        <MenuModal />
      </Suspense>
      <aside className={`sidebar ${!isMenuOpen ? "opacity-100" : "opacity-0"}`}>
        <SocialLinks />
      </aside>
    </header>
  );
}

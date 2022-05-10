import { useContext } from "react";
import { GlobalContext } from "@context/GlobalState";

import SkipNav from "./SkipNav";
import CustomLink from "@ui/react-router/CustomLink";
import LangSwitch from "./LangSwitch";
import MenuButton from "./MenuButton/MenuButton";
import SocialLinks from "../SocialLinks";
import OverlayBars from "./OverlayBars";

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
      <aside className={`sidebar ${isMenuOpen ? "-z-50 opacity-0" : ""}`}>
        <SocialLinks />
      </aside>
    </header>
  );
}

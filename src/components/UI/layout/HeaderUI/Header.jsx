import { useContext } from "react";
import { GlobalContext } from "@context/states";

import SkipNav from "./SkipNav";
import CustomLink from "@ui/reusable/CustomLink";
// import LangSwitch from "./LangSwitch";
import MenuButton from "./MenuButton/MenuButton";

import OverlayBars from "./OverlayBars";
import SocialLinks from "@ui/reusable/SocialLinks";

export default function Header() {
  const { isMenuOpen, handleMenu } = useContext(GlobalContext);

  //  TODO: Switch Langs, Toggle Light/Dark Theme,
  //  better keyboard navigation.
  return (
    <header>
      <SkipNav />
      <OverlayBars>
        <CustomLink
          href="/"
          className="brandLogo"
          onClick={isMenuOpen && handleMenu}
        >
          dpb
        </CustomLink>
      </OverlayBars>

      {/* <LangSwitch/> */}

      <MenuButton />
      {!isMenuOpen && (
        <aside className="sidebar">
          <SocialLinks />
        </aside>
      )}
    </header>
  );
}

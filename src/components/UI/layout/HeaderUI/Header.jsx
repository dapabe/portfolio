import { useContext } from "react";
import { GlobalContext } from "@context/states";

import SkipNav from "./SkipNav";
import CustomLink from "@ui/reusable/CustomLink";
import LangSwitch from "./LangSwitch";
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
          className="ml-2 text-3xl tracking-wider"
          onClick={isMenuOpen && handleMenu}
        >
          dpb
        </CustomLink>
        <LangSwitch />
        {!isMenuOpen && <SocialLinks />}
      </OverlayBars>

      <MenuButton />
    </header>
  );
}

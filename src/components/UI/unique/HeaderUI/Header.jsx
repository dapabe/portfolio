import { useContext } from "react";
import { GlobalContext } from "@context/GlobalState";

import SkipNav from "./SkipNav";
import CustomLink from "@ui/router/CustomLink";
import LangSwitch from "./LangSwitch";
import MenuButton from "./MenuButton/MenuButton";
import SocialLinks from "../SocialLinks";
import MenuModal from "./MenuModal";

export default function Header() {
  const { menuClosed, closeAndResetPage, scrollTop } =
    useContext(GlobalContext);

  //  TODO: Switch Langs, Toggle Light/Dark Theme,
  //  better keyboard navigation.
  return (
    <header>
      <SkipNav />

      <CustomLink
        to="/"
        className="brandLogo"
        onClick={menuClosed ? closeAndResetPage : scrollTop}
      >
        dpb
      </CustomLink>
      {/* <LangSwitch/> */}

      <MenuButton />
      <MenuModal />
      <aside className={`sidebar ${!menuClosed ? "opacity-100" : "opacity-0"}`}>
        <SocialLinks />
      </aside>
    </header>
  );
}

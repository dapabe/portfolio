import { createContext } from "react";
import useToggle from "@hooks/useToggle";
import SkipNav from "./SkipNav";
import BrandLogo from "./BrandLogo";
import LangSwitch from "./LangSwitch";
import MenuButton from "./MenuButton/MenuButton";
import SocialLinks from "../SocialLinks";
import MenuModal from "./MenuModal";

export const HeaderContext = createContext({});

export default function Header() {
  const [menuClosed, handleMenu] = useToggle(); //  false

  //  TODO: Switch Langs, Toggle Light/Dark Theme,
  //  better keyboard navigation.
  return (
    <header>
      <SkipNav />
      <BrandLogo />
      {/* <LangSwitch/> */}
      <HeaderContext.Provider value={{ menuClosed, handleMenu }}>
        <MenuButton />
        <MenuModal />
        <aside
          className={`sidebar ${!menuClosed ? "opacity-100" : "opacity-0"}`}
        >
          <SocialLinks />
        </aside>
      </HeaderContext.Provider>
    </header>
  );
}

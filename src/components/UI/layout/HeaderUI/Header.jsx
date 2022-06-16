import { useContext } from "react";
import { GlobalContext } from "@context/states";

import SkipNav from "./SkipNav";
import CustomLink from "@ui/reusable/CustomLink";
import LangSwitch from "./LangSwitch";
import MenuButton from "./MenuButton/MenuButton";

import OverlayBars from "./OverlayBars";
import Backdrop from "../Backdrop";
import SocialLinks from "@ui/reusable/SocialLinks";

//  TODO: Toggle Light/Dark Theme,
//  better keyboard navigation.
export default function Header() {
  const {
    isMenuOpen,
    isLangOptionsOpen,
    handleMenu,
    handleLangOptions,
    lockScreenConditions,
  } = useContext(GlobalContext);

  const backdropHandler = () => {
    if (isMenuOpen && isLangOptionsOpen) {
      handleMenu();
      handleLangOptions();
    }
    if (isLangOptionsOpen) return handleLangOptions();
  };
  return (
    <header>
      <SkipNav />
      <OverlayBars
        topBar={[
          <CustomLink
            href="/"
            className="ml-2 text-3xl tracking-wider"
            onClick={isMenuOpen && handleMenu}
          >
            dpb
          </CustomLink>,
          <LangSwitch />,
        ]}
        rightBar={conditionalComponent(SocialLinks, !isMenuOpen)}
      />
      {lockScreenConditions && <Backdrop onClick={backdropHandler} />}
      <MenuButton />
    </header>
  );
}

const conditionalComponent = (WrappedComponent, displayCondition) =>
  displayCondition && <WrappedComponent />;

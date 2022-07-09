import { useContext } from "react";
import { GlobalContext } from "@context/states";

import SkipNav from "./SkipNav";
import CustomLink from "@ui/reusable/CustomLink";
import LangSwitch from "./LangSwitch";
import MenuButton from "./MenuButton/MenuButton";

import OverlayBars from "./OverlayBars";
import Backdrop from "../Backdrop";
import SocialLinks from "@ui/reusable/SocialLinks";
import { useTranslations } from "next-intl";

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
    if (isMenuOpen) handleMenu();
    if (isLangOptionsOpen) handleLangOptions();
  };

  return (
    <header>
      <SkipNav />
      <OverlayBars {...barChildren(isMenuOpen, handleMenu)} />
      {lockScreenConditions && <Backdrop onClick={backdropHandler} />}
      <MenuButton />
    </header>
  );
}

const barChildren = (condition, callback) => {
  const t = useTranslations("global");

  return {
    topBar: [
      <CustomLink
        linkProps={{ href: "/" }}
        className="ml-2 text-3xl tracking-wider"
        onClick={condition && callback}
        aria-labelledby={t("logo_a11y")}
        title={t("logo_a11y")}
      >
        dpb
      </CustomLink>,
      <LangSwitch />,
    ],
    rightBar: !condition && <SocialLinks />,
  };
};

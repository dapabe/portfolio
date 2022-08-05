import { useContext } from "react";
import { GlobalContext } from "@context/states";

import SkipNav from "./SkipNav";
import CustomLink from "@shared/randoms/CustomLink";
import SocialLinks from "@shared/SocialLinks";
import LangSwitch from "./LangSwitch";
import MenuButton from "./MenuButton/MenuButton";

import OverlayBars from "./OverlayBars";
import Backdrop from "../Backdrop";
import { useTranslations } from "next-intl";

//  TODO: Toggle Light/Dark Theme,
//  better keyboard navigation.
export default function Header() {
  const t = useTranslations("global");
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
      <OverlayBars
        topBar={[
          <CustomLink
            linkProps={{ href: "/" }}
            className="ml-2 text-3xl tracking-wider"
            onClick={isMenuOpen && handleMenu}
            aria-labelledby={t("logo_a11y")}
            title={t("logo_a11y")}
          >
            dpb
          </CustomLink>,
          <LangSwitch />,
        ]}
        rightBar={!isMenuOpen && <SocialLinks />} />
      {lockScreenConditions && <Backdrop onClick={backdropHandler} />}
      <MenuButton />
    </header>
  );
}


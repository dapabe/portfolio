import { useContext, useEffect } from "react";
import { GlobalContext } from "@context/states";

import MenuBars from "./MenuBars";
import MenuText from "./MenuText";
import { useTranslations } from "next-intl";

export default function MenuButton() {
  const { isMenuOpen, toggleMenu, isLangOptionsOpen } =
    useContext(GlobalContext);
  const t = useTranslations("global");

  //  [BUG] "unstable_flushDiscreteUpdates: Cannot flush
  //        updates when React is already rendering"
  //  Updating the ref attribute directly without
  //  useEffect causes it, wait till the component
  //  has rendered to apply focus.

  if (isLangOptionsOpen && !isMenuOpen) return null;

  return (
    <button
      type="button"
      title={t("btn_menu_a11y")}
      aria-labelledby={t("btn_menu_a11y")}
      className={`group left-4 bottom-2 z-30 flex -rotate-90 flex-col items-center rounded-full bg-white md:left-0 md:bottom-1/2 md:translate-y-1/2 ${
        isMenuOpen ? "" : " md:bg-sutilBlack"
      }`}
      onClick={toggleMenu}
    >
      <MenuBars displayCondition={isMenuOpen} />
      <MenuText displayCondition={isMenuOpen} />
    </button>
  );
}

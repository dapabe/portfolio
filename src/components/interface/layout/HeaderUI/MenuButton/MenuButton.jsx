import { useContext, useEffect } from "react";
import { GlobalContext } from "@context/states";

import MenuBars from "./MenuBars";
import MenuText from "./MenuText";
import { useTranslations } from "next-intl";

export default function MenuButton() {
  const { isMenuOpen, handleMenu, isLangOptionsOpen } =
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
      className={`menuButton group ${
        isMenuOpen
          ? "rounded-full bg-white"
          : "rounded-full bg-white md:bg-sutilBlack"
      }`}
      onClick={handleMenu}
    >
      <MenuBars displayCondition={isMenuOpen} />
      <MenuText displayCondition={isMenuOpen} />
    </button>
  );
}

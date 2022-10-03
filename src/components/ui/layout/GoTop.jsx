import { useContext } from "react";
import { GlobalContext } from "@context/states";
import useElementOffset from "@hooks/useElementOffset";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";

export default function GoTop() {
  const { isMenuOpen, isLangOptionsOpen } = useContext(GlobalContext);
  const { isOffset } = useElementOffset();
  const t = useTranslations("global");

  const hasScrolled = [isOffset, !isMenuOpen, !isLangOptionsOpen].every(
    Boolean
  );
  return (
    hasScrolled && (
      <a
        href="#main"
        className="fixed right-4 bottom-2 z-20 w-12 rounded-md border-2 border-sutilBlack bg-white text-sutilBlack transition-[opacity_transform] hover:scale-105"
        aria-labelledby={t("btn_goTop_a11y")}
        title={t("btn_goTop_a11y")}
      >
        <ChevronDoubleUpIcon />
      </a>
    )
  );
}

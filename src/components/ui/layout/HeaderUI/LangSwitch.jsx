import { useContext } from "react";
import { GlobalContext } from "@context/states";
import Link from "next/link";
import { useRouter } from "next/router";
import { sugarUnshift } from "@helpers/randoms";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";

export default function LangSwitch() {
  const { locales, locale, pathname } = useRouter();
  const { isLangOptionsOpen, toggleLangOptions } = useContext(GlobalContext);
  const t = useTranslations("global");
  const modifiedLocales = sugarUnshift(locales, locale);

  const openOptions = isLangOptionsOpen ? "absolute" : "hidden";
  return (
    <div className="relative mr-2">
      <button
        type="button"
        className="rounded-sm px-1 transition-colors hover:bg-red-500"
        onClick={toggleLangOptions}
        aria-labelledby={t("btn_lang_a11y")}
        title={t("btn_lang_a11y")}
      >
        <span className="uppercase">
          {locale}
          <sup>
            <ChevronDownIcon className="inline-block w-5" />
          </sup>
        </span>
      </button>
      <ol
        className={`${openOptions} top-0 right-0 rounded-sm bg-white text-left tracking-wider `}
      >
        {modifiedLocales.map((lang) => (
          <li
            key={lang}
            className="px-3 py-2 text-black first:bg-red-500 first:text-white"
          >
            <Link href={pathname} locale={lang} scroll={false} prefetch={false}>
              <a onClick={toggleLangOptions}>{langTextSwitcher(lang)}</a>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

const langTextSwitcher = (string) => {
  switch (string) {
    case "en":
      return "English";
    default:
      return "Español";
  }
};

import { useContext } from "react";
import { GlobalContext } from "@context/states";
import Link from "next/link";
import { useRouter } from "next/router";
import { sugarSplice } from "@utils/reusable";

import { ChevronDownIcon } from "@heroicons/react/solid";

export default function LangSwitch() {
  const { locales, asPath, locale } = useRouter();
  const { isMenuOpen, isLangOptionsOpen, handleMenu, handleLangOptions } =
    useContext(GlobalContext);

  const clickActions = () => {
    if (isMenuOpen && isLangOptionsOpen) {
      handleMenu();
      handleLangOptions();
    }
    return handleLangOptions();
  };
  const modifiedLocales = sugarSplice(locales, locale);
  const openOptions = isLangOptionsOpen ? "absolute" : "hidden";
  return (
    <div className="relative mr-2">
      <button
        type="button"
        className="rounded-sm px-1 transition-colors hover:bg-red-500"
        onClick={handleLangOptions}
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
            <Link
              href={asPath}
              locale={lang}
              scroll={false}
              prefetch={false}
              passHref
            >
              <a onClick={clickActions}>{langTextSwitcher(lang)}</a>
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

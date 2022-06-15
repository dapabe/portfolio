import { useContext } from "react";
import { GlobalContext } from "@context/states";

import Link from "next/link";
import { useRouter } from "next/router";

import Backdrop from "../Backdrop";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function LangSwitch() {
  const { locales, asPath, defaultLocale } = useRouter();
  const { isMenuOpen, isLangOptionsOpen, handleLangOptions, handleMenu } =
    useContext(GlobalContext);

  const openOptions = isLangOptionsOpen ? "absolute" : "hidden";

  const clickActions = () => {
    isMenuOpen && handleMenu();

    return handleLangOptions();
  };

  return (
    <>
      {!isMenuOpen && (
        <Backdrop
          displayCondition={isLangOptionsOpen}
          onClick={handleLangOptions}
        />
      )}
      <div className="relative mr-2">
        <button
          type="button"
          className="rounded-sm px-1 transition-colors hover:bg-red-500"
          onClick={handleLangOptions}
        >
          <span className="uppercase">
            {defaultLocale}
            <sup>
              <ChevronDownIcon className="inline-block w-5" />
            </sup>
          </span>
        </button>
        <ol
          className={`${openOptions} top-0 right-0 rounded-sm border bg-white text-left text-black`}
        >
          {locales.map((lang) => (
            <li key={lang} className={`px-2 py-1 `}>
              <Link href={asPath} locale={lang}>
                <a onClick={clickActions}>{langTextSwitcher(lang)}</a>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </>
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

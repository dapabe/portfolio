import { useContext, useEffect } from "react";
import { GlobalContext } from "@context/states";
import { notSelectable } from "@helpers/randoms";
import { useRouter } from "next/router";
import useFocus from "@src/components/hooks/useFocus";

import routesData from "@src/assets/routes.json";
import CustomLink from "@shared/randoms/CustomLink";
import SocialLinks from "@shared/SocialLinks";

export default function Menu() {
  const { isMenuOpen, handleMenu } = useContext(GlobalContext);
  const [MenuRef, setMenuRef] = useFocus();

  useEffect(() => {
    isMenuOpen && setMenuRef();
  }, [isMenuOpen]);

  return (
    <section
      className={`pointer-events-none inset-0 flex justify-center sm:justify-start sm:px-24 ${
        isMenuOpen ? "z-20" : "-z-50"
      }`}
    >
      <nav
        ref={MenuRef}
        className={`before:btriangle-tl after:btriangle-tr pointer-events-auto relative flex h-2/3 max-w-xs flex-grow flex-col bg-orange-500 px-6 pt-10 text-3xl transition-transform before:absolute before:top-[95%] before:left-0 before:border-[6rem] before:border-orange-500 after:absolute after:top-[95%] after:right-0 after:border-[6rem] after:border-orange-500 ${
          isMenuOpen
            ? "z-20 opacity-100 delay-500"
            : "-z-50 -translate-y-[200%] opacity-0"
        }`}
        aria-labelledby="modal"
      >
        <ul className="mt-auto flex w-max flex-col gap-y-4">
          <NavRoutes onClick={handleMenu} {...notSelectable(!isMenuOpen)} />
        </ul>
        <div className="mt-auto mb-10 flex justify-evenly">
          <SocialLinks {...notSelectable(!isMenuOpen)} />
        </div>
      </nav>
    </section>
  );
}

const NavRoutes = ({ ...props }) => {
  const { locale, pathname, prefetch } = useRouter();

  //  Refactor this
  //  This should be elsewhere
  useEffect(() => {
    routesData.forEach(({ href }) => {
      if (pathname !== href) return prefetch(href);
    });
  }, []);

  return routesData.map(({ text, ...attr }) => (
    <li key={attr.href}>
      <CustomLink linkProps={{ ...attr }} {...props}>
        {text?.[locale] ?? text}
      </CustomLink>
    </li>
  ));
};

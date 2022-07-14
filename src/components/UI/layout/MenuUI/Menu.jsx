import { useContext, useEffect } from "react";
import { GlobalContext } from "@context/states";
import { notSelectable } from "@utils/reusable";
import { useRouter } from "next/router";
import useFocus from "@src/components/hooks/useFocus";

import routesData from "@src/assets/routes.json";
import CustomLink from "@ui/reusable/CustomLink";
import SocialLinks from "@ui/reusable/SocialLinks";

export default function Menu() {
  const { isMenuOpen, handleMenu } = useContext(GlobalContext);
  const [MenuRef, setMenuRef] = useFocus();

  const isOpen = isMenuOpen
    ? "z-20 delay-500 opacity-100"
    : "-z-50 opacity-0 -translate-y-[200%]";

  useEffect(() => {
    isMenuOpen && setMenuRef();
  }, [isMenuOpen]);

  return (
    <section className={`menuContainer ${isMenuOpen ? "z-20" : "-z-50"}`}>
      <nav ref={MenuRef} className={`menu ${isOpen}`} aria-labelledby="modal">
        <ul className="menuLinks">
          <NavRoutes onClick={handleMenu} {...notSelectable(!isMenuOpen)} />
        </ul>
        <div className="mt-auto flex justify-evenly">
          <SocialLinks {...notSelectable(!isMenuOpen)} />
        </div>
      </nav>
    </section>
  );
}

const NavRoutes = ({ ...props }) => {
  const { locale, pathname, prefetch } = useRouter();

  //  Refactor this
  useEffect(() => {
    routesData.forEach(({ href }) => {
      if (pathname !== href) return prefetch(href);
    });
  }, []);

  return routesData.map(({ text, ...attr }) => (
    <li key={attr.href}>
      <CustomLink linkProps={{ ...attr }} {...props}>
        {text[locale]}
      </CustomLink>
    </li>
  ));
};

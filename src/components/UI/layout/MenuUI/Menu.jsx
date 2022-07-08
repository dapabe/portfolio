import { useContext } from "react";
import { GlobalContext } from "@context/states";
import { notSelectable } from "@utils/reusable";

import NavRoutes from "./NavRoutes.jsx";
import SocialLinks from "@ui/reusable/SocialLinks";

export default function Menu() {
  const { isMenuOpen, handleMenu } = useContext(GlobalContext);

  const isOpen = isMenuOpen
    ? "z-20 delay-500 opacity-100"
    : "-z-50 opacity-0 -translate-y-[200%]";

  return (
    <section className={`menuContainer ${isMenuOpen ? "z-20" : "-z-50"}`}>
      <nav className={`menu ${isOpen}`} aria-labelledby="modal">
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

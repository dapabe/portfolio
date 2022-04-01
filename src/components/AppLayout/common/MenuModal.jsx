import React from "react";
import { Link } from "react-router-dom";
import useStopScroll from "@hooks/useStopScroll";

import ROUTES from "@src/assets/routes.json";
import Backdrop from "./Backdrop";
import SocialLinks from "./SocialLinks";

export default function MenuModal({ initialState, ...props }) {
  useStopScroll(initialState);
  const closeModal = props.onClick;
  const CloseAndResetPage = () => [closeModal(), window.scroll(0, 0)];
  const isOpen = initialState
    ? "z-20 delay-500 opacity-100"
    : "-z-50 opacity-0 -translate-y-[200%]";

  return (
    <section className={`menuContainer ${!initialState ? "-z-50" : "z-20"}`}>
      {initialState && <Backdrop onClick={closeModal} />}
      <nav className={`menu ${isOpen}`}>
        <ul className="flex w-max flex-col gap-y-4 self-center ">
          {ROUTES.map((element) => (
            <li key={element.text}>
              {React.createElement(
                Link,
                {
                  ...element,
                  onClick: () => CloseAndResetPage(),
                },
                element.text
              )}
            </li>
          ))}
        </ul>
        <div className="flex justify-evenly sm:flex-col sm:justify-end sm:space-y-4">
          <SocialLinks />
        </div>
      </nav>
    </section>
  );
}

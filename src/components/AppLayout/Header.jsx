import { useState } from "react";
import useToggle from "@hooks/useToggle";
import {
  BrandLogo,
  MenuModal,
  SkipNav,
  SocialLinks,
  MenuButton,
} from "./common/exports";

export default function Header() {
  const [buttonState, handleButton] = useToggle();
  return (
    <header>
      <SkipNav />
      <BrandLogo />
      {/* <LangSwitch/> */}
      <MenuButton initialState={buttonState} onClick={handleButton} />
      {!buttonState && (
        <aside className="sidebar">
          <SocialLinks />
        </aside>
      )}
      <MenuModal initialState={buttonState} onClick={handleButton} />
    </header>
  );
}

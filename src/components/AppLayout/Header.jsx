import { useState } from "react";
import {
  BackToTop,
  Backdrop,
  BrandLogo,
  MenuModal,
  SkipNav,
  SocialLinks,
  MenuButton,
} from "./Minis/exports";

export default function Header() {
  const [buttonState, setButtonState] = useState(false);
  const handleButtonState = () => {
    setButtonState(!buttonState);
  };
  return (
    <>
      <header>
        <SkipNav />
        <BrandLogo />
        {/* <LangSwitch/> */}
        <aside className="sidebar">{!buttonState && <SocialLinks />}</aside>
      </header>
      <MenuButton initialState={buttonState} onClick={handleButtonState} />
      <MenuModal initialState={buttonState}>
        {buttonState && <Backdrop onClick={handleButtonState} />}
      </MenuModal>
      <BackToTop />
    </>
  );
}

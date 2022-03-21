import { useState } from "react";
import {
  Backdrop,
  BrandLogo,
  MenuModal,
  SkipNav,
  SocialLinks,
  MenuButton,
} from "./Content/exports";

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
    </>
  );
}

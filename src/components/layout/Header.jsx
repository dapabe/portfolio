import { useState } from "react";
import { Backdrop, Brand, MenuModal, SkipNav } from "./MicroComponents/Minis";
import SocialLinks from "./MicroComponents/SocialLinks";
import MenuButton from "./MicroComponents/MenuButton";

export default function Header() {
  const [buttonState, setButtonState] = useState(false);
  const handleButtonState = () => {
    setButtonState(!buttonState);
  };
  return (
    <>
      <header>
        <SkipNav />
        <Brand />
        {/* <LangSwitch/> */}
        <SocialLinks />
      </header>
      <MenuButton initialState={buttonState} onClick={handleButtonState} />
      <MenuModal initialState={buttonState}>
        {buttonState && <Backdrop onClick={handleButtonState} />}
      </MenuModal>
    </>
  );
}

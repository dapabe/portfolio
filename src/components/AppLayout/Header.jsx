import { useState } from "react";
import {
  BrandLogo,
  MenuModal,
  SkipNav,
  SocialLinks,
  MenuButton,
} from "./common/exports";

export default function Header() {
  const [buttonState, setButtonState] = useState(false);
  const handleButtonState = () => {
    setButtonState(!buttonState);
  };
  return (
    <header>
      <SkipNav />
      <BrandLogo />
      {/* <LangSwitch/> */}
      <MenuButton initialState={buttonState} onClick={handleButtonState} />
      {!buttonState && (
        <aside className="sidebar">
          <SocialLinks />
        </aside>
      )}
      <MenuModal initialState={buttonState} onClick={handleButtonState} />
    </header>
  );
}

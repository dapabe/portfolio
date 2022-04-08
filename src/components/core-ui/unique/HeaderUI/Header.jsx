import useToggle from "@hooks/useToggle";
import SkipNav from "./SkipNav";
import BrandLogo from "./BrandLogo";
import LangSwitch from "./LangSwitch";
import MenuButton from "./MenuButton";
import SocialLinks from "../SocialLinks";
import MenuModal from "./MenuModal";

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

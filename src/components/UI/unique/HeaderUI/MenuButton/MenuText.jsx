import { useContext } from "react";
import { HeaderContext } from "../Header";

const Letters = [
  { letter: "M", className: "group-hover:-translate-y-[5px]" },
  { letter: "E", className: "group-hover:translate-y-[2px]" },
  { letter: "N", className: "group-hover:translate-y-[4.5px]" },
  { letter: "U", className: "group-hover:-translate-y-[6px]" },
];

export default function MenuText() {
  const { menuClosed } = useContext(HeaderContext);
  const device = {
    small: "hidden",
    desktop: "hidden md:flex",
  };
  return (
    <ol
      translate="no"
      className={`menuText ${menuClosed ? device.small : device.desktop}`}
    >
      {Letters.map(({ letter, className }) => (
        <li key={letter} className={`transition-transform ${className}`}>
          {letter}
        </li>
      ))}
    </ol>
  );
}

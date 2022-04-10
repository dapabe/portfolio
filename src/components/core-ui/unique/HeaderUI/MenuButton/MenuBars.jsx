import { useContext } from "react";
import { HeaderContext } from "../Header";

const WHnClosed = "h-5 bg-sutilBlack md:bg-white md:group-hover:h-7 ",
  WHnOpen =
    "absolute h-10 left-1/2 -translate-x-1/2 bg-sutilBlack md:group-hover:h-11 ";
const Bars = [
  {
    id: "bar1",
    closed: WHnClosed,
    open: WHnOpen + "rotate-45",
  },
  {
    id: "bar2",
    closed: "h-8 md:group-hover:h-4 bg-sutilBlack md:bg-white",
    open: "opacity-0",
  },
  {
    id: "bar3",
    closed: WHnClosed,
    open: WHnOpen + "-rotate-45",
  },
];
export default function MenuBars() {
  const { menuClosed } = useContext(HeaderContext);
  return (
    <ul className="menuBars">
      {Bars.map(({ id, closed, open }) => (
        <li key={id} className={menuClosed ? open : closed} />
      ))}
    </ul>
  );
}

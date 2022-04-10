import { useContext } from "react";
import { HeaderContext } from "../Header";

const WHnClosed = "h-6 w-1 md:h-4 md:w-[.20rem] md:group-hover:h-6",
  WHnOpen = "absolute h-10 w-1 md:h-8 md:w-[.20rem] left-1/2 -translate-x-1/2 ";
const Bars = [
  {
    id: "bar1",
    closed: WHnClosed,
    open: WHnOpen + "rotate-45",
  },
  {
    id: "bar2",
    closed: "h-6 w-1 md:w-[.20rem] md:group-hover:h-3",
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
    <ul className={`menuBars ${menuClosed ? "gap-x-0" : "gap-x-1"}`}>
      {Bars.map(({ id, closed, open }) => (
        <li key={id} className={menuClosed ? open : closed} />
      ))}
      {/* <div
        className={`${initial} ${
          menuClosed
            ? "h-3 w-[3px] group-hover:h-6"
            : "absolute h-2/3 w-[2px] rotate-45 group-hover:scale-110 sm:bg-slate-700"
        } transition-[scale_rotate]`}
      />
      <div
        className={`${
          menuClosed
            ? "mx-1 h-6 w-[3px] opacity-100 group-hover:h-3" + initial
            : "opacity-0"
        } transition-[scale_opacity]`}
      />
      <div
        className={`${initial} ${
          menuClosed
            ? " h-3 w-[3px] group-hover:h-6"
            : "absolute h-2/3 w-[2px] -rotate-45 group-hover:scale-110 sm:bg-slate-700"
        } transition-[scale_rotate]`}
      /> */}
    </ul>
  );
}

import { useContext } from "react";
import { HeaderContext } from "../Header";

const initialClass = "rounded-full bg-sutilBlack";
const Bars = [
  {
    id: "bar1",
    initClass: initialClass + " transition-[scale_rotate]",
    closed: "h-4 w-0.5",
    open: "h-3 w-[3px]",
  },
  {
    id: "bar2",
    initClass: initialClass + "transition-[scale_opacity]",
    closed: "h-6 w-0.5 opacity-100 group-hover:h-3",
    open: "opacity-0",
  },
  {
    id: "bar3",
    initClass: initialClass + "transition-[scale_rotate]",
    closed: "h-2/3 w-0.5",
    open: "h-3 w-[3px]",
  },
];
export default function MenuBars() {
  const { menuClosed } = useContext(HeaderContext);
  return (
    <ul className="menuBars">
      {Bars.map(({ id, initClass, closed, open }) => (
        <li key={id} className={`${initClass} ${menuClosed ? closed : open}`} />
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

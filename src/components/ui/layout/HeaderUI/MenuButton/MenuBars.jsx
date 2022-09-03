const WHnOpen =
  "absolute h-10 left-1/2 -translate-x-1/2 bg-sutilBlack md:group-hover:h-11 ";
const WHnClosed = "h-5 bg-sutilBlack md:bg-white md:group-hover:h-7 ";

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

export default function MenuBars({ displayCondition }) {
  return (
    <ul className="relative flex h-14 w-14 place-content-center gap-x-1 rounded-full border-2 border-sutilBlack md:group-active:border-0">
      {Bars.map(({ id, closed, open }) => (
        <li
          key={id}
          className={`w-1 self-center rounded-full transition-[translate_opacity] ${
            displayCondition ? open : closed
          }`}
        />
      ))}
    </ul>
  );
}

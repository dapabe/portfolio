const bars = [
  "h-10 w-full z-30",
  "w-10 right-0 h-[calc(100%-2.5rem)] translate-x-full md:translate-x-0 flex flex-col items-center justify-center gap-y-4",
  "h-10 right-0 bottom-0 w-[calc(100%-2.5rem)] translate-y-full md:translate-y-0",
  "w-10 bottom-0 h-[calc(100%-2.5rem)] -translate-x-full md:translate-x-0",
];

export default function OverlayBars({ children }) {
  return bars.map((classes, i) => (
    <div
      key={i}
      className={`${classes} bg-sutilBlack transition-transform ease-in-out`}
    >
      {!i && children[0]}
      {i === 1 && children[1]}
    </div>
  ));
}

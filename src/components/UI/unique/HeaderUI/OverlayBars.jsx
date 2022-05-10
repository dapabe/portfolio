const bars = [
  "h-10 w-full",
  "w-10 right-0 h-[calc(100%-2.5rem)] translate-x-full sm:translate-x-0",
  "h-10 right-0 bottom-0 w-[calc(100%-2.5rem)] translate-y-full sm:translate-y-0",
  "w-10 bottom-0 h-[calc(100%-2.5rem)] -translate-x-full sm:translate-x-0",
];

export default function OverlayBars() {
  return bars.map((classes, i) => (
    <div
      key={i}
      className={`${classes} pointer-events-none bg-sutilBlack transition-transform ease-in-out`}
    />
  ));
}

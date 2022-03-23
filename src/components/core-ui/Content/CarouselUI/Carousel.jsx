import PlayButton from "./PlayButton";

export default function Carousel({ initialState, handler, children }) {
  return (
    <div className="relative my-4 w-full overflow-hidden">
      <ul
        style={{ animationPlayState: initialState ? "paused" : "running" }}
        className="pauseHover flex h-max w-[calc(200px*18)] animate-scroll "
      >
        {children}
      </ul>
      <PlayButton initialState={initialState} onClick={handler} />
    </div>
  );
}

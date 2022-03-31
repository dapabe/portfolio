import PlayButton from "./PlayButton";

export default function Carousel({ initialState, handler, children }) {
  return (
    <div className="relative w-full overflow-hidden">
      <ul
        style={{ animationPlayState: initialState ? "paused" : "running" }}
        className={`flex h-max w-[${200 * children.length}px] animate-scroll`}
      >
        {children}
      </ul>
      <PlayButton initialState={initialState} onClick={handler} />
    </div>
  );
}

import PlayButton from "./PlayButton";

export default function Carousel({ initialState, handler, children }) {
  return (
    <div className="relative w-full overflow-hidden">
      <ul
        style={{ animationPlayState: initialState ? "paused" : "running" }}
        className={`flex h-max w-[calc(200px*${
          children.length * 2
        })] animate-scroll`}
      >
        {children}
      </ul>
      <PlayButton initialState={initialState} onClick={handler} />
    </div>
  );
}

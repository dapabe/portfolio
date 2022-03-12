export default function Carousel({ children, fn, state }) {
  let bgCodeClasses =
    "opacity-0 group-hover:opacity-100 group-active:opacity-100 absolute top-0 left-1/2 w-20 transition-opacity delay-150";
  let iconSizes = "h-full w-full";
  const PlayBtn = () => {
    return state ? (
      <span className={bgCodeClasses}>
        {/* <PlayIcon className={iconSizes} /> */}
      </span>
    ) : (
      <span className={bgCodeClasses}>
        {/* <StopIcon className={iconSizes} /> */}
      </span>
    );
  };
  return (
    <div className="group relative z-0 my-6 w-full overflow-hidden">
      {/* <PlayBtn /> */}
      <button
        tabIndex="-1"
        className={`relative h-max w-full outline-none outline-2 before:absolute before:left-0
        before:top-0 before:z-[1] before:h-full before:w-2/5 before:bg-gradient-to-r  before:from-sutilBlack before:to-transparent before:content-[''] after:absolute
        after:right-0 after:top-0 after:z-[1] after:h-full after:w-2/5 after:rotate-180 after:bg-gradient-to-r  after:from-sutilBlack after:to-transparent after:content-['']`}
        onClick={fn}
        title={!state ? "Pausar carrusel" : "Resumir carrusel"}
      >
        <div
          style={{ animationPlayState: state ? "paused" : "running" }}
          className="pauseHover flex h-max w-[calc(200px*18)] animate-scroll "
        >
          {children}
        </div>
      </button>
    </div>
  );
}

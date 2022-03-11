// import { ReactComponent as PlayIcon } from "./images/ion_play.svg";
// import { ReactComponent as StopIcon } from "./images/ion_pause.svg";

export const CustomCard = ({ link, image, alt, title, description }) => {
  return (
    <article className="cardBg flex max-h-max min-h-[15rem] min-w-[16rem] max-w-xs flex-col rounded transition-transform hover:scale-105">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        title="Ir al repertorio de Github"
        className="p-4"
      >
        <figure className="relative min-w-[5rem] bg-red-500">
          <img src={image} alt={alt} className="max-w-full rounded" />
          <figcaption className="absolute bottom-0  w-full bg-slate-600 indent-2 text-sm">
            {title}
          </figcaption>
        </figure>
        <p className="mt-2 rounded bg-[#2c2c54] py-1.5 indent-2 text-sm">
          {description}
        </p>
      </a>
    </article>
  );
};
export const VaporSun = () => {
  let lineArr = [];
  for (let i = 0; i < 10; i++) {
    lineArr.push(
      <div
        className={`
        bg-vapor-blue absolute -bottom-[6vw] h-[10%] w-full animate-[wave_10s_linear_infinite] `}
        style={{ animationDelay: `-${[i]}s` }}
        key={[i]}
      />
    );
  }
  return (
    <>
      <div className="flex h-full w-full items-center justify-center">
        <div className="relative flex h-[30vw] w-[30vw] items-center justify-center overflow-hidden">
          <div
            className={`sun animate-colorRotation
                    h-[inherit] w-[inherit] rounded-full transition`}
          />
          {lineArr}
        </div>
      </div>
    </>
  );
};

export const Carousel = ({ children, fn, state }) => {
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
        className={`before:from-sutilBlack after:from-sutilBlack relative h-max w-full outline-none outline-2
        before:absolute before:left-0 before:top-0 before:z-[1] before:h-full  before:w-2/5 before:bg-gradient-to-r before:to-transparent before:content-['']
        after:absolute after:right-0 after:top-0 after:z-[1] after:h-full after:w-2/5 after:rotate-180  after:bg-gradient-to-r after:to-transparent after:content-['']`}
        onClick={fn}
        title={!state ? "Pausar carrusel" : "Resumir carrusel"}
      >
        <div
          style={{ animationPlayState: state ? "paused" : "running" }}
          className="animate-scroll pauseHover flex h-max w-[calc(200px*18)] "
        >
          {children}
        </div>
      </button>
    </div>
  );
};

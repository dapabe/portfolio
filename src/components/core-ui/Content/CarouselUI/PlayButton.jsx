import { PlayIcon, StopIcon } from "@heroicons/react/solid";

export default function PlayButton({ initialState, ...props }) {
  const bgIcon =
    "opacity-0 group-hover:opacity-100 group-active:opacity-100 absolute top-0 left-1/2 w-20 transition-opacity delay-150";
  let iconSizes = "h-full w-full";
  const ButtonState = () => {
    return initialState ? (
      <i className={bgIcon}>
        <PlayIcon className={iconSizes} />
      </i>
    ) : (
      <i className={bgIcon}>
        <StopIcon className={iconSizes} />
      </i>
    );
  };
  return (
    <button
      className="relative"
      title={!initialState ? "Pausar carrusel" : "Resumir carrusel"}
      {...props}
    >
      <ButtonState />
    </button>
  );
}

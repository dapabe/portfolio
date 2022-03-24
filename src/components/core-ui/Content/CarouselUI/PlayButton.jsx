import { PlayIcon, StopIcon } from "@heroicons/react/solid";

export default function PlayButton({ initialState, ...props }) {
  const bgIcon =
    "opacity-0 group-hover:opacity-100 group-active:opacity-100 w-20 transition-opacity";
  const iconSizes = "h-full w-full";
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
      className="group absolute inset-0 flex justify-center"
      title={!initialState ? "Pausar carrusel" : "Resumir carrusel"}
      {...props}
    >
      <ButtonState />
    </button>
  );
}

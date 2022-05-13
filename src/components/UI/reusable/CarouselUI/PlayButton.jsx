import { PlayIcon, StopIcon } from "@heroicons/react/solid";

export default function PlayButton({ initialState, ...props }) {
  const bgIcon =
    "opacity-0 group-hover:opacity-100 group-active:opacity-100 w-20 transition-opacity";
  const iconSizes = "h-full w-full";
  return (
    <button
      className="group absolute inset-0 flex justify-center"
      title={initialState ? "Resumir carrusel" : "Pausar carrusel"}
      {...props}
    >
      {initialState ? (
        <i className={bgIcon}>
          <PlayIcon className={iconSizes} />
        </i>
      ) : (
        <i className={bgIcon}>
          <StopIcon className={iconSizes} />
        </i>
      )}
    </button>
  );
}

import { useState } from "react";
import { PlayIcon, StopIcon } from "@heroicons/react/solid";

const iconSizes = "h-full w-full";

export default function PlayButton({ initialState, cb }) {
  const [firstTime, setFirstTime] = useState(true);

  const displayButton = `w-20 transition-opacity ${
    !firstTime && "opacity-0 group-hover:opacity-100 group-active:opacity-100"
  }`;
  return (
    <button
      type="button"
      className="group absolute inset-0 flex justify-center"
      title={initialState ? "Resumir carrusel" : "Pausar carrusel"}
      onClick={() => {
        setFirstTime(false);
        cb();
      }}
    >
      {initialState ? (
        <i className={displayButton}>
          <PlayIcon className={iconSizes} />
        </i>
      ) : (
        <i className={displayButton}>
          <StopIcon className={iconSizes} />
        </i>
      )}
    </button>
  );
}

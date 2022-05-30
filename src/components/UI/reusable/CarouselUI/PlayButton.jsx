import { useContext } from "react";
import { CarouselAnimation } from "@context/states";
import { PlayIcon, StopIcon } from "@heroicons/react/solid";

export default function PlayButton() {
  const { firstWatch, setFirstWatch, isPaused, handlePause } =
    useContext(CarouselAnimation);
  const displayButton = `transition-opacity ${
    !firstWatch && "opacity-0 group-hover:opacity-100 group-active:opacity-100"
  }`;

  return (
    <button
      type="button"
      className="group absolute inset-0 flex justify-center"
      title={isPaused ? "Resumir" : "Pausar"}
      onClick={() => {
        setFirstWatch(false);
        handlePause();
      }}
    >
      {isPaused ? (
        <i className={displayButton}>
          <PlayIcon className="w-20" />
        </i>
      ) : (
        <i className={displayButton}>
          <StopIcon className="w-20" />
        </i>
      )}
    </button>
  );
}

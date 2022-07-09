import { useContext } from "react";
import { CarouselAnimation } from "@context/states";
import { PlayIcon, StopIcon } from "@heroicons/react/solid";
import { useTranslations } from "next-intl";

export default function PlayButton() {
  const { firstWatch, setFirstWatch, isPaused, handlePause } =
    useContext(CarouselAnimation);
  const displayButton = `transition-opacity ${
    !firstWatch && "opacity-0 group-hover:opacity-100 group-active:opacity-100"
  }`;
  const t = useTranslations("global.btn_carousel");

  return (
    <button
      type="button"
      className="group absolute inset-0 flex justify-center"
      aria-labelledby={isPaused ? t("resume") : t("pause")}
      title={isPaused ? t("resume") : t("pause")}
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

import { useContext, useEffect, useMemo, useRef } from "react";
import { CarouselAnimation } from "@context/states";
import { PlayIcon, StopIcon } from "@heroicons/react/solid";
import { useTranslations } from "next-intl";



export default function Carousel({ ...props }) {
  const { children } = props;
  const t = useTranslations("global.btn_carousel");
  const { isPaused, firstWatch, setFirstWatch, togglePause } =
    useContext(CarouselAnimation);

  const displayButton = `transition-opacity ${!firstWatch && "opacity-0 group-hover:opacity-100 group-active:opacity-100"}`;


  return (
    <div className="relative w-full overflow-hidden">
      <ul
        className="animate-slide whitespace-nowrap"
        style={{ animationPlayState: isPaused ? "paused" : "running" }}
      >
        {children.map((child, idx) => (
          <li key={idx} style={{ display: "inline-block" }}>
            {child}
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="group absolute inset-0 flex justify-center"
        aria-labelledby={isPaused ? t("resume") : t("pause")}
        title={isPaused ? t("resume") : t("pause")}
        onClick={() => {
          setFirstWatch(false);
          togglePause();
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
    </div>
  );
}
// const animationName = "justa-anim-autoSlide";
// const keyFramesHor = (animName, childWidth, quantity) => `
//   @keyframes ${animName} {
//     from {
//       -webkit-transform: translateX(0);
//       ms-transform: translateX(0);
//       transform: translateX(0);
//     }
//     to {
//       -webkit-transform: translateX(calc(${childWidth}px * ${quantity}));
//       ms-transform: translateX(calc(${childWidth}px * ${quantity}));
//       transform:  translateX(calc(${childWidth}px * ${quantity}));
//     }
//   }
// `;

// const keyFramesVert = (animName, childWidth, quantity) => `
//   @keyframes ${animName} {
//     from {
//       -webkit-transform: translateX(calc(${childWidth}px * ${quantity}));
//       ms-transform: translateX(calc(${childWidth}px * ${quantity}));
//       transform:  translateX(calc(${childWidth}px * ${quantity}));
//     }
//     to {
//       -webkit-transform: translateX(0);
//       ms-transform: translateX(0);
//       transform: translateX(0);
//     }
//   }
// `
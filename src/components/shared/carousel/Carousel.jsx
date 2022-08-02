import { useContext, useEffect, useRef } from "react";
import { CarouselAnimation } from "@context/states";
import { PlayIcon, StopIcon } from "@heroicons/react/solid";
import { useTranslations } from "next-intl";

const animationName = "autoSlide";

export default function Carousel({ ...props }) {
  const { invertDir = false, style = null, children } = props;

  const { isPaused, firstWatch, setFirstWatch, handlePause } =
    useContext(CarouselAnimation);
  const animationRef = useRef(null);

  const displayButton = `transition-opacity ${
    !firstWatch && "opacity-0 group-hover:opacity-100 group-active:opacity-100"
  }`;

  const t = useTranslations("global.btn_carousel");

  useEffect(() => {
    let styleSheet = document.styleSheets[0];
    styleSheet.insertRule(
      keyFrames(animationName, invertDir ? 160 : -160, children.length / 2),
      styleSheet.cssRules.length
    );
  }, [invertDir]);

  return (
    <div className="relative w-full overflow-hidden">
      <ul
        ref={animationRef}
        style={{
          whiteSpace: "nowrap",
          animation: `${children.length}s linear 0s infinite normal none ${
            isPaused ? "paused" : "running"
          } ${animationName}`,
          WebkitAnimation: `${
            children.length
          }s linear 0s infinite normal none ${
            isPaused ? "paused" : "running"
          } ${animationName}`,
          MozAnimation: `${children.length}s linear 0s infinite normal none ${
            isPaused ? "paused" : "running"
          } ${animationName}`,
          ...style,
        }}
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
    </div>
  );
}

const keyFrames = (animName, dir, quantity) => `
  @keyframes ${animName} {
    from {
      -webkit-transform: translateX(0);
      ms-transform: translateX(0);
      transform: translateX(0);
    }
    to {
      -webkit-transform: translateX(calc(${dir}px * ${quantity}));
      ms-transform: translateX(calc(${dir}px * ${quantity}));
      transform:  translateX(calc(${dir}px * ${quantity})); 
    }
  }
`;

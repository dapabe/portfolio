import { useContext } from "react";
import { CarouselAnimation } from "@context/states";
import PlayButton from "./PlayButton";

export default function Carousel({ children }) {
  const { isPaused } = useContext(CarouselAnimation);

  return (
    <div className="relative w-full overflow-hidden">
      <ul
        style={{ animationPlayState: isPaused ? "paused" : "running" }}
        className={`animate-slide whitespace-nowrap `}
      >
        {children.map((child, idx) => (
          <li key={idx} className="inline-block align-top">
            {child}
          </li>
        ))}
      </ul>
      <PlayButton />
    </div>
  );
}

import { useContext } from "react";
import { CarouselAnimation } from "@context/UI";
import PlayButton from "./PlayButton";

export default function Carousel({ children }) {
  const { isPaused } = useContext(CarouselAnimation);

  return (
    <div className="relative w-full overflow-hidden">
      <ul
        style={{ animationPlayState: isPaused ? "paused" : "running" }}
        className={`flex h-max w-[${
          100 * children.length
        }px] animate-scroll gap-x-4`}
      >
        {children.map((child, idx) => (
          <li key={idx}>{child}</li>
        ))}
      </ul>
      <PlayButton />
    </div>
  );
}

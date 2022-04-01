import { useState } from "react";
import PlayButton from "./PlayButton";

export default function Carousel({ children }) {
  const [pause, setPause] = useState(false);
  const handlePause = () => {
    setPause(!pause);
  };
  return (
    <div className="relative w-full overflow-hidden">
      <ul
        style={{ animationPlayState: pause ? "paused" : "running" }}
        className={`flex h-max w-[${200 * children.length}px] animate-scroll`}
      >
        {children}
      </ul>
      <PlayButton initialState={pause} onClick={handlePause} />
    </div>
  );
}

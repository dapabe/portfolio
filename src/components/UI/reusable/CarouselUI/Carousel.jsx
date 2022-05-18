import useToggle from "@hooks/useToggle";
import PlayButton from "./PlayButton";

export default function Carousel({ children }) {
  const [pause, handlePause] = useToggle(true);

  return (
    <div className="relative w-full overflow-hidden">
      <ul
        style={{ animationPlayState: pause ? "paused" : "running" }}
        className={`flex h-max w-[${
          200 * children.length
        }px] animate-scroll gap-x-4`}
      >
        {children.map((child, idx) => (
          <li key={idx}>{child}</li>
        ))}
      </ul>
      <PlayButton initialState={pause} cb={handlePause} />
    </div>
  );
}

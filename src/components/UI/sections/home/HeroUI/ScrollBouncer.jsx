import { ArrowSmDownIcon } from "@heroicons/react/outline";

export default function ScrollBouncer({ displayCondition }) {
  return (
    <small
      className={`${
        displayCondition ? "left-[90%] sm:left-5" : "right-0"
      } absolute bottom-10 animate-xBounce whitespace-nowrap leading-none tracking-widest sm:bottom-20`}
    >
      &larr; Scroll
    </small>
  );
}

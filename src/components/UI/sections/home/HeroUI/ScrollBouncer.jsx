import { ArrowSmDownIcon } from "@heroicons/react/outline";

export default function ScrollBouncer({ displayCondition }) {
  return (
    <small
      className={`${
        displayCondition ? "-right-4 sm:left-5 md:right-auto" : "-right-4"
      } absolute bottom-16 animate-xBounce whitespace-nowrap leading-none tracking-widest sm:bottom-20`}
    >
      &larr; Scroll
    </small>
  );
}

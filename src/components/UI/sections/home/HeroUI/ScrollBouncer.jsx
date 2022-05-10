import { ArrowSmDownIcon } from "@heroicons/react/outline";

export default function ScrollBouncer({ displayCondition }) {
  return (
    <div
      className={`${
        displayCondition ? "left-[95%] sm:left-10" : "right-0"
      } absolute bottom-0 animate-bounce text-xs text-champagnePink sm:bottom-10`}
    >
      <div className="absolute -top-7 -right-3 -rotate-90 tracking-widest">
        Scroll
      </div>
      <ArrowSmDownIcon className="w-5" />
    </div>
  );
}

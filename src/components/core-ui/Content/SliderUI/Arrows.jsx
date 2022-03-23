import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import React from "react";

export default function Arrows({ prevSlide, nextSlide, children }) {
  const btnContainer =
    "absolute left-1/2 z-10 flex h-[15%] w-full -translate-x-1/2 justify-center from-sutilBlack via-sutilBlack/40 to-transparent";
  const btnClass =
    "rounded-md bg-slate-600 hover:bg-slate-700 transition-colors h-min p-2 self-center";
  return (
    <>
      <span className={`${btnContainer} top-0 bg-gradient-to-b`}>
        <button onClick={prevSlide} className={btnClass}>
          <ChevronUpIcon className="w-8" />
        </button>
      </span>
      {children}
      <span className={`${btnContainer} bottom-0 bg-gradient-to-t`}>
        <button onClick={nextSlide} className={btnClass}>
          <ChevronDownIcon className="w-8" />
        </button>
      </span>
    </>
  );
}

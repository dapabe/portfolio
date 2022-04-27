import React from "react";

export default function Intro({ displayCondition }) {
  const hasScrolledIntro = `${displayCondition} mt-40 ml-4 sm:ml-24 font-bold text-xl self-center translate-y-1/2 tracking-wide space-y-2`;
  const scrollIntoView = displayCondition
    ? "translate-y-0"
    : "translate-y-6 opacity-0";
  const CAP = ({ children }) => <span className="text-white">{children}</span>;
  return (
    <div className={hasScrolledIntro}>
      <h1
        className={`${scrollIntoView} text-4xl transition-[translate_opacity] delay-300`}
      >
        <CAP>Da</CAP>niel <CAP>P.</CAP> <CAP>Be</CAP>cerra
      </h1>
      <p
        className={`${scrollIntoView} font-medium text-white transition-[translate_opacity] delay-500`}
      >
        Futuro Desarrollador Full-Stack.
      </p>
    </div>
  );
}

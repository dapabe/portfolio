import React from "react";

export default function Intro({ displayCondition }) {
  const scrollIntoView = displayCondition
    ? "translate-y-0"
    : "translate-y-6 opacity-0";

  return (
    <section className="mt-40 ml-4 translate-y-1/2 space-y-2 self-center text-xl font-bold tracking-wide text-white sm:ml-24">
      <h1
        className={`${scrollIntoView} text-4xl text-sutilBlack transition-[translate_opacity] delay-300`}
      >
        Daniel P. Becerra
      </h1>
      <p
        className={`${scrollIntoView} font-medium transition-[translate_opacity] delay-500`}
      >
        Futuro Desarrollador Full-Stack.
      </p>
    </section>
  );
}

import { useRef } from "react";
import useToggle from "@hooks/useToggle";
import useWindowSize from "@hooks/useWindowSize";
import { ReactComponent as Logo } from "/public/dapabe.svg";
import Intro from "./HeroUI/Intro";
import Stripes from "./HeroUI/Stripes";
import ScrollBouncer from "./HeroUI/ScrollBouncer";

export default function SectionHero() {
  const target = useRef();
  const [elmOffset, handleOffset] = useToggle(false);

  const checkScroll = ({ pixels = 1 }) => {
    const refOffset = target.current?.scrollTop;
    !elmOffset && refOffset > pixels && handleOffset();
    elmOffset && refOffset < pixels && handleOffset();
  };

  const hasScrolledHero = `${
    elmOffset ? "translate-x-0" : "-translate-x-1/2"
  } transition-transform h-screen w-full bg-red-500 flex sticky top-0`;

  return (
    <section
      ref={target}
      className="heroSection noMaxWidth "
      onScroll={checkScroll}
    >
      <section className={hasScrolledHero}>
        <Stripes displayCondition={elmOffset} />
        <Logo className="absolute right-1 top-1/2 flex -translate-y-1/2 translate-x-[54%] items-end justify-center text-[20rem] transition-transform sm:translate-x-[55%] sm:scale-125 md:scale-[1.4] lg:translate-x-[57%] lg:scale-[2] xl:translate-x-[58%] xl:scale-[2.5]" />
        <Intro displayCondition={elmOffset} />
        <ScrollBouncer displayCondition={elmOffset} />
      </section>
      <div className="h-4" />
    </section>
  );
}

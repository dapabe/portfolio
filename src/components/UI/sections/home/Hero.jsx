import { useRef } from "react";
import useToggle from "@hooks/useToggle";
import { ReactComponent as Logo } from "/public/dapabe.svg";
import Intro from "@ui/unique/HeroUI/Intro";
import Stripes from "@ui/unique/HeroUI/Stripes";

import { ArrowSmDownIcon } from "@heroicons/react/outline";

export default function SectionHero() {
  const target = useRef();
  const [elmOffset, handleOffset] = useToggle(false);

  const checkScroll = ({ pixels = 1 }) => {
    const ref = target.current?.scrollTop;
    !elmOffset && ref > pixels && handleOffset();
    elmOffset && ref < pixels && handleOffset();
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
        {
          <div
            className={`${
              elmOffset ? "right-0 sm:right-10" : "right-0"
            } absolute bottom-0 animate-bounce text-xs text-champagnePink sm:bottom-10`}
          >
            <div className="absolute -top-7 -right-3 -rotate-90 tracking-widest">
              Scroll
            </div>
            <ArrowSmDownIcon className="w-5" />
          </div>
        }
      </section>
      <div className="h-4" />
    </section>
  );
}

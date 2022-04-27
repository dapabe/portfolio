import { useRef, useCallback } from "react";
import useToggle from "@hooks/useToggle";
import SVGWave1 from "@ui/common/decorations/SVGWave1";
import { ReactComponent as Logo } from "/public/dapabe.svg";
import Intro from "@ui/unique/HeroUI/Intro";

export default function SectionHero() {
  const target = useRef();
  const [isOffset, handleOffset] = useToggle(false);

  const checkScroll = useCallback(
    ({ pixels = 1 }) => {
      const ref = target.current?.scrollTop;
      !isOffset && ref > pixels && handleOffset();
      isOffset && ref < pixels && handleOffset();
    },
    [isOffset]
  );

  const hasScrolledHero = `${
    isOffset ? "translate-x-0" : "-translate-x-1/2"
  }  transition-transform h-screen w-full bg-red-500 flex sticky top-0`;

  return (
    <section
      ref={target}
      className="heroSection noMaxWidth "
      onScroll={checkScroll}
    >
      <section className={hasScrolledHero}>
        {/* <div className="absolute right-1 top-1/2 flex -translate-y-1/2 translate-x-1/2 items-end justify-center">
          <span className="text-champagnePink">dap</span>
          <span>abe</span>
          <span className="absolute left-full top-2/3 h-8 w-8 -translate-y-1/2 rounded-full bg-red-500" />
        </div> */}
        <Logo className="absolute right-1 top-1/2 flex -translate-y-1/2 translate-x-[54%] items-end justify-center text-[20rem] transition-transform sm:translate-x-[55%] sm:scale-125 md:scale-[1.4] lg:translate-x-[57%] lg:scale-[2] xl:translate-x-[58%] xl:scale-[2.5]" />

        <Intro displayCondition={isOffset} />
      </section>
      <div className="h-4" />
      {/* <section className="h-[50vh] w-full bg-cyan-500"></section> */}
      {/* <SVGWave1 position="bottom" display="absolute" /> */}
    </section>
  );
}

import { useRef, useEffect } from "react";
import useToggle from "@hooks/useToggle";
import SVGWave1 from "@ui/common/decorations/SVGWave1";
import useElementOffset from "@hooks/useElementOffset";
import Intro from "@ui/unique/HeroUI/Intro";

export default function SectionHero() {
  const target = useRef();
  const [isOffset, handleOffset] = useToggle(false);

  const checkScroll = () => {
    let ref = target.current?.scrollTop;
    !isOffset && ref > 200 && handleOffset();
    isOffset && ref < 200 && handleOffset();
    console.log(ref);
    console.log(ref > 200);
  };

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
        <div className="absolute right-1 top-1/2 flex -translate-y-1/2 translate-x-1/2 items-end justify-center">
          <span className="text-champagnePink">dap</span>
          <span>abe</span>
          <span className="absolute left-full top-2/3 h-8 w-8 -translate-y-1/2 rounded-full bg-red-500" />
        </div>

        <Intro displayCondition={isOffset} />
      </section>
      <div className="h-[70vh] bg-strongRed" />

      {/* <section className="h-[50vh] w-full bg-cyan-500"></section> */}
      {/* <SVGWave1 position="bottom" display="absolute" /> */}
    </section>
  );
}

import { useRef, useEffect, useState } from "react";
import SVGWave1 from "@ui/common/decorations/SVGWave1";
import usePageOffset from "@hooks/usePageOffset";

export default function SectionHero() {
  const section = useRef();
  const hero = useRef();
  const [hasOffset, setOffset] = useState(false);

  const check = () => {
    const targetOffset = hero.current.offsetTop;
    !hasOffset && targetOffset >= 100 && setOffset(true);
    hasOffset && targetOffset <= 100 && setOffset(false);
    console.log(targetOffset, hasOffset);
  };

  useEffect(() => {
    section.current.addEventListener("scroll", check);
    return () => section.current.removeEventListener("scroll", check);
  }, [check, hasOffset]);

  const hasScrolled = `${
    hasOffset ? "translate-x-0" : "-translate-x-1/2"
  } sticky top-0 transition-transform h-screen w-full bg-red-500`;
  return (
    <section ref={section} className="heroSection noMaxWidth ">
      <section>
        <section ref={hero} className={hasScrolled}>
          <div className="absolute right-1 top-1/2 flex -translate-y-1/2 translate-x-1/2 items-end justify-center">
            <span className="text-champagnePink">dap</span>
            <span className="">abe</span>
            <span className="absolute left-full top-2/3 h-8 w-8 -translate-y-1/2 rounded-full bg-red-500" />
          </div>

          <h1>Daniel P. Becerra</h1>
          <h2>Futuro Full-Stack Developer</h2>
        </section>
        <div className="h-[200vh] bg-strongRed" />
      </section>
      <section className="h-[50vh] w-full bg-cyan-500"></section>
      {/* <SVGWave1 position="bottom" display="absolute" /> */}
    </section>
  );
}

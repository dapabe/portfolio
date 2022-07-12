import { useRef } from "react";
import { useTranslations } from "next-intl";

import useToggle from "@hooks/useToggle";
import Intro from "./HeroUI/Intro";
import Stripes from "./HeroUI/Stripes";
import ScrollBouncer from "./HeroUI/ScrollBouncer";

export default function SectionHero() {
  const t = useTranslations("/.section_hero");
  const target = useRef(null);
  const [elmOffset, handleOffset] = useToggle(false);

  const checkScroll = (pixels = 1) => {
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
      className="heroSection noMaxWidth noPadding"
      onScroll={checkScroll}
    >
      <section className={hasScrolledHero}>
        <Stripes displayCondition={elmOffset} />
        <img
          loading="eager"
          src="dapabe.svg"
          title={t("logo.title")}
          alt={t("logo.alt")}
          className="absolute right-1 top-1/2 -translate-y-1/2 translate-x-[53%] scale-75 transition-transform will-change-transform sm:translate-x-[52.75%] lg:translate-x-[52.5%]"
        />
        <Intro displayCondition={elmOffset} />
        <ScrollBouncer displayCondition={elmOffset}>
          &larr; {t("scroller_msg")}
        </ScrollBouncer>
      </section>
      <div className="h-4" />
    </section>
  );
}

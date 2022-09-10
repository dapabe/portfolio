import { useRef } from "react";
import { useTranslations } from "next-intl";

import useToggle from "@hooks/useToggle";
import Intro from "./HeroUI/Intro";
import Stripes from "./HeroUI/Stripes";
import ScrollBouncer from "./HeroUI/ScrollBouncer";

export default function SectionHero() {
  const [isOffset, toggleOffset] = useToggle();
  const t = useTranslations("/.section_hero");
  const secRef = useRef();

  const checkScroll = ({ pixels = 1 }) => {
    const refOffset = secRef.current?.scrollTop;
    !isOffset && refOffset > pixels && toggleOffset();
    isOffset && refOffset < pixels && toggleOffset();
  };

  return (
    <section
      ref={secRef}
      className="noMaxWidth noPadding h-screen overflow-x-hidden overflow-y-scroll scrollbar-hide"
      onScroll={checkScroll}
    >
      <section
        className={`${
          !isOffset && "-translate-x-1/2"
        } sticky top-0 flex h-screen w-full bg-red-500 transition-transform`}
      >
        <Stripes displayCondition={isOffset} />
        <img
          loading="eager"
          src="dapabe.svg"
          title={t("logo.title")}
          alt={t("logo.alt")}
          className="absolute right-1 top-1/2 -translate-y-1/2 translate-x-[53%] scale-75 transition-transform will-change-transform sm:translate-x-[52.75%] lg:translate-x-[52.5%]"
        />
        <Intro displayCondition={isOffset} />
        <ScrollBouncer displayCondition={isOffset}>
          &larr; {t("scroller_msg")}
        </ScrollBouncer>
      </section>
      <div className="h-4" />
    </section>
  );
}

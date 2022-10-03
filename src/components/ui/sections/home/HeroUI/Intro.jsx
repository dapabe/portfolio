import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";
export default function Intro({ displayCondition }) {
  const t = useTranslations("/");

  const scrollIntoView = displayCondition
    ? "translate-y-0"
    : "translate-y-6 opacity-0";

  return (
    <section className="mt-40 ml-4 translate-y-1/2 space-y-3 self-center text-xl font-bold tracking-wide text-white md:ml-24">
      <h1
        className={`${scrollIntoView} text-4xl leading-none text-sutilBlack transition-[translate_opacity] delay-300`}
      >
        Daniel P. Becerra
      </h1>
      <h2
        className={`${scrollIntoView} font-medium transition-[translate_opacity] delay-500`}
      >
        {t("section_hero.working_position")} <br />
      </h2>
      <h3
        className={`${scrollIntoView} mt-6 transition-[translate_opacity] delay-700`}
      >
        <a
          href="#contactSection"
          className="analog-shadow-left block w-max rounded-md bg-white p-2 text-base text-sutilBlack transition-[box-shadow_transform] active:-translate-x-1 active:translate-y-1 active:shadow-inner active:shadow-gray-500"
          title={t("section_hero.cta.title")}
        >
          {t("section_hero.cta.text")}{" "}
          <EnvelopeIcon className="inline-block w-6 -translate-y-0.5" />
        </a>
      </h3>
    </section>
  );
}

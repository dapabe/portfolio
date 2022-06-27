import { useTranslations } from "next-intl";

import SVGWave2 from "@ui/reusable/decorations/SVGWave2";
import AllQuotes from "./InspirationUI/AllQuotes";

export default function SectionInspire() {
  const t = useTranslations("/")
  return (
    <section className="inspirationSection noMaxWidth noPadding">
      <SVGWave2 className="rotate-180" fill="fill-vaporViolet" />
      <h1 className="sectionTitle text-center">{t("section_inspiration.heading")}</h1>
      <AllQuotes />
      <p className="mx-auto max-w-sm rounded-md p-1 text-center">
        {t("section_inspiration.my_quote")}
      </p>
      <SVGWave2 fill="fill-sutilBlack" />
    </section>
  );
}

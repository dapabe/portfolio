import { ExtLink, AbbrLang } from "@shared/decorations/sugarText";
import { useTranslations } from "next-intl";
export default function About() {
  const t = useTranslations("/about");
  return (
    <section className="about noMaxWidth">
      <div className="mx-auto mt-10 max-w-[75ch] space-y-6 px-4">
        <h2 className="paragraphTitle text-center underline underline-offset-4">
          {t("heading")}
        </h2>
        {t.rich("1st_paragraph", {
          p: (text) => <p>{text}</p>,
        })}
        {t.rich("2nd_paragraph", {
          p2: (text) => <p>{text}</p>,
        })}
        {t.rich("3rd_paragraph.rich", {
          p3: (text) => <p>{text}</p>,
          ExtLink: (text) => (
            <ExtLink
              href={t("3rd_paragraph.href")}
              aria-label={t("3rd_paragraph.1st_a11y")}
              title={t("3rd_paragraph.1st_a11y")}
            >
              {text}
            </ExtLink>
          ),
          abbr: (text) => (
            <abbr
              aria-labelledby={t("3rd_paragraph.2nd_a11y")}
              title={t("3rd_paragraph.2nd_a11y")}
            >
              {text}
            </abbr>
          ),
        })}
        <h2 className="paragraphTitle text-center underline underline-offset-4">
          {t("2nd_heading")}
        </h2>
        {t.rich("4th_paragraph.rich", {
          p4: (text) => <p>{text}</p>,
          abbrlang1: (text) => (
            <AbbrLang
              aria-labelledby={t("4th_paragraph.1st_a11y")}
              title={t("4th_paragraph.1st_a11y")}
            >
              {text}
            </AbbrLang>
          ),
          abbrlang2: (text) => (
            <AbbrLang
              aria-labelledby={t("4th_paragraph.2nd_a11y")}
              title={t("4th_paragraph.2nd_a11y")}
            >
              {text}
            </AbbrLang>
          ),
        })}
        {t.rich("5th_paragraph.rich", {
          p5: (text) => <p>{text}</p>,
          abbr: (text) => (
            <abbr
              aria-labelledby={t("5th_paragraph.1st_a11y")}
              title={t("5th_paragraph.1st_a11y")}
            >
              {text}
            </abbr>
          ),
          abbr2: (text) => (
            <abbr
              aria-labelledby={t("5th_paragraph.2nd_a11y")}
              title={t("5th_paragraph.2nd_a11y")}
            >
              {text}
            </abbr>
          ),
          abbrlang: (text) => (
            <AbbrLang
              aria-labelledby={t("5th_paragraph.3rd_a11y")}
              title={t("5th_paragraph.3rd_a11y")}
            >
              {text}
            </AbbrLang>
          ),
          extlink: (text) => (
            <ExtLink
              href={t("5th_paragraph.1st_link.href")}
              aria-labelledby={t("5th_paragraph.1st_link.a11y")}
              title={t("5th_paragraph.1st_link.a11y")}
            >
              {text}
            </ExtLink>
          ),
          extlink2: (text) => (
            <ExtLink
              href={t("5th_paragraph.2nd_link.href")}
              aria-labelledby={t("5th_paragraph.2nd_link.a11y")}
              title={t("5th_paragraph.2nd_link.a11y")}
            >
              {text}
            </ExtLink>
          ),
          br: () => <br></br>,
        })}
        {t.rich("notes", {
          span: (text) => <span className="inline-block">{text}</span>,
        })}
      </div>
    </section>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      translations: (await import(`@src/assets/locales/${locale}.json`))
        .default,
    },
  };
}

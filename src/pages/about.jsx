import { ExtLink, AbbrLang } from "@shared/decorations/sugarText";
import { useTranslations } from "next-intl";
export default function About() {
  const t = useTranslations("/about");
  return (
    <section className="about noMaxWidth">
      <section className="mx-auto mt-10 max-w-[75ch] space-y-6 px-4">
        <h2 className="paragraphTitle text-center underline underline-offset-4">
          {t("heading")}
        </h2>
        <p>
          {t("1st_paragraph")} <br />
          <br />
          {t("2nd_paragraph")} <br />
          <br />
          {t("3rd_paragraph.1st_text")}
          <ExtLink
            href={t("3rd_paragraph.1st_tag.href")}
            title={t("3rd_paragraph.1st_tag.title")}
          >
            {t.rich("3rd_paragraph.1st_tag.inner_tag.rich", {
              abbr: (text) => <abbr>{text}</abbr>,
            })}
          </ExtLink>
          .
        </p>
        <h2 className="paragraphTitle text-center underline underline-offset-4">
          {t("2nd_heading")}
        </h2>
        <p>
          {t.rich("4th_paragraph.1st_tag.rich", {
            AbbrLang: (text, rest) => (
              <>
                {rest}
                <AbbrLang title={t("4th_paragraph.1st_tag.title")}>
                  {text}
                </AbbrLang>
              </>
            ),
          })}
          {t.rich("4th_paragraph.2nd_tag.rich", {
            AbbrLang: (text) => (
              <AbbrLang title={t("4th_paragraph.2nd_tag.title")}>
                {text}
              </AbbrLang>
            ),
          })}
          <br />
          {t.rich("5th_paragraph.1st_tag.rich", {
            abbr: (text) => (
              <abbr title={t("5th_paragraph.1st_tag.title")}>{text}</abbr>
            ),
          })}
          {t.rich("5th_paragraph.2nd_tag.rich", {
            abbr: (text) => (
              <abbr title={t("5th_paragraph.2nd_tag.title")}>{text}</abbr>
            ),
          })}
          {t.rich("5th_paragraph.3rd_tag.rich", {
            AbbrLang: (text) => (
              <AbbrLang title={t("5th_paragraph.3rd_tag.title")}>
                {text}
              </AbbrLang>
            ),
          })}
          {t.rich("5th_paragraph.4th_tag.rich", {
            ExtLink: (text) => (
              <ExtLink href={t("5th_paragraph.4th_tag.href")}>{text}</ExtLink>
            ),
          })}
          {t.rich("5th_paragraph.5th_tag.rich", {
            ExtLink: (text) => (
              <ExtLink href={t("5th_paragraph.5th_tag.href")}>{text}</ExtLink>
            ),
          })}
          <br />
          <br />
          {t("5th_paragraph.1st_text")}
          <br /> <br />
          {t("5th_paragraph.2nd_text")}
        </p>
      </section>
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

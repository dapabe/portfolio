import { ExtLink, AbbrLang } from "@utils/helpers_text";
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
          {t.rich("5th_paragraph.rich", {
            abbr: (text, rest) => (
              <abbr title={t("5th_paragraph.1st_title")}>{text}</abbr>
            ),
          })}
          <AbbrLang title="Marcos de trabajo">frameworks</AbbrLang> eran los más
          utilizados, así es como me enfoque en{" "}
          <ExtLink href="https://es.reactjs.org/">React.JS</ExtLink> y{" "}
          <ExtLink href="https://nextjs.org/">NEXT.JS</ExtLink>.
          <br />
          <br />
          Ahora estoy en camino de dominar estos y aprender más lenguajes, y
          frameworks ampliando más mi conocimiento junto con otras herramientas
          de diseño.
          <br /> <br />
          Siguiente objetivo: React Native y TypeScript.
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
// A mis 20 años tuve interés en crear modificaciones para juegos y
//           comprendí como funcionaba la{" "}
//           <ExtLink
//             href="https://es.wikipedia.org/wiki/Programaci%C3%B3n_orientada_a_objetos"
//             title="Ir a la definición de que es OOP"
//           >
//             <abbr title="Object-oriented programming">OOP</abbr>
//           </ExtLink>
//           ; programación orientada a objetos.

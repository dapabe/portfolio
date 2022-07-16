import { useTranslations } from "next-intl";
import { ExtLink } from "@shared/decorations/sugarText";
import CustomLink from "@shared/randoms/CustomLink";

export default function SectionIntro() {
  const t = useTranslations("/.section_intro");
  return (
    <section className="introSection noMaxWidth">
      <ShortAbout t={t} />
      <FocusInfo t={t} />
    </section>
  );
}

const ShortAbout = ({ t }) => {
  return (
    <section className="space-y-3 rounded-md border bg-champagnePink p-4 text-sutilBlack">
      <h2 className="sectionTitle">{t("short_about.heading")}</h2>
      <p className="indent-3">{t("short_about.1st_paragraph")}</p>
      <CustomLink
        linkProps={{ href: "/about" }}
        className="ml-auto block w-max -skew-x-12 bg-sutilBlack py-1 px-2 text-sm tracking-widest text-white  transition-transform ease-in hover:translate-x-2"
        aria-labelledby={t("short_about.anchor_about.a11y")}
        title={t("short_about.anchor_about.a11y")}
      >
        {t("short_about.anchor_about.text")} &#10140;
      </CustomLink>
    </section>
  );
};
const FocusInfo = ({ t }) => {
  return (
    <section className="bg-sutilBlack p-8  text-base text-gray-400">
      <h2 className="mb-2 tracking-wider text-white">{t("focus.heading")}</h2>
      <ul className="intro_list">
        {t.rich("focus.li_repeated", {
          li: (children) => <li>{children}</li>,
        })}
        <li>
          {t.rich("focus.1st_extlink.text", {
            ExtLink: (children) => (
              <ExtLink
                className="text-gray-300"
                href={t("focus.1st_extlink.href")}
                aria-labelledby={t("focus.1st_extlink.a11y")}
                title={t("focus.1st_extlink.a11y")}
              >
                {children}
              </ExtLink>
            ),
          })}
          {t.rich("focus.2nd_extlink.text", {
            ExtLink: (children) => (
              <ExtLink
                className="text-gray-300"
                href={t("focus.2nd_extlink.href")}
                aria-labelledby={t("focus.2nd_extlink.a11y")}
                title={t("focus.2nd_extlink.a11y")}
              >
                {children}
              </ExtLink>
            ),
          })}
        </li>
      </ul>
    </section>
  );
};

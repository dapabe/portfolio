import { useTranslations } from "next-intl";
import { ExtLink } from "@shared/decorations/sugarText";
import CustomLink from "@shared/randoms/CustomLink";

export default function SectionIntro() {
  const t = useTranslations("/.section_intro");
  return (
    <section className="noMaxWidth bg-gradient-to-b from-vaporBlue to-vaporViolet">
      <div className="[&>section]:m-auto [&>section]:h-max [&>section]:max-w-md container mx-auto flex flex-col justify-around gap-4 lg:flex-row">
        <ShortAbout t={t} />
        <FocusInfo t={t} />
      </div>
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
    <section className="bg-sutilBlack p-8 text-base text-gray-400">
      <h2 className="mb-2 tracking-wider text-white">{t("focus.heading")}</h2>
      <ul className="[&>li]:list-disc space-y-2">
        {t.rich("focus.list_items", {
          li: (text) => <li>{text}</li>,
          extlink: (text) => (
            <ExtLink
              className="text-gray-300"
              href={t("focus.1st_link.href")}
              aria-labelledby={t("focus.1st_link.a11y")}
              title={t("focus.1st_link.a11y")}
            >
              {text}
            </ExtLink>
          ),
          extlink2: (text) => (
            <ExtLink
              className="text-gray-300"
              href={t("focus.2nd_link.href")}
              aria-labelledby={t("focus.2nd_link.a11y")}
              title={t("focus.2nd_link.a11y")}
            >
              {text}
            </ExtLink>
          ),
        })}
      </ul>
    </section>
  );
};

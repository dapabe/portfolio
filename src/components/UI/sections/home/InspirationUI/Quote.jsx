import { useTranslations } from "next-intl";
import { useContext } from "react";
import { QuoteData } from "@context/states";
import { ExtLink } from "@shared/decorations/sugarText";
import { useRouter } from "next/router";

export default function Quote() {
  const { cite, quote, webpage, nickname } = useContext(QuoteData);
  const { locale } = useRouter();
  const t = useTranslations("/.section_inspiration");
  return (
    <section className="my-3 ml-8 flex flex-col justify-center sm:my-auto sm:ml-0">
      <p>
        <ExtLink
          href={cite}
          aria-label={t("quotes.cite_origin")}
          title={t("quotes.cite_origin")}
        >
          <q>{quote[locale]}</q>{" "}
        </ExtLink>
      </p>
      <strong className="mt-2 text-right">
        <a
          href={webpage}
          aria-label={t("quotes.web_link")}
          title={t("quotes.web_link")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-inOut after:top-full after:bg-sutilBlack"
        >
          {nickname}
        </a>
      </strong>
    </section>
  );
}

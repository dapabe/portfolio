import Image from "next/image";
import Quote from "./Quote";
import { useTranslations } from "next-intl";
export default function QuoteCard({ cite, image, nickname }) {
  const t = useTranslations("/.section_inspiration")
  return (
    <blockquote
      className="relative flex min-h-[120px] max-w-xl rounded-md bg-white text-sutilBlack sm:rounded-full"
      cite={cite}
    >
      <picture className="relative hidden h-40 min-w-[150px] overflow-hidden rounded-l-full sm:block">
        <Image
          src={`/images/inspirations/${image}`}
          alt={nickname}
          layout="fill"
          className="object-cover"
        />
      </picture>
      <Quote />
      <div className="relative mx-1 h-20 min-w-[85px]">
        <Image
          src="/images/quote.svg"
          alt={t("quotes.symbol")}
          layout="fill"
        />
      </div>
    </blockquote>
  );
}

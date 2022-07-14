import { useTranslations } from "next-intl";

export default function SkipNav() {
  const t = useTranslations("global");
  return (
    <div className="top-0 left-28 z-40 -translate-y-full rounded-b-3xl border-2 border-sutilBlack border-t-transparent bg-champagnePink px-3 py-1 text-sutilBlack outline-none transition-transform focus-within:translate-y-0">
      <p>
        {t.rich("skipNav_a11y.text", {
          kbd: (children) => (
            <kbd className="rounded bg-sutilBlack px-2 text-white">
              {children}
            </kbd>
          ),
        })}
      </p>
      <a href="#main" className="font-bold">
        &#8594; {t("skipNav_a11y.anchor_text")}
      </a>
    </div>
  );
}

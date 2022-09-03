import { ContactDisplay } from "@context/states";
import useToggle from "@hooks/useToggle";
import { CursorClickIcon } from "@heroicons/react/solid";
import FORM_Feedback from "./ContactUI/FORM_Feedback";
import { useTranslations } from "next-intl";

export default function SectionContact() {
  const [show, toggleShow] = useToggle(false);
  const t = useTranslations("/.section_contact");
  return (
    <section
      id="contactSection"
      className="noMaxWidth noPadding flex items-center justify-center bg-sutilBlack"
    >
      <button
        type="button"
        title={t("cta_title")}
        onClick={toggleShow}
        disabled={show}
        className={`analog-shadow-center active:inner-shadow-md absolute mx-auto flex h-40 max-w-xs items-center rounded-full bg-white py-3 px-2 transition-[opacity_box-shadow_transform] active:translate-y-2 active:shadow-gray-500 ${
          show ? "-z-10 opacity-0" : "z-10"
        }`}
      >
        <h2 className="text-center text-xl font-semibold text-sutilBlack">
          {t("cta_text")}
        </h2>
        <CursorClickIcon className="absolute left-[85%] top-[65%] w-20 text-pink-700" />
      </button>
      <ContactDisplay.Provider value={{ show }}>
        <FORM_Feedback displayCondition={show} />
      </ContactDisplay.Provider>
    </section>
  );
}

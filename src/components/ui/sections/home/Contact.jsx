import { ContactDisplay } from "@context/states";
import useToggle from "@hooks/useToggle";
import { CursorClickIcon } from "@heroicons/react/solid";
import FORM_Feedback from "./ContactUI/FORM_Feedback";
import { useTranslations } from "next-intl";

export default function SectionContact() {
  const [show, handleShow] = useToggle(false);
  return (
    <section
      id="contactSection"
      className="contactSection noMaxWidth noPadding"
    >
      <Button condition={show} callback={handleShow} />
      <ContactDisplay.Provider value={{ show }}>
        <FORM_Feedback displayCondition={show} />
      </ContactDisplay.Provider>
    </section>
  );
}

const Button = ({ condition, callback }) => {
  const t = useTranslations("/.section_contact")
  return (
    <button
      type="button"
      title={t("cta_title")}
      onClick={callback}
      disabled={condition}
      className={`feedbackBtn ${condition ? "-z-10 opacity-0" : "z-10"}`}
    >
      <h2 className="text-center text-xl font-semibold text-sutilBlack">
        {t("cta_text")}
      </h2>
      <CursorClickIcon className="absolute left-[85%] top-[65%] w-20 text-pink-700" />
    </button>
  );
};

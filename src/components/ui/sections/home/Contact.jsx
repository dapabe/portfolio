import useToggle from "@hooks/useToggle";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";
import ContactForm from "./ContactUI/ContactForm";
import { useTranslations } from "next-intl";
import Modal from "@src/components/shared/Modal";

export default function SectionContact() {
  const [show, toggleShow] = useToggle();
  const t = useTranslations("/.section_contact");
  return (
    <section className="noMaxWidth flex items-center justify-center bg-sutilBlack">
      <button
        type="button"
        title={t("cta_title")}
        onClick={toggleShow}
        className={`analog-shadow-center active:inner-shadow-md relative mx-auto flex h-40 max-w-xs cursor-pointer items-center rounded-full bg-white py-3 px-2 transition-[opacity_box-shadow_transform] active:translate-y-2 active:shadow-gray-500`}
      >
        <h2 className="text-center text-xl font-semibold text-sutilBlack">
          {t("cta_text")}
        </h2>
        <CursorArrowRaysIcon className="absolute left-[85%] top-[65%] w-20 text-pink-700" />
      </button>
      <Modal isOpen={show}>
        <ContactForm displayCondition={show} handleCancel={toggleShow} />
      </Modal>
    </section>
  );
}

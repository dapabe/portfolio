import { ContactDisplay } from "@context/UI";
import useToggle from "@hooks/useToggle";
import { CursorClickIcon } from "@heroicons/react/solid";
import FORM_Feedback from "./ContactUI/FORM_Feedback";

export default function SectionContact() {
  const [show, handleShow] = useToggle(true);
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
  return (
    <button
      type="button"
      title="Botón de contacto"
      onClick={callback}
      disabled={condition}
      className={`feedbackBtn ${condition ? "-z-10 opacity-0" : "z-10"}`}
    >
      <h2 className="text-center text-xl font-semibold text-sutilBlack">
        ¿Te gustaría dejarme un mensaje?
      </h2>
      <CursorClickIcon className="absolute left-[85%] top-[65%] w-20 text-pink-700" />
    </button>
  );
};

import { ContactDisplay } from "@context/UI";
import useToggle from "@hooks/useToggle";
import { CursorClickIcon } from "@heroicons/react/solid";
import FORM_Feedback from "./ContactUI/FORM_Feedback";

export default function SectionContact() {
  //  Show form card
  const [show, handleShow] = useToggle(false);

  const Button = () => {
    return (
      <button
        type="button"
        title="Botón de contacto"
        onClick={handleShow}
        disabled={show}
        className={`feedbackBtn ${show ? "-z-10 opacity-0" : "z-10"}`}
      >
        <h2 className="text-center text-xl font-semibold text-sutilBlack">
          ¿Te gustaría dejarme un mensaje?
        </h2>
        <CursorClickIcon className="absolute left-[85%] top-[65%] w-20 text-pink-700" />
      </button>
    );
  };
  return (
    <section id="contactSection" className="contactSection noMaxWidth noSpace">
      <Button />
      <ContactDisplay.Provider value={{ show }}>
        <FORM_Feedback displayCondition={show} />
      </ContactDisplay.Provider>
    </section>
  );
}

import useToggle from "@hooks/useToggle";
import { PaperAirplaneIcon } from "@heroicons/react/solid";
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
        className={`feedbackBtn ${show ? "-z-10 opacity-0" : "opacity-100"}`}
      >
        <h1 className="text-center text-xl font-semibold text-sutilBlack">
          ¿Te gustaría dejarme un mensaje o feedback?
        </h1>
        <PaperAirplaneIcon className="w-10 rotate-90 text-pink-700" />
      </button>
    );
  };
  return (
    <section className="contactSection noMaxWidth noSpace">
      <Button />
      <FORM_Feedback displayCondition={show} />
    </section>
  );
}

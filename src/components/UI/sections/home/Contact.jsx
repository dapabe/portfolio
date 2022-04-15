import { useState } from "react";

import { PaperAirplaneIcon } from "@heroicons/react/solid";
import FeedbackForm from "@ui/unique/FeedbackForm";

export default function SectionContact() {
  const [show, setShow] = useState(false);
  return (
    <section className="contactSection noMaxWidth noSpace">
      <button
        type="button"
        title="Boton de contacto"
        onClick={() => setShow(true)}
        disabled={show}
        className={`feedbackBtn ${show ? "-z-10 opacity-0" : "opacity-100"}`}
      >
        <h1 className="text-center text-xl font-semibold text-sutilBlack">
          ¿Te gustaria dejarme un mensaje o feedback?
        </h1>
        <PaperAirplaneIcon className="w-10 rotate-90 text-pink-700" />
      </button>
      <FeedbackForm displayCondition={show} />
    </section>
  );
}

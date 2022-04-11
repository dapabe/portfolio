import { useState } from "react";

import { PaperAirplaneIcon } from "@heroicons/react/solid";
import FeedbackForm from "@ui/unique/FeedbackForm";

export default function SectionContact() {
  const [show, setShow] = useState(false);
  return (
    <section className="contactSection noMaxWidth">
      <svg viewBox="0 0 1440 320" className="absolute bottom-full w-full">
        <path
          fill="#1C1B20"
          fillOpacity="1"
          d="M0,128L120,160C240,192,480,256,720,261.3C960,267,1200,213,1320,186.7L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      <button
        type="button"
        title="Boton de contacto"
        onClick={() => setShow(true)}
        disabled={show}
        className={`feedbackBtn ${show ? "opacity-0" : ""}`}
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

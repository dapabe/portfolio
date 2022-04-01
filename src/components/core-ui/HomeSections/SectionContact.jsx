import { useState } from "react";

import { PaperAirplaneIcon } from "@heroicons/react/solid";
import FeedbackForm from "@ui/unique/FeedbackForm";

export default function SectionContact() {
  const [show, setShow] = useState(false);
  return (
    <section className="contactSection noMaxWidth">
      <button
        onClick={() => setShow(true)}
        disabled={show}
        className={`feedbackBtn ${show && " opacity-0"}`}
      >
        <h1 className="text-center text-xl text-white">
          ¿Te gustaria dejarme un mensaje o feedback?
        </h1>
        <PaperAirplaneIcon className="w-10 rotate-90 text-white" />
      </button>
      <FeedbackForm displayCondition={show} />
    </section>
  );
}

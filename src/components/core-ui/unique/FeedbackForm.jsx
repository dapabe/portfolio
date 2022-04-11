import { useState } from "react";
import useForm from "@hooks/useForm";

import {
  initialFormValues,
  serviceMessage,
  formSubmission,
} from "@src/backend/Feedback_form";
import form_inputs from "@src/assets/form_inputs.json";

import FORM_UI from "@ui/common/ContactUI/FORM_UI";
import CreateInput from "@ui/common/ContactUI/CreateInput";

const EveryInput = Object.freeze(form_inputs.contact_form);
export default function FeedbackForm({ displayCondition }) {
  const { formData, handleChange } = useForm(initialFormValues);
  //  Server response
  const [serviceMsg, setServiceMsg] = useState(serviceMessage);
  //  Form States
  const [isSubmitting, setSubmitting] = useState(false);

  const formSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    await formSubmission(setServiceMsg, formData);
    setSubmitting(false);
  };

  const showFeedback = displayCondition
    ? "-translate-y-20"
    : "translate-y-full";

  return (
    <form
      onSubmit={formSubmit}
      className={`${showFeedback} mx-auto flex  max-w-sm overflow-hidden rounded-md bg-white p-4 text-sutilBlack transition-transform delay-300 sm:max-w-md md:max-w-lg lg:max-w-xl`}
    >
      <FORM_UI submitState={isSubmitting} serviceResponse={serviceMsg}>
        {EveryInput.map((element) => (
          <CreateInput
            key={element.id}
            {...element}
            value={formData[element.name]}
            onChange={handleChange}
          />
        ))}
      </FORM_UI>
    </form>
  );
}

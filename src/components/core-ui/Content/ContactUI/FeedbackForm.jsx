import { useState } from "react";

import {
  initialFormValues,
  serviceMessage,
  formSubmission,
} from "@src/logic/Feedback_form";

import FORM_UI from "./FORM_UI";

export default function FeedbackForm() {
  const [values, setValues] = useState(initialFormValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serviceMsg, setServiceMsg] = useState(serviceMessage);

  // Search how does [e.target.name] works
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log({ ...values });
  };
  const formSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    await formSubmission(setServiceMsg, values);
    setIsSubmitting(false);
  };

  console.log("Rerender");

  return (
    <form
      onSubmit={formSubmit}
      className="m-auto max-w-2xl flex-grow rounded-md bg-vaporBlue  p-4 md:p-6"
    >
      <FORM_UI
        formValue={values}
        onChange={handleChange}
        submitState={isSubmitting}
        serviceResponse={serviceMsg}
      />
    </form>
  );
}

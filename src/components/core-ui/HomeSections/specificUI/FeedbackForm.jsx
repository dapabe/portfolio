import { useState } from "react";
import useForm from "@hooks/useForm";

import {
  initialFormValues,
  serviceMessage,
  formSubmission,
} from "@src/backend/Feedback_form";
import form_inputs from "@src/assets/form_inputs.json";

import FORM_UI from "@ui/global/ContactUI/FORM_UI";
import CreateInput from "@ui/global/ContactUI/CreateInput";

const EveryInput = Object.freeze(form_inputs.contact_form);
export default function FeedbackForm({ displayCondition }) {
  // const { values, handleChange } = useForm(initialFormValues);
  //  initialValues should be wrapped in a Context.
  const [values, setValues] = useState(initialFormValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serviceMsg, setServiceMsg] = useState(serviceMessage);

  //  [NOTE] Computed Properties in React:
  //  ------------------------------
  //  the setValues func is applying to the initial values the same
  //  properties, to a sealed object. In this case it's overwriting
  //  the initial values with the values of the EVENT, which have
  //  the same property NAME.
  const showFeedback = displayCondition
    ? "translate-y-0"
    : "translate-y-[150%]";

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const formSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    await formSubmission(setServiceMsg, values);
    setIsSubmitting(false);
  };
  return (
    <form
      onSubmit={formSubmit}
      className={`${showFeedback} mx-auto h-max max-w-sm rounded-md transition-transform delay-300 sm:max-w-md md:max-w-lg lg:max-w-xl`}
    >
      <FORM_UI submitState={isSubmitting} serviceResponse={serviceMsg}>
        {EveryInput.map((elm) => (
          <CreateInput
            key={elm._id}
            {...elm}
            value={values[elm.name]}
            onChange={handleChange}
          />
        ))}
      </FORM_UI>
    </form>
  );
}

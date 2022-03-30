import { PaperAirplaneIcon } from "@heroicons/react/solid";
import form_inputs from "@src/assets/form_inputs.json";

import CreateInput from "./CreateInput";
import SubmitButton from "./SubmitButton";

const EveryInput = form_inputs.contact_form;

export default function FORM_UI({
  formValue,
  onChange,
  submitState,
  serviceResponse,
}) {
  return (
    <fieldset className="space-y-2 rounded-md border-2 bg-vaporViolet px-4 pb-4">
      <legend className="flex w-max items-center text-lg tracking-widest">
        <PaperAirplaneIcon className="ml-2 w-8 rotate-45" />
        <h1 className="mr-2">Contactame</h1>
      </legend>
      {EveryInput.map((elm) => (
        <CreateInput
          key={elm._id}
          {...elm}
          value={formValue[elm.name]}
          onChange={onChange}
        />
      ))}
      <SubmitButton displayCondition={submitState} />
      {serviceResponse.text.length !== 0 && (
        <span className={`text-sm ${serviceResponse.class}`}>
          {serviceResponse.text}
        </span>
      )}
    </fieldset>
  );
}

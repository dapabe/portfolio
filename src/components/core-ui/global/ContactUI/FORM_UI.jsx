import { ChatAlt2Icon, PaperAirplaneIcon } from "@heroicons/react/solid";
import form_inputs from "@src/assets/form_inputs.json";

import CreateInput from "./CreateInput";
import SubmitButton from "./SubmitButton";

const EveryInput = Object.freeze(form_inputs.contact_form);

export default function FORM_UI({
  formValue,
  onChange,
  submitState,
  serviceResponse,
}) {
  //  REFACTOR: formValue-onChange

  const responseCondition = serviceResponse.text.length !== 0;

  return (
    <fieldset className="relative space-y-2 rounded-md border-2 bg-zinc-800 px-4 pb-4">
      <legend className="flex w-max items-center justify-between text-lg tracking-widest">
        <h1 className="mr-2 uppercase">CONTACTAME</h1>
        <ChatAlt2Icon className=" w-8" />
      </legend>
      {EveryInput.map((elm) => (
        <CreateInput
          key={elm._id}
          {...elm}
          value={formValue[elm.name]}
          onChange={onChange}
        />
      ))}
      <section className="flex">
        {responseCondition && (
          <span
            className={
              !responseCondition ? "bg-transparent " : serviceResponse.class
            }
          >
            <p>{serviceResponse.text}</p>
          </span>
        )}
        <SubmitButton displayCondition={submitState} />
      </section>
    </fieldset>
  );
}

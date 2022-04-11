import { ChatAlt2Icon } from "@heroicons/react/solid";

import SubmitButton from "./SubmitButton";

export default function FORM_UI({ children, submitState, serviceResponse }) {
  const responseCondition = serviceResponse.text.length !== 0;
  const responseMessage = responseCondition
    ? serviceResponse.class
    : "bg-transparent ";

  return (
    <fieldset className="flex-grow space-y-2 rounded-md border-2 border-sutilBlack px-4 pb-4 font-semibold">
      <legend className="flex w-max items-center justify-between text-lg tracking-widest">
        <h1 className="mr-2 uppercase">CONTACTAME</h1>
        <ChatAlt2Icon className="w-8 text-blue-600" />
      </legend>
      {children}
      <section className="flex">
        {responseCondition && (
          <span className={responseMessage}>{serviceResponse.text}</span>
        )}
        <SubmitButton displayCondition={submitState} />
      </section>
    </fieldset>
  );
}

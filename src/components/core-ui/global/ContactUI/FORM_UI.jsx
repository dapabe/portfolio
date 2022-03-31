import { ChatAlt2Icon } from "@heroicons/react/solid";

import SubmitButton from "./SubmitButton";

export default function FORM_UI({ children, submitState, serviceResponse }) {
  const responseCondition = serviceResponse.text.length !== 0;
  const responseMessage = responseCondition
    ? serviceResponse.class
    : "bg-transparent ";

  return (
    <fieldset className="relative space-y-2 rounded-md border-2 bg-zinc-800 px-4 pb-4">
      <legend className="flex w-max items-center justify-between text-lg tracking-widest">
        <h1 className="mr-2 uppercase">CONTACTAME</h1>
        <ChatAlt2Icon className=" w-8" />
      </legend>
      {children}
      <section className="flex">
        {responseCondition && (
          <span className={responseMessage}>
            <p>{serviceResponse.text}</p>
          </span>
        )}
        <SubmitButton displayCondition={submitState} />
      </section>
    </fieldset>
  );
}

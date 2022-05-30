const FORM_ENDPOINT = process.env.ENDPOINT_URL;

import { notSelectable } from "@utils/reusable";
import usePost from "@hooks/fetch/usePost";
import contact_form from "@src/assets/form_inputs.json";
import CreateInput from "@ui/reusable/FORM/CreateInput";
import { ChatAlt2Icon } from "@heroicons/react/solid";
import SubmitButton from "./SubmitButton";

const everyInput = Object.freeze(contact_form.contact_form.inputs);
//  TODO: deep seal
const serverResponse = contact_form.contact_form.responses;
const postValues = Object.seal({ user_email: "", message: "" });

export default function FORM_Feedback({ displayCondition }) {
  const { response, isLoading, inputData, handleChange, formSubmit } = usePost({
    url: FORM_ENDPOINT,
    postResponses: serverResponse,
    inputValues: postValues,
  });

  const postResponse = response?.text || "";
  const responseClass = response?.className || "opacity-0";

  const showFeedback = displayCondition ? "opacity-100" : "opacity-0 -z-10";
  return (
    <form onSubmit={formSubmit} className={`feedbackForm ${showFeedback}`}>
      <fieldset className="relative flex-grow space-y-2 rounded-md border-2 border-sutilBlack px-4 pb-4 font-semibold">
        <legend className="flex w-max items-center justify-between text-lg tracking-widest">
          <h2 className="mr-2 uppercase">CONTÁCTAME</h2>
          <ChatAlt2Icon className="w-8 text-blue-600" />
        </legend>
        <Inputs
          inputData={inputData}
          handleChange={handleChange}
          displayCondition={displayCondition}
        />
        <section className="flex">
          <span className={`transition-opacity ${responseClass}`}>
            {postResponse}
          </span>
          <SubmitButton displayCondition={isLoading} />
        </section>
      </fieldset>
    </form>
  );
}

const Inputs = ({ inputData, handleChange, displayCondition }) => {
  return everyInput.map((element) => (
    <CreateInput
      key={element.id}
      {...element}
      onChange={handleChange}
      value={inputData[element.name]}
      {...notSelectable(!displayCondition)}
    />
  ));
};

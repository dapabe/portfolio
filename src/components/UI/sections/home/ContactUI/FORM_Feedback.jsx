const FORM_ENDPOINT = import.meta.env.VITE_ENDPOINT_URL;
import { useContext } from "react";
import { GlobalContext } from "@context/GlobalState";
import usePost from "@hooks/fetch/usePost";

import form_inputs from "@src/assets/form_inputs.json";

import FORM_UI from "./FORM_UI";
import CreateInput from "@ui/reusable/FORM/CreateInput";

const everyInput = Object.freeze(form_inputs.contact_form);

const serverResponse = {
  ok: {
    class:
      "absolute inset-0 text-sutilBlack tracking-wide bg-white flex justify-center items-center font-bold text-lg",
    text: "¡Gracias, leeré tu mensaje!",
  },
  error: {
    class: "text-sm text-red-600 opacity-100",
    text: "Ha habido un error, por favor intentalo más tarde.",
  },
};
const postValues = Object.seal({ user_email: "", message: "" });

export default function FORM_Feedback({ displayCondition }) {
  const { response, isLoading, inputData, handleChange, formSubmit } = usePost({
    url: FORM_ENDPOINT,
    postResponse: serverResponse,
    inputValues: postValues,
  });
  const { notSelectable } = useContext(GlobalContext);

  const showFeedback = displayCondition ? "opacity-100" : "opacity-0 -z-10";
  return (
    <form onSubmit={formSubmit} className={`feedbackForm ${showFeedback}`}>
      <FORM_UI submitState={isLoading} serviceResponse={response}>
        {everyInput.map((element) => (
          <CreateInput
            key={element.id}
            {...element}
            onChange={handleChange}
            value={inputData[element.name]}
            {...notSelectable}
          />
        ))}
      </FORM_UI>
    </form>
  );
}
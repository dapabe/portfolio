const FORM_ENDPOINT = import.meta.env.VITE_ENDPOINT_URL;

import useFetch from "@hooks/useFetch";

import form_inputs from "@src/assets/form_inputs.json";

import FORM_UI from "@ui/common/ContactUI/FORM_UI";
import CreateInput from "@ui/common/ContactUI/CreateInput";

const EveryInput = Object.freeze(form_inputs.contact_form);

const serverResponse = {
  ok: {
    class:
      "absolute inset-0 text-sutilBlack tracking-wide bg-white flex justify-center items-center font-bold text-lg",
    text: "¡Gracias, leeré tu mensaje!",
  },
  error: {
    class: "text-red-600 inline max-w-[50%] text-sm",
    text: "Ha habido un error, por favor intentalo de nuevo.",
  },
};

export default function FeedbackForm({ displayCondition }) {
  const { response, error, isLoading, inputData, handleChange, formSubmit } = useFetch({
    POST,
    FORM_ENDPOINT,
    serverResponse,
  });


  const showFeedback = displayCondition ? "opacity-100" : "opacity-0 -z-10";

  return (
    <form onSubmit={formSubmit} className={`feedbackForm ${showFeedback}`}>
      <FORM_UI submitState={isLoading} serviceResponse={}>
        {EveryInput.map((element) => (
          <CreateInput
            key={element.id}
            {...element}
            value={inputData[element.name]}
            onChange={handleChange}
          />
        ))}
      </FORM_UI>
    </form>
  );
}

import { PaperAirplaneIcon } from "@heroicons/react/solid";
import { useState } from "react";

import { submitForm } from "@src/logic/FormContact_logic";

const initialFormState = {
  EMAIL: "",
  MESSAGE: "",
};
const ServiceMessage = {
  class: "",
  text: "",
};

export default function FormContact() {
  const [formState, setFormState] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serviceMsg, setServiceMsg] = useState(ServiceMessage);

  const updateFormControl = (event) => {
    const { id, value } = event.target;
    console.log(id, value);
    const formKey = id;
    const updatedFormState = { ...formState };
    //  Overwriting the existent form state to the new copy of it.
    updatedFormState[formKey] = value;
    setFormState(updatedFormState);
  };

  return (
    <form
      onSubmit={(event) =>
        submitForm(event, setIsSubmitting, setServiceMsg, formState)
      }
      className="m-auto max-w-2xl flex-grow rounded-md bg-vaporBlue  p-4 md:p-6"
    >
      <fieldset className="space-y-2 rounded-md border-2 bg-vaporViolet px-4 pb-4">
        <legend className="flex w-max items-center text-lg tracking-widest">
          <PaperAirplaneIcon className="ml-2 w-8 rotate-45" />
          <h1 className="mr-2">Contactame</h1>
        </legend>

        <label htmlFor="EMAIL">De :</label>
        <input
          id="EMAIL"
          type="email"
          name="email"
          value={formState.EMAIL}
          onChange={updateFormControl}
          // required
          placeholder="nombre@dominio.com"
          className="ml-2 rounded-md text-black placeholder:text-sm placeholder:text-sutilBlack"
        />

        <label htmlFor="MESSAGE" className="block">
          Tu mensaje :
        </label>
        <textarea
          id="MESSAGE"
          name="message"
          value={formState.MESSAGE}
          onChange={updateFormControl}
          rows={3}
          placeholder="Hola Patricio, he visto tu pagina web..."
          className="w-full resize-none rounded-md p-1 text-black placeholder:text-sm placeholder:text-sutilBlack"
        ></textarea>
        <div className="flex">
          <h1 className={`text-sm ${serviceMsg.class}`}>{serviceMsg.text}</h1>
          <button
            type="submit"
            disabled={isSubmitting}
            title="Enviar formulario"
            className="ml-auto h-max rounded-full bg-white px-2 py-1 font-black text-sutilBlack transition-colors active:flex-grow-0 disabled:cursor-not-allowed disabled:bg-sutilBlack disabled:text-white"
          >
            {isSubmitting ? "Enviando.." : "Enviar"}
          </button>
        </div>
      </fieldset>
    </form>
  );
}

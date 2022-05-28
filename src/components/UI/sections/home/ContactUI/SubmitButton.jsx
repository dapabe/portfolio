import { useContext } from "react";
import { ContactDisplay } from "@context/UI";

import { notSelectable } from "@utils/reusable";

import { RefreshIcon } from "@heroicons/react/solid";

export default function SubmitButton({ displayCondition }) {
  const { show } = useContext(ContactDisplay);
  return (
    <button
      type="submit"
      disabled={displayCondition}
      title="Enviar formulario"
      className="my-auto ml-auto h-max min-h-[2rem] min-w-[9ch] rounded-md bg-blue-600 px-3  py-1 text-white transition-colors disabled:cursor-not-allowed"
      {...notSelectable(!show)}
    >
      {displayCondition ? (
        "Enviar"
      ) : (
        <RefreshIcon className="mx-auto h-6 w-6 animate-spinBackwards" />
      )}
    </button>
  );
}

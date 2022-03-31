import { RefreshIcon } from "@heroicons/react/solid";

export default function SubmitButton({ displayCondition }) {
  return (
    <button
      type="submit"
      disabled={displayCondition}
      title="Enviar formulario"
      className="ml-auto h-max min-h-[2rem] min-w-[2.5rem] rounded-full bg-blue-600 px-2 py-1  text-white transition-colors disabled:cursor-not-allowed"
    >
      {displayCondition ? (
        <RefreshIcon className="h-6 w-6 animate-spin" />
      ) : (
        "Enviar"
      )}
    </button>
  );
}

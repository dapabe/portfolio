import { RefreshIcon } from "@heroicons/react/solid";

export default function SubmitButton({ displayCondition }) {
  return (
    <button
      type="submit"
      disabled={displayCondition}
      title="Enviar formulario"
      className="ml-auto h-max min-h-[2rem] min-w-[2.5rem] rounded-full bg-white px-2 py-1 font-black text-sutilBlack transition-colors disabled:cursor-not-allowed disabled:bg-sutilBlack disabled:text-white"
    >
      {displayCondition ? <RefreshIcon className="animate-spin" /> : "Enviar"}
    </button>
  );
}

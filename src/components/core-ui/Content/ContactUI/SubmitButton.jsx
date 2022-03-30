export default function SubmitButton({ displayCondition }) {
  return (
    <button
      type="submit"
      disabled={displayCondition}
      title="Enviar formulario"
      className="ml-auto h-max rounded-full bg-white px-2 py-1 font-black text-sutilBlack transition-colors active:flex-grow-0 disabled:cursor-not-allowed disabled:bg-sutilBlack disabled:text-white"
    >
      {displayCondition ? "Enviando.." : "Enviar"}
    </button>
  );
}

import { ChevronDoubleUpIcon } from "@heroicons/react/solid";
import usePageOffset from "@hooks/usePageOffset";

export default function GoTop() {
  const { isOffset } = usePageOffset();
  return (
    <button
      type="button"
      onClick={() => window.scroll(0, 0)}
      className={`fixed right-4 bottom-2  w-12 rounded-md border-2 border-sutilBlack bg-white transition-opacity hover:scale-105 ${
        isOffset ? "z-[15] opacity-100" : "-z-50 opacity-0"
      }`}
      title="Volver arriba del todo"
    >
      <ChevronDoubleUpIcon className="text-sutilBlack" />
    </button>
  );
}

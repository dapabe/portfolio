import useElementOffset from "@hooks/useElementOffset";
import { ChevronDoubleUpIcon } from "@heroicons/react/solid";

export default function GoTop() {
  // const { isOffset } = useElementOffset({});
  const isOffset = false;
  const hasScrolled = isOffset ? "z-20" : "-z-50 opacity-0";
  return (
    <button
      type="button"
      onClick={() => window.scroll(0, 0)}
      className={`fixed right-4 bottom-2 w-12 rounded-md border-2 border-sutilBlack bg-white transition-opacity hover:scale-105 ${hasScrolled}`}
      title="Volver arriba del todo"
    >
      <ChevronDoubleUpIcon className="text-sutilBlack" />
    </button>
  );
}

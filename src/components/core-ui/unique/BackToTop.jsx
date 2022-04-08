import { ChevronDoubleUpIcon } from "@heroicons/react/solid";
import usePageOffset from "@hooks/usePageOffset";

export default function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scroll(0, 0)}
      className={`fixed right-4 bottom-2  w-12 rounded-md bg-white  transition-opacity hover:scale-105 ${
        usePageOffset() ? "z-[15] opacity-100" : "-z-50 opacity-0"
      }`}
      title="Volver arriba"
    >
      <ChevronDoubleUpIcon fill="#334155" />
    </button>
  );
}

import { useContext } from "react";
import { GlobalContext } from "@context/GlobalState";
import useElementOffset from "@hooks/useElementOffset";
import { ChevronDoubleUpIcon } from "@heroicons/react/solid";

export default function GoTop() {
  const { isMenuOpen } = useContext(GlobalContext);
  const { isOffset } = useElementOffset();

  const hasScrolled = isOffset && !isMenuOpen ? "z-20" : "-z-50 opacity-0";
  return (
    <a
      href="#main"
      className={`fixed right-4 bottom-2 w-12 rounded-md border-2 border-sutilBlack bg-white transition-opacity hover:scale-105 ${hasScrolled}`}
      title="Volver arriba del todo"
    >
      <ChevronDoubleUpIcon className="text-sutilBlack" />
    </a>
  );
}

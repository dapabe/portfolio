import { useContext } from "react";
import { GlobalContext } from "@context/GlobalState";
import useElementOffset from "@hooks/useElementOffset";
import { ChevronDoubleUpIcon } from "@heroicons/react/solid";

export default function GoTop() {
  const { isMenuOpen } = useContext(GlobalContext);
  const { isOffset } = useElementOffset();

  const hasScrolled = isOffset && !isMenuOpen && true;
  return (
    hasScrolled && (
      <a
        href="#main"
        className="fixed right-4 bottom-2 z-20 w-12 rounded-md border-2 border-sutilBlack bg-white text-sutilBlack transition-[opacity_transform] hover:scale-105"
        title="Volver arriba del todo"
      >
        <ChevronDoubleUpIcon />
      </a>
    )
  );
}

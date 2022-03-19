import { ChevronDoubleUpIcon } from "@heroicons/react/solid";
import useScrollTop from "../../hooks/useScrollTop";

export default function BackToTop() {
  return (
    <a
      href="#main"
      className={`fixed right-4 bottom-2  w-12 rounded-md bg-white  transition-opacity ${
        useScrollTop() ? "z-[15] opacity-100" : "-z-50 opacity-0"
      }`}
      title="Volver arriba"
    >
      <ChevronDoubleUpIcon fill="#334155" className="hover:scale-105" />
    </a>
  );
}

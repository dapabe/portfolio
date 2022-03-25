import { ChevronDoubleUpIcon } from "@heroicons/react/solid";
import usePageScrolled from "@hooks/usePageScrolled";

export default function BackToTop() {
  return (
    <a
      href="#main"
      className={`fixed right-4 bottom-2  w-12 rounded-md bg-white  transition-opacity hover:scale-105 ${
        usePageScrolled() ? "z-[15] opacity-100" : "-z-50 opacity-0"
      }`}
      title="Volver arriba"
    >
      <ChevronDoubleUpIcon fill="#334155" />
    </a>
  );
}

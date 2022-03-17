import useOnModal from "../../hooks/useOnModal";
import SocialLinks from "./SocialLinks";

export default function MenuModal({ initialState, children }) {
  const isOpen = initialState
    ? "z-20 delay-500 opacity-100"
    : "-z-50 opacity-0 -translate-y-full";
  useOnModal(initialState);
  return (
    <section
      className={`fixed inset-0 flex sm:px-24 ${
        !initialState ? "-z-50" : "z-20"
      }`}
    >
      {children}
      <div className={`${isOpen} menuContent`}>
        <nav className="text-xl">
          <ul className="flex flex-col gap-4">
            <li>Inicio</li>
            <li>Acerca</li>
            <li>Proyectos</li>
          </ul>
        </nav>
        <div className="flex flex-row sm:hidden">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}

import useStopScroll from "../../hooks/useStopScroll";
import SocialLinks from "./SocialLinks";

export default function MenuModal({ initialState, children }) {
  const isOpen = initialState
    ? "z-20 delay-500 opacity-100"
    : "-z-50 opacity-0 -translate-y-full";
  useStopScroll(initialState);
  return (
    <section className={`menu-container ${!initialState ? "-z-50" : "z-20"}`}>
      {children}
      <div className={`menu ${isOpen}`}>
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

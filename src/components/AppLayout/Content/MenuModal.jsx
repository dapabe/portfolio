import useStopScroll from "@hooks/useStopScroll";
import Backdrop from "./Backdrop";
import SocialLinks from "./SocialLinks";

export default function MenuModal({ initialState, onClick, ...props }) {
  const isOpen = initialState
    ? "z-20 delay-500 opacity-100"
    : "-z-50 opacity-0 -translate-y-[200%]";
  useStopScroll(initialState);
  return (
    <section
      className={`menuContainer ${!initialState ? "-z-50" : "z-20"}`}
      {...props}
    >
      {initialState && <Backdrop onClick={onClick} />}
      <nav className={`menu ${isOpen}`}>
        <ul className="flex w-max flex-col gap-y-4 self-center ">
          <li>Inicio</li>
          <li>Acerca</li>
          <li>Proyectos</li>
        </ul>
        <div className="flex justify-evenly sm:flex-col sm:justify-end sm:space-y-4">
          <SocialLinks />
        </div>
      </nav>
    </section>
  );
}

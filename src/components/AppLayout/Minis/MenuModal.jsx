import useOnModal from "../../hooks/useOnModal";

export default function MenuModal({ initialState, children }) {
  // sm:peer-hover:translate-x-[calc(-100vw+180px)]
  const offScreen = "-z-50 -translate-y-full";
  const onScreen = "z-20 delay-500";
  const isOpen = !initialState ? offScreen : onScreen;
  // useOnModal(initialState);
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
      </div>
    </section>
  );
}

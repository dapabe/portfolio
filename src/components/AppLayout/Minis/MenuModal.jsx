export default function MenuModal({ initialState, children }) {
  // sm:peer-hover:translate-x-[calc(-100vw+180px)]
  const offScreen = "-z-50  -translate-y-full";
  const onScreen = "z-10 delay-500";
  const isOpen = !initialState ? offScreen : onScreen;
  return (
    <section
      className={`fixed inset-0 flex px-5 sm:pr-0 md:px-24 ${
        !initialState ? "-z-50" : "z-10"
      }`}
    >
      {children}
      <div
        className={`${isOpen} flex h-2/3 min-w-[5rem] max-w-sm flex-grow
            items-end justify-center rounded-b-full bg-orange-500
            px-2 pb-24 transition-transform mxsm:mx-auto`}
      >
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

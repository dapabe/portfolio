export default function SkipNav() {
  return (
    <div className="top-0 left-28 z-30 -translate-y-full rounded-b-3xl border-2 border-sutilBlack border-t-transparent bg-champagnePink px-3 py-1 text-sutilBlack outline-none transition-transform focus-within:translate-y-0">
      {/* <p>
        Presiona la tecla{" "}
        <kbd className="rounded bg-sutilBlack px-2 text-white">M</kbd> para
        abrir el menú cuando quieras.
      </p> */}
      <a href="#main" className="font-bold">
        &#8594; Ir al contenido principal
      </a>
    </div>
  );
}

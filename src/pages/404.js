export default function E404() {
  return (
    <section className="noMaxWidth flex items-center justify-center bg-vaporViolet ">
      <p className="text-center">
        <span className="text-8xl">404</span>
        <br />
        <span>
          ¿Estas seguro que esta es <br /> una dirección correcta?
        </span>
        <br />
        <a
          href="/"
          className="btn-inOut mt-40 text-red-500 after:top-full after:bg-red-500"
        >
          Volver al inicio
        </a>
      </p>
    </section>
  );
}

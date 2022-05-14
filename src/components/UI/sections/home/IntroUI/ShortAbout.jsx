import CustomLink from "@ui/react-router/CustomLink";
export default function ShortAbout() {
  return (
    <section className="space-y-3">
      <h2 className="sectionTitle">UN POCO DE MÍ</h2>
      <p className="indent-3">
        Manejo mayor parte de mi tiempo programando y, por otro lado, hago
        caminatas, leo artículos o contenido nuevo que pueda implementar a mi
        repertorio; el conocer nueva información nunca es en vano.
      </p>
      <CustomLink
        to="/about"
        className="relative ml-auto block w-max text-sm tracking-widest text-white before:absolute before:-bottom-1 before:-left-2 before:-z-10 before:h-7 before:w-48 before:-skew-x-12 before:rounded-md before:bg-sutilBlack before:transition-transform before:ease-in before:hover:scale-y-125"
        onClick={() => setTimeout(() => window.scroll(0, 0), 200)}
        aria-labelledby="Ir a mi biografía"
        title="Ir a mi biografía"
      >
        Leer más a detalle &#10140;
      </CustomLink>
    </section>
  );
}

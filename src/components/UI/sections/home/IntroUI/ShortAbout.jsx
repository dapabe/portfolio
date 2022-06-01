import CustomLink from "@ui/reusable/CustomLink";
export default function ShortAbout() {
  return (
    <section className="space-y-3 rounded-md border bg-champagnePink p-4 text-sutilBlack">
      <h2 className="sectionTitle">UN POCO DE MÍ</h2>
      <p className="indent-3">
        Manejo mayor parte de mi tiempo programando, por otro lado, leo
        artículos o contenido nuevo que pueda agregar e implementar a mis
        proyectos.
      </p>
      <CustomLink
        href="/about"
        className="ml-auto block w-max -skew-x-12 bg-sutilBlack py-1 px-2 text-sm tracking-widest text-white  transition-transform ease-in hover:translate-x-2"
        aria-labelledby="Ir a mi biografía"
        title="Ir a mi biografía"
      >
        Leer más a detalle &#10140;
      </CustomLink>
    </section>
  );
}

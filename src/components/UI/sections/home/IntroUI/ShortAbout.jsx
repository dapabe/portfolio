import CustomLink from "@ui/react-router/CustomLink";
export default function ShortAbout() {
  return (
    <section className="space-y-3">
      <h2 className="sectionTitle">UN POCO DE MÍ</h2>
      <p className="indent-3">
        Manejo mayor parte de mi tiempo programando y, por otro lado, hago
        caminatas, leo artículos o contenido nuevo que pueda implementar a mi
        repertorio así expandiendo mi conocimiento.
        <br />
      </p>
      <CustomLink
        to="/about"
        className="relative ml-auto block w-max text-sm text-champagnePink decoration-sutilBlack underline-offset-4 transition-[color] before:absolute before:-bottom-1 before:-left-2 before:-z-10 before:h-7 before:w-40 before:-skew-x-12 before:rounded-md before:bg-sutilBlack before:transition-[background-color] hover:text-current hover:underline before:hover:bg-transparent"
        onClick={() => setTimeout(() => window.scroll(0, 0), 200)}
      >
        Leer más a detalle
      </CustomLink>
    </section>
  );
}

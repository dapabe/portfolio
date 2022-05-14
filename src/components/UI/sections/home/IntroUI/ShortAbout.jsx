import CustomLink from "@ui/react-router/CustomLink";
export default function ShortAbout() {
  return (
    <div>
      <h2 className="sectionTitle">UN POCO DE MÍ</h2>
      <p className="indent-3">
        Manejo mayor parte de mi tiempo programando y por otro lado hago
        caminatas, leo articulos o contenido nuevo que pueda implementar a mi
        repertorio.
        <br />
      </p>
      <div className="flex flex-col items-end text-sm">
        <CustomLink
          to="/about"
          className="text-sm underline-offset-2 hover:underline"
          onClick={() => setTimeout(() => window.scroll(0, 0), 200)}
        >
          Leer más a detalle &rarr;
        </CustomLink>
      </div>
    </div>
  );
}

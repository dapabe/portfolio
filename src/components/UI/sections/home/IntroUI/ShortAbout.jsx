import CustomLink from "@ui/react-router/CustomLink";
export default function ShortAbout() {
  return (
    <div>
      <h2 className="sectionTitle">UN POCO DE MÍ</h2>
      <p className="indent-3">
        Manejo mi tiempo en mayor parte programando y en mi tiempo libre hago
        caminatas o leo contenido nuevo que pueda implementar a mi repertorio.
        <br />
        Amo la música{" "}
        <abbr title="Hip Hop y Jazz, entre otros géneros musicales">
          Lo - Fi
        </abbr>{" "}
        y la complemento con Rock-Alternativo para largas sesiones escribiendo
        código.
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

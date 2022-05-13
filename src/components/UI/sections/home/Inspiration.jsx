import SVGWave2 from "@ui/reusable/decorations/SVGWave2";
import AllQuotes from "./InspirationUI/AllQuotes";

export default function SectionInspire() {
  return (
    <section className="inspirationSection noSpace noMaxWidth">
      <SVGWave2 fill="fill-vaporViolet" />
      <h1 className="sectionTitle text-center">Inspiraciones</h1>
      <AllQuotes />
      <p className="mx-auto max-w-sm rounded-md p-1 text-center">
        Con la correcta forma de pensar tienes las bases para un camino bien
        pavimentado, con ese camino guiaras a otros.
      </p>
      <SVGWave2 position="rotate-0" fill="fill-sutilBlack" />
    </section>
  );
}

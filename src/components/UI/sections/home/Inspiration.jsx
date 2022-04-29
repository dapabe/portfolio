import data from "@src/assets/data.json";
import { QuoteCard } from "@ui/common/exports";
import SVGWave2 from "@ui/common/decorations/SVGWave2";

const INSPIRATIONS = data.inspirations;
const LI_Inspirations = () => {
  return INSPIRATIONS.map((person) => (
    <li key={person.nickname} className="inline-flex self-center">
      <QuoteCard {...person} />
    </li>
  ));
};

export default function SectionInspire() {
  return (
    <section className="inspirationSection noSpace noMaxWidth">
      <SVGWave2 />
      <h1 className="sectionTitle text-center">Inspiraciones</h1>
      <ul className="flex flex-col gap-y-6 ">
        <LI_Inspirations />
      </ul>
      <p className="mx-auto max-w-sm rounded-md p-1 text-center">
        Con la correcta forma de pensar tienes las bases para un camino bien
        pavimentado, con ese camino guiaras a otros.
      </p>
      <SVGWave2 position="rotate-0" fill="fill-sutilBlack" />
    </section>
  );
}

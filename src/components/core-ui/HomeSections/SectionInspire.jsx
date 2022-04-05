import data from "@src/assets/data.json";
import { QuoteCard } from "../common/exports";

const INSPIRATIONS = Object.freeze(data.inspirations);

export default function SectionInspire() {
  return (
    <section className="inspirationSection">
      <h1 className="sectionTitle text-center">Inspiraciones</h1>
      <ul className="flex flex-col gap-y-6 ">
        {INSPIRATIONS.map((person) => (
          <li key={person.nickname} className="inline-flex self-center">
            <QuoteCard {...person} />
          </li>
        ))}
      </ul>
      <p className="mx-auto max-w-sm rounded-md bg-sutilBlack p-1 text-center">
        Con la correcta forma de pensar tienes las bases para un camino bien
        pavimentado, con ese camino guiaras a otros.
      </p>
    </section>
  );
}

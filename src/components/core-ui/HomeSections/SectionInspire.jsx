import data from "@src/assets/data.json";
import { QuoteCard } from "../common/exports";

const INSPIRATIONS = Object.freeze(data.inspirations);

export default function SectionInspire() {
  return (
    <section className="inspirationSection">
      <h1 className="sectionTitle text-center">Inspiraciones</h1>
      <ul className="flex flex-wrap justify-around gap-4">
        {INSPIRATIONS.map((person) => (
          <li key={person.nickname} className="inline-flex">
            <QuoteCard {...person} />
          </li>
        ))}
      </ul>
      <p className="mx-auto max-w-sm">
        Con la correcta forma de pensar tienes las bases para un camino bien
        pavimentado que te guiara al final..
      </p>
    </section>
  );
}

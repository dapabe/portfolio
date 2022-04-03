import data from "@src/assets/data.json";
import { QuoteCard } from "../common/exports";

const INSPIRATIONS = Object.freeze(data.inspirations);

export default function SectionInspire() {
  return (
    <section>
      <h1 className="uppsercase">Inspiraciones</h1>
      <ul className="flex flex-wrap justify-evenly">
        {INSPIRATIONS.map((person) => (
          <li key={person.nickname} className="inline-flex">
            <QuoteCard {...person} />
          </li>
        ))}
      </ul>
      <p>
        Con la correcta forma de pensar tienes las bases para un camino bien
        hecho y ello te acompaña hasta el final.
      </p>
    </section>
  );
}

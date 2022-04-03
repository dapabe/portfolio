import data from "@src/assets/data.json";
import { QuoteCard } from "../common/exports";

const INSPIRATIONS = Object.freeze(data.inspirations);

export default function SectionInspire() {
  return (
    <section>
      <h1 className="uppsercase">Inspiraciones</h1>
      <ul>
        {INSPIRATIONS.map((person) => (
          <li key={person.nickname}>
            <QuoteCard {...person} />
          </li>
        ))}
      </ul>
    </section>
  );
}

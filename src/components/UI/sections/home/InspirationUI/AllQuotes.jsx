import { QuoteData } from "@context/states";
import data from "@src/assets/data.json";
import QuoteCard from "./QuoteCard";

const inspirations = data.inspirations;

export default function AllQuotes() {
  return (
    <ul className="mx-auto flex flex-col gap-y-4 px-4">
      <LI_Inspirations />
    </ul>
  );
}
const LI_Inspirations = () => {
  return inspirations.map(({ ...props }) => (
    <li key={props.nickname} className="inline-flex self-center">
      <QuoteData.Provider value={{ ...props }}>
        <QuoteCard {...props} />
      </QuoteData.Provider>
    </li>
  ));
};

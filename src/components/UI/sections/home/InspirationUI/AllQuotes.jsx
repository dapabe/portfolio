import { QuoteData } from "@context/UI";
import data from "@src/assets/data.json";
import QuoteCard from "./QuoteCard";

const inspirations = data.inspirations;

const LI_Inspirations = () => {
  return inspirations.map(({ nickname, ...props }) => (
    <li key={nickname} className="inline-flex self-center">
      <QuoteData.Provider value={{ ...props }}>
        <QuoteCard {...props} />
      </QuoteData.Provider>
    </li>
  ));
};
function AllQuotes() {
  return (
    <ul className="flex flex-col gap-y-6 ">
      <LI_Inspirations />
    </ul>
  );
}

export default AllQuotes;

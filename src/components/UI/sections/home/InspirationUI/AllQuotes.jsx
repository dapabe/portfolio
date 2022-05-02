import { QuoteData } from "@context/UI";
import data from "@src/assets/data.json";
import QuoteCard from "./QuoteCard";

const inspirations = data.inspirations;

const LI_Inspirations = () => {
  return inspirations.map(({ ...props }) => (
    <li key={props.nickname} className="inline-flex self-center">
      <QuoteData.Provider value={{ ...props }}>
        <QuoteCard {...props} />
      </QuoteData.Provider>
    </li>
  ));
};
function AllQuotes() {
  return (
    <ul className="mx-auto flex max-w-full flex-wrap justify-center gap-4 ">
      <LI_Inspirations />
    </ul>
  );
}

export default AllQuotes;

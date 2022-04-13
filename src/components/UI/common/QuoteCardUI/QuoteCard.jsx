import { createContext } from "react";
import Quote from "./Quote";
import QuoteImage from "./QuoteImage";
import { CustomImage } from "@ui/common/extras";

export const QuoteData = createContext({});

export function QuoteCard({ cite, quote, webpage, nickname, image }) {
  // const targetRef = createRef();
  // const [isVisible] = useObserver(targetRef, {
  //   rootMargin: "0px 0px -500px 0px",
  //   threshold: 0,
  // });
  return (
    <blockquote className="quoteCard" cite={cite}>
      <QuoteData.Provider value={{ cite, quote, webpage, nickname, image }}>
        <QuoteImage />
        <Quote />
      </QuoteData.Provider>
      <CustomImage
        src="/images/quote.png"
        alt="Simbolo de cita textual"
        className="mr-2 max-w-[4rem]"
      />
    </blockquote>
  );
}

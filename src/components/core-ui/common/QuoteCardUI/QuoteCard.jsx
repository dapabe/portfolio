import { createRef } from "react";
import useObserver from "@hooks/useObserver";
import Quote from "./Quote";
import QuoteImage from "./QuoteImage";

export default function QuoteCard({ cite, quote, webpage, nickname, image }) {
  const targetRef = createRef();
  const [isVisible] = useObserver(targetRef, {
    rootMargin: "300px",
  });

  return (
    <blockquote
      className="relative flex min-h-[132px] max-w-md rounded-full bg-white py-3 text-sutilBlack sm:rounded-l-none sm:pr-14 mxsm:rounded-md mxsm:pl-10 mxsm:pr-14"
      cite={cite}
    >
      <QuoteImage
        ref={targetRef}
        displayCondition={isVisible}
        nickname={nickname}
        image={image}
      />
      <Quote cite={cite} quote={quote} webpage={webpage} nickname={nickname} />
      <img
        src="/images/quote.png"
        alt="Simbolo de cita textual"
        className="absolute -right-2 top-0 h-14 w-14"
      />
    </blockquote>
  );
}

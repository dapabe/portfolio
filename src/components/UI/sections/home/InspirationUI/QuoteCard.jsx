import { CustomImage } from "@ui/common/extras";
import Quote from "./Quote";
import QuoteImage from "./QuoteImage";

export default function QuoteCard({ cite, image, nickname }) {
  // const targetRef = createRef();
  // const [isVisible] = useObserver(targetRef, {
  //   rootMargin: "0px 0px -500px 0px",
  //   threshold: 0,
  // });
  return (
    <blockquote className="quoteCard" cite={cite}>
      <QuoteImage>
        <CustomImage
          src={`/images/inspirations/${image}`}
          alt={nickname}
          className="my-auto object-cover"
        />
      </QuoteImage>
      <Quote />
      <CustomImage
        src="/images/quote.png"
        alt="Simbolo de cita textual"
        className="mr-2 max-w-[4rem]"
      />
    </blockquote>
  );
}

import { forwardRef, useContext } from "react";
import { QuoteData } from "./QuoteCard";

const QuoteImage = forwardRef(({ displayCondition }, ref) => {
  const { nickname, image } = useContext(QuoteData);
  return (
    <div
      ref={ref}
      className="absolute top-0 h-full min-w-[132px] -translate-x-1/2 overflow-hidden rounded-full bg-white mxsm:hidden"
    >
      {displayCondition && (
        <img
          src={`/images/inspirations/${image}` || "/images/placeholder.jpg"}
          alt={nickname}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
});
export default QuoteImage;

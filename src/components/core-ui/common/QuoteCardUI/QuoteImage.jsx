import { forwardRef } from "react";

const QuoteImage = forwardRef(({ displayCondition, nickname, image }, ref) => {
  console.log(ref);
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

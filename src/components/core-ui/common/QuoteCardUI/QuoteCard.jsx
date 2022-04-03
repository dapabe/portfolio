import { ExternalLinkIcon } from "@heroicons/react/solid";
import React from "react";

const QuoteCard =React.forwardRef({ref,
  cite,
  image,
  image_desc,
  nickname,
  quote,
}) =>  (
    <blockquote
      className="relative flex min-h-[132px] max-w-md rounded-full bg-white py-3 text-sutilBlack sm:rounded-l-none sm:pr-14 mxsm:rounded-md mxsm:pl-10 mxsm:pr-14"
      cite={cite}
    >
      <img
      ref={ref}
        src={`/images/inspirations/${image}` || "/images/placeholder.jpg"}
        alt={image_desc}
        className="absolute top-0 h-full min-w-[132px] -translate-x-1/2 overflow-hidden rounded-full object-cover mxsm:hidden "
      />
      <div className="sm:ml-24">
        <p>
          <q>{quote}</q>
          <a
            href={cite}
            target="_blank"
            rel="noopener noreferrer"
            title="Ir al origen de esta cita."
          >
            <ExternalLinkIcon className="inline-block w-5" />
          </a>
        </p>
        <h1 className="mt-3 text-right font-semibold">{nickname}</h1>
      </div>
      <img
        src="/images/quote.png"
        alt="Simbolo de cita textual"
        className="absolute -right-2 top-0 h-14 w-14"
      />
    </blockquote>
  );

export default QuoteCard
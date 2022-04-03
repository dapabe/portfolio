import { ExternalLinkIcon } from "@heroicons/react/solid";
import React from "react";

export default function QuoteCard({
  cite,
  image,
  image_desc,
  nickname,
  quote,
}) {
  return (
    <blockquote
      className="relative flex min-h-[132px] max-w-md rounded-full bg-white py-3 text-sutilBlack sm:rounded-l-none sm:pr-16 mxsm:rounded-md mxsm:px-14"
      cite={cite}
    >
      <img
        src={`/images/inspirations/${image}`}
        alt={image_desc}
        className="absolute top-0 h-full min-w-[132px] -translate-x-1/2 overflow-hidden rounded-full object-cover mxsm:hidden "
      />
      <div className="sm:ml-20">
        <p className="text-sm">
          <q>{quote}</q>
          <a href={cite} target="_blank" rel="noopener noreferrer">
            <ExternalLinkIcon className="inline-block w-4" />
          </a>
        </p>
        <h1 className="mt-3 text-right font-semibold">{nickname}</h1>
      </div>
      <img
        src="/images/quote.png"
        alt="Simbolo de cita textual"
        className="absolute right-0 top-0 h-14 w-14"
      />
    </blockquote>
  );
}

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
      className="relative flex min-h-[132px] max-w-sm rounded-r-full rounded-l-md bg-white py-3 text-sutilBlack"
      cite={cite}
    >
      <img
        src={`/images/inspirations/${image}`}
        alt={image_desc}
        className="absolute top-0 h-full  max-w-[132px] -translate-x-1/2 overflow-hidden rounded-full object-cover "
      />
      <div className="mx-auto max-w-[180px]">
        <p>{quote}</p>
        <h1 className="mt-3 text-right">{nickname}</h1>
      </div>
      <img
        src="/images/quote.png"
        alt="Simbolo de cita textual"
        className="absolute right-0 top-0 h-14 w-14"
      />
    </blockquote>
  );
}

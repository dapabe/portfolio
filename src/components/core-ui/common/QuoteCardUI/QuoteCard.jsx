import { ExternalLinkIcon } from "@heroicons/react/solid";
import React from "react";
import useIntersectionObserver from "@react-hook/intersection-observer";

export default function QuoteCard({
  cite,
  image,
  image_desc,
  nickname,
  webpage,
  quote,
}) {
  const targetRef = React.createRef(null);
  const { isIntersecting } = useIntersectionObserver(targetRef, {
    rootMargin: "0px 0px 400px 0px",
  });
  console.count(isIntersecting);
  return (
    <blockquote
      className="relative flex min-h-[132px] max-w-md rounded-full bg-white py-3 text-sutilBlack sm:rounded-l-none sm:pr-14 mxsm:rounded-md mxsm:pl-10 mxsm:pr-14"
      cite={cite}
    >
      <img
        ref={targetRef}
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
        <a
          href={webpage}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 ml-auto block w-max font-semibold"
        >
          {nickname}
        </a>
      </div>
      <img
        src="/images/quote.png"
        alt="Simbolo de cita textual"
        className="absolute -right-2 top-0 h-14 w-14"
      />
    </blockquote>
  );
}

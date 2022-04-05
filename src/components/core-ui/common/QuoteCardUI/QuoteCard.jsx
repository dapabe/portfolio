import { ExternalLinkIcon } from "@heroicons/react/solid";
import { createRef } from "react";
import useObserver from "@hooks/useObserver";

export default function QuoteCard({ cite, image, nickname, webpage, quote }) {
  const targetRef = createRef(null);

  const [isVisible] = useObserver(targetRef, {
    rootMargin: "300px",
  });

  return (
    <blockquote
      className="relative flex min-h-[132px] max-w-md rounded-full bg-white py-3 text-sutilBlack sm:rounded-l-none sm:pr-14 mxsm:rounded-md mxsm:pl-10 mxsm:pr-14"
      cite={cite}
    >
      <div
        ref={targetRef}
        className="absolute top-0 h-full min-w-[132px] -translate-x-1/2 overflow-hidden rounded-full bg-white mxsm:hidden"
      >
        {isVisible && (
          <img
            src={`/images/inspirations/${image}` || "/images/placeholder.jpg"}
            alt={nickname}
            className="h-full w-full object-cover"
          />
        )}
      </div>

      <div className="sm:ml-24">
        <p>
          <q>
            <a
              href={cite}
              target="_blank"
              rel="noopener noreferrer"
              title="Ir al origen de esta cita."
            >
              {quote}
            </a>
          </q>
          <a
            href={cite}
            target="_blank"
            rel="noopener noreferrer"
            title="Ir al origen de esta cita."
          >
            <ExternalLinkIcon className="ml-1 inline-block w-5" />
          </a>
        </p>
        <h1>
          <a
            href={webpage}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-3 ml-auto block w-max font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-sutilBlack after:transition-transform after:ease-in after:hover:origin-left after:hover:scale-x-100"
          >
            {nickname}
          </a>
        </h1>
      </div>
      <img
        src="/images/quote.png"
        alt="Simbolo de cita textual"
        className="absolute -right-2 top-0 h-14 w-14"
      />
    </blockquote>
  );
}

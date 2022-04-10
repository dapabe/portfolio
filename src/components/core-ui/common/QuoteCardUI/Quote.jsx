import { ExternalLinkIcon } from "@heroicons/react/solid";
import { useContext } from "react";
import { QuoteData } from "./QuoteCard";

export default function Quote() {
  const { cite, quote, webpage, nickname } = useContext(QuoteData);
  return (
    <section className="my-3 ml-14 md:my-auto md:ml-0">
      <p>
        <q>
          <a
            href={cite}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ir al origen de esta cita."
            title="Ir al origen de esta cita."
          >
            {quote}
          </a>
        </q>
        <a
          href={cite}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ir al origen de esta cita."
          title="Ir al origen de esta cita."
        >
          <ExternalLinkIcon className="ml-1 inline-block w-5" />
        </a>
      </p>
      <h1>
        <a
          href={webpage}
          aria-label="Ir a su pagina web."
          title="Ir a su pagina web."
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-1 ml-auto block w-max font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-sutilBlack after:transition-transform after:ease-in after:hover:origin-left after:hover:scale-x-100"
        >
          {nickname}
        </a>
      </h1>
    </section>
  );
}

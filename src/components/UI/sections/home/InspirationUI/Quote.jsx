import { useContext } from "react";
import { QuoteData } from "@context/UI";
import { ExternalLinkIcon } from "@heroicons/react/solid";

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
      <h2>
        <a
          href={webpage}
          aria-label="Ir a su pagina web."
          title="Ir a su pagina web."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-inOut mt-auto ml-auto block font-semibold after:bg-sutilBlack"
        >
          {nickname}
        </a>
      </h2>
    </section>
  );
}

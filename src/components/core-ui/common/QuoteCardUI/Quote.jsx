import { ExternalLinkIcon } from "@heroicons/react/solid";

export default function Quote({ cite, quote, webpage, nickname }) {
  return (
    <section className="sm:ml-24">
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
    </section>
  );
}

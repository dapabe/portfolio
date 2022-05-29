import { useContext } from "react";
import { QuoteData } from "@context/UI";
import { ExtLink } from "@utils/text";

export default function Quote() {
  const { cite, quote, webpage, nickname } = useContext(QuoteData);
  return (
    <section className="my-3 ml-8 flex flex-col justify-center sm:my-auto sm:ml-0">
      <p>
        <ExtLink
          href={cite}
          aria-label="Ir al origen de esta cita."
          title="Ir al origen de esta cita."
        >
          <q>{quote}</q>{" "}
        </ExtLink>
      </p>
      <strong className="mt-2 text-right">
        <a
          href={webpage}
          aria-label="Ir a su página web."
          title="Ir a su página web."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-inOut after:top-full after:bg-sutilBlack"
        >
          {nickname}
        </a>
      </strong>
    </section>
  );
}

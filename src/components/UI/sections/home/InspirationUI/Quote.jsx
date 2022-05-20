import { useContext } from "react";
import { QuoteData } from "@context/UI";
import { ExtLink } from "@utils/text";

export default function Quote() {
  const { cite, quote, webpage, nickname } = useContext(QuoteData);
  return (
    <section className="my-3 ml-14 md:my-auto md:ml-0">
      <p>
        <ExtLink
          href={cite}
          aria-label="Ir al origen de esta cita."
          title="Ir al origen de esta cita."
        >
          <q>{quote}</q>{" "}
        </ExtLink>
      </p>
      <b>
        <a
          href={webpage}
          aria-label="Ir a su página web."
          title="Ir a su página web."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-inOut mt-auto ml-auto block after:bg-sutilBlack"
        >
          {nickname}
        </a>
      </b>
    </section>
  );
}

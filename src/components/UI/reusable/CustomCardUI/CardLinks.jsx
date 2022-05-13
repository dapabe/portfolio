import { LinkIcon } from "@heroicons/react/solid";

export default function CardLinks({ links }) {
  return (
    <div>
      <h1>Links :</h1>
      <ol>
        <li>
          <a
            href={links.repository}
            target="_blank"
            rel="noopener noreferrer"
            title="Ir al repositorio de Github"
            aria-label="Link hacia le repositorio"
          >
            <img
              src={`/icons/social/${"Github-mono.svg" || "Github.svg"}`}
              alt="Logo de Github"
              className="projectCard_anchor-logo"
            />
          </a>
        </li>
        <li>
          <a
            href={links.webpage}
            target="_blank"
            rel="noopener noreferrer"
            title="Ir a la pagina web"
            aria-label="Link hacia la pagina web"
          >
            <LinkIcon className="projectCard_anchor-logo" />
          </a>
        </li>
      </ol>
    </div>
  );
}

import { useContext } from "react";
import { ProjectData } from "@context/UI";
import { LinkIcon } from "@heroicons/react/solid";

const linkStyle =
  "m-auto h-8 w-8 transition-[scale] hover:scale-105 m-auto h-8 w-8 transition-[scale] hover:scale-105";

export default function ToolsAndLinks() {
  const { made_with, links } = useContext(ProjectData);
  return (
    <ul className="mt-auto flex justify-between text-center uppercase">
      <li>
        <h2 className="mb-2 text-sm tracking-widest">Hecho con</h2>
        <ul className="flex gap-3">
          {made_with.map((tool) => (
            <li key={tool}>
              <img
                src={`icons/logos/${tool}`}
                className="m-auto h-8 w-8"
                alt={tool}
              />
            </li>
          ))}
        </ul>
      </li>
      <li>
        <h2 className="mb-2 text-sm tracking-widest">Links</h2>
        <ol className="flex gap-3">
          <li>
            <a
              href={links.repository}
              target="_blank"
              rel="noopener noreferrer"
              title="Ir al repositorio de Github"
              aria-label="Link hacia le repositorio"
            >
              <img
                src={`icons/social/${"Github-mono.svg" || "Github.svg"}`}
                alt="Logo de Github"
                className={linkStyle}
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
              <LinkIcon className={linkStyle} />
            </a>
          </li>
        </ol>
      </li>
    </ul>
  );
}

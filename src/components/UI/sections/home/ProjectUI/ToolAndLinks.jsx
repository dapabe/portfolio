import { useContext } from "react";
import { ProjectData } from "@context/UI";
import { LinkIcon } from "@heroicons/react/solid";

export default function ToolsAndLinks() {
  const { made_with, links } = useContext(ProjectData);
  return (
    <section className="mt-auto flex justify-between">
      <div>
        <h3 className="mb-2">Hecho con</h3>
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
      </div>
      <div>
        <h3 className="mb-2">Links</h3>
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
                className="m-auto h-8 w-8 transition-[scale] hover:scale-105"
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
              <LinkIcon className="m-auto h-8 w-8 transition-[scale] hover:scale-105" />
            </a>
          </li>
        </ol>
      </div>
    </section>
  );
}

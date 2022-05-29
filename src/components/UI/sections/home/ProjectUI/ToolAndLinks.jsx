import { useContext } from "react";
import { ProjectData } from "@context/UI";
import { LinkIcon } from "@heroicons/react/solid";
import Image from "next/image";

const linkStyle = "m-auto transition-[scale] hover:scale-105";

export default function ToolsAndLinks() {
  const { made_with, links } = useContext(ProjectData);
  return (
    <ul className="mb-auto flex justify-between text-center uppercase">
      <li>
        <h2 className="mb-2 text-sm tracking-widest">Hecho con</h2>
        <ul className="flex gap-3">
          {made_with.map((tool) => (
            <li key={tool}>
              <Image
                src={`/icons/logos/${tool}`}
                width={32}
                height={32}
                className="m-auto"
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
              <Image
                src={`/icons/social/${"Github-mono.svg" || "Github.svg"}`}
                width={32}
                height={32}
                className={linkStyle}
                alt="Logo de Github"
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
              <LinkIcon className={linkStyle + " h-8 w-8"} />
            </a>
          </li>
        </ol>
      </li>
    </ul>
  );
}

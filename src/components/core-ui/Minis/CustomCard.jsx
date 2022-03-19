import { LinkIcon } from "@heroicons/react/solid";
import { LogoGithub } from "../../../assets/images/exports";
export default function CustomCard({
  isMobile = false,
  image,
  alt,
  title,
  description,
  linkRepo,
  linkUrl,
}) {
  return (
    <article className="projectCard">
      {!isMobile ? (
        <figure className="relative min-w-[5rem] bg-red-500">
          <img
            src={`/images/${image}`}
            alt={alt}
            className="max-w-full rounded"
          />
          <figcaption className="absolute bottom-0 w-full bg-slate-600 indent-2 text-sm">
            {title}
          </figcaption>
        </figure>
      ) : (
        <h1 className="text-xl underline underline-offset-4">{title}</h1>
      )}
      {description && <p className="projectCard_desc">{description}</p>}
      <ol className="projectCard_links">
        <li>
          <a
            href={linkRepo}
            target="_blank"
            rel="noopener noreferrer"
            title="Ir al repositorio de Github"
          >
            <LogoGithub
              fill="currentColor"
              aria-label="Link hacia le repositorio"
              className="projectCard_anchor-logo"
            />
          </a>
        </li>
        <li>
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Ir a la pagina web"
          >
            <LinkIcon
              aria-label="Link hacia la pagina web"
              className="projectCard_anchor-logo"
            />
          </a>
        </li>
      </ol>
    </article>
  );
}

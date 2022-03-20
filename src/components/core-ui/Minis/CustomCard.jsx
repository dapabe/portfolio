import { LinkIcon } from "@heroicons/react/solid";
import { LinkGithub } from "../../../assets/icons/exports";
export default function CustomCard({
  isMobile = false,
  image,
  alt,
  title,
  description,
  linkRepo,
  linkUrl,
  children,
  ...props
}) {
  return (
    <article className="projectCard" {...props}>
      {!isMobile ? (
        <figure className="relative min-w-[5rem] rounded-md bg-vaporViolet p-2 lg:rounded-none">
          <img src={`/images/${image}`} alt={alt} className="max-w-full" />
          <figcaption className="text-md bg-slate-700 py-1">{title}</figcaption>
        </figure>
      ) : (
        <h1 className="text-xl underline underline-offset-4">{title}</h1>
      )}
      {description && <p className="projectCard_desc">{description}</p>}
      <section>
        <ol>
          {children &&
            children.map((logo, index) => <li key={index}>{logo}</li>)}
        </ol>
        <ol>
          <li>
            <a
              href={linkRepo}
              target="_blank"
              rel="noopener noreferrer"
              title="Ir al repositorio de Github"
              aria-label="Link hacia le repositorio"
            >
              <LinkGithub
                fill="currentColor"
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
              aria-label="Link hacia la pagina web"
            >
              <LinkIcon className="projectCard_anchor-logo" />
            </a>
          </li>
        </ol>
      </section>
    </article>
  );
}

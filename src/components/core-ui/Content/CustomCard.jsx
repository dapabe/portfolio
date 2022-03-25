import { LinkIcon } from "@heroicons/react/solid";
import useWindowSize from "@hooks/useWindowSize";
export default function CustomCard({
  isMobile = false,
  image,
  alt,
  title,
  description,
  linkRepo,
  linkUrl,
  tools,
  ...props
}) {
  const { width } = useWindowSize();
  const displayExtras = {
    ...(width >= 1024 && { ...props }),
  }; // why does this work, how
  return (
    <article className="projectCard" {...displayExtras}>
      {width <= 640 ? (
        <h1 className="text-xl underline underline-offset-4">{title}</h1>
      ) : (
        <figure className="relative min-w-[5rem] rounded-md bg-vaporViolet p-2 lg:rounded-none">
          <img
            src={`/images/${image}`}
            alt="Miniatura de la pagina web"
            className="max-w-full"
          />
          <figcaption className="text-md bg-slate-700 py-1">{title}</figcaption>
        </figure>
      )}
      {width <= 1024 && <p className="projectCard_desc">{description}</p>}
      <section>
        {tools != 0 && (
          <div>
            <h1>Hecho con :</h1>
            <ol>
              {tools.map((tool) => (
                <li key={tool}>
                  <img src={`/icons/logos/${tool}`} alt={tool} />
                </li>
              ))}
            </ol>
          </div>
        )}
        <div>
          <h1>Links :</h1>
          <ol>
            <li>
              <a
                href={linkRepo}
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
        </div>
      </section>
    </article>
  );
}

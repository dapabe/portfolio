export default function CustomCard({
  image,
  alt,
  title,
  description,
  linkRepo,
  linkUrl,
}) {
  return (
    <article className="cardBg flex max-h-max min-h-[15rem] min-w-[16rem] max-w-xs flex-col rounded text-center transition-transform hover:scale-105 ">
      <figure className="relative min-w-[5rem] bg-red-500">
        <img src={image} alt={alt} className="max-w-full rounded" />
        <figcaption className="absolute bottom-0  w-full bg-slate-600 indent-2 text-sm">
          {title}
        </figcaption>
      </figure>
      <p className="mt-2 rounded bg-[#2c2c54] py-1.5 text-sm">{description}</p>
      <ol className="flex justify-center">
        <li>
          <a
            href={linkRepo}
            target="_blank"
            rel="noopener noreferrer"
            title="Ir al repositorio de Github"
          >
            <img src="" alt="" />
          </a>
        </li>
        <li>
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Ir a la pagina web"
          >
            <img src="" alt="" />
          </a>
        </li>
      </ol>
    </article>
  );
}

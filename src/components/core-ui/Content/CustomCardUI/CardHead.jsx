export default function CardHead({ displayCondition, image, title }) {
  return (
    <>
      {displayCondition ? (
        <h1 className="text-xl underline underline-offset-4">{title}</h1>
      ) : (
        <figure className="relative min-w-[5rem] rounded-md bg-vaporViolet p-2 lg:rounded-none">
          {image ? (
            <img
              src={`/images/${image}`}
              alt="Miniatura de la pagina web"
              className="max-w-full"
            />
          ) : (
            <h2 className="my-2 text-sm">Error al cargar imagen</h2>
          )}
          <figcaption className="text-md bg-slate-700 py-1">{title}</figcaption>
        </figure>
      )}
    </>
  );
}

export default function TechList({ list }) {
  return (
    <ul className="mx-auto flex max-w-xl flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
      {list.map(({ name, file, img_desc }) => (
        <li key={name}>
          <figure>
            <img
              src={`icons/logos/${file}`}
              alt={img_desc}
              className="mx-auto h-14 w-20"
              loading="lazy"
            />
            <figcaption className="mx-auto mt-1 block w-max">{name}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}

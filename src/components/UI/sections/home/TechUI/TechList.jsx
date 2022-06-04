import Image from "next/image";
export default function TechList({ data }) {
  return (
    <ul className="mx-auto flex max-w-xl flex-wrap justify-center gap-x-6 gap-y-4 text-sm">
      {data.map(({ name, file, img_desc }) => (
        <li key={name}>
          <figure>
            <Image
              src={`/images/icons/logos/${file}`}
              alt={img_desc}
              width={80}
              height={80}
              className="mx-auto"
            />
            <figcaption className="mt-1 text-center">
              <small>{name}</small>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}

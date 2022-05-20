import { arrayCompareAndRetrieve } from "@utils/reusable";
export default function TechList({ data }) {
  const display_info = arrayCompareAndRetrieve({
    aToLook: data.tech_data,
    aToSearch: data.icons_data,
    kToSearch: "name",
  });
  return (
    <ul className="mx-auto flex max-w-xl flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
      {display_info.map(({ name, file, img_desc }) => (
        <li key={name}>
          <figure>
            <img
              src={`icons/logos/${file}`}
              alt={img_desc}
              className="mx-auto h-20 w-20"
              loading="lazy"
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

import Image from "next/image";
import { arrayCompareAndRetrieve } from "@utils/reusable";
export default function TechList({ data }) {
  const display_info = arrayCompareAndRetrieve({
    aToLook: data.tech_data,
    aToSearch: data.icons_data,
    kToSearch: "name",
  });
  return (
    <ul className="mx-auto flex max-w-xl flex-wrap justify-center gap-x-6 gap-y-4 text-sm">
      {display_info.map(({ name, file, img_desc }) => (
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

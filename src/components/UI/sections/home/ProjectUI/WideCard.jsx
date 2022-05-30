import Image from "next/image";
import ToolsAndLinks from "./ToolAndLinks";

export default function WideCard({ image, title, description }) {
  return (
    <article>
      <figure className="group relative flex h-max min-w-[250px] max-w-sm flex-wrap overflow-hidden rounded-lg border-2 border-sutilBlack bg-sutilBlack font-Raleway text-white md:max-w-2xl md:flex-nowrap">
        <Image
          src={`/images/works/${image}` || "/images/placeholder.jpg"}
          alt={description}
          width={400}
          height={240}
          className="min-w-min object-cover"
        />
        <figcaption className="my-auto flex h-full flex-col p-4 lg:absolute lg:bottom-0 lg:translate-y-full lg:justify-between lg:bg-sutilBlack/90 lg:transition-transform lg:group-hover:translate-y-0">
          <section className="mt-auto md:max-w-none">
            <h2>{title}</h2>
            <p className="p-2 text-sm text-gray-400 lg:text-current">
              {description}
            </p>
          </section>
          <ToolsAndLinks />
        </figcaption>
      </figure>
    </article>
  );
}

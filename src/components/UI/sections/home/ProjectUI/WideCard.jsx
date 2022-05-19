import ToolsAndLinks from "./ToolAndLinks";

export default function WideCard({ image, title, description }) {
  return (
    <article>
      <figure className="group relative flex h-max min-w-[250px] max-w-min flex-wrap overflow-hidden rounded-lg border-2 border-sutilBlack bg-sutilBlack text-white md:max-h-min md:max-w-2xl md:flex-nowrap">
        <img
          src={`/images/works/${image || "placeholder.jpg"}`}
          alt={description}
          loading="lazy"
          className="h-full max-h-[15rem] max-w-sm object-cover"
        />
        <div className="absolute bottom-0 left-1/2 hidden lg:block" />
        <figcaption className="my-auto h-full p-4 md:flex-col lg:absolute lg:bottom-0 lg:translate-y-full lg:justify-between lg:bg-sutilBlack/90 lg:transition-transform lg:group-hover:translate-y-0">
          <section className="md:max-w-none">
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

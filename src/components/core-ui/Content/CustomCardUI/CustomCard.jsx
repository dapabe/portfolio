import useWindowSize from "@hooks/useWindowSize";
import CardHead from "./CardHead";
import CardLinks from "./CardLinks";
import CardTools from "./CardTools";

export default function CustomCard({
  image,
  alt,
  title,
  description,
  links,
  tools,
  ...props
}) {
  const { width } = useWindowSize();
  const displayExtras = {
    ...(width >= 1024 && { ...props }),
  }; // why does this work, how
  const breakpoint = {
    sm: width <= 640,
    lg: width <= 1024,
  };
  return (
    <article className="projectCard" {...displayExtras}>
      <CardHead displayCondition={breakpoint.sm} title={title} image={image} />

      {breakpoint.lg && <p className="projectCard_desc">{description}</p>}
      <section>
        {tools != 0 && <CardTools toolArray={tools} />}
        {Object.keys(links).length !== 0 && <CardLinks links={links} />}
      </section>
    </article>
  );
}

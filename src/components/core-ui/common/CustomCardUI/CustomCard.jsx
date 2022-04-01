import useWindowSize from "@hooks/useWindowSize";
import CardHead from "./CardHead";
import CardLinks from "./CardLinks";
import CardTools from "./CardTools";

export default function CustomCard({
  image,
  title,
  description,
  links,
  tools,
  ...props
}) {
  const { width } = useWindowSize();
  const displayConditions = {
    otherAttr: {
      ...(width >= 1024 && { ...props }),
    },
    breakpoint: {
      sm: width <= 640,
      lg: width <= 1024,
    },
    hasTools: tools != 0,
    hasLinks: Object.keys(links).length !== 0,
  };
  return (
    <article className="projectCard" {...displayConditions.otherAttr}>
      <CardHead
        displayCondition={displayConditions.breakpoint.sm}
        title={title}
        image={image}
      />
      {displayConditions.breakpoint.lg && (
        <p className="projectCard_desc">{description}</p>
      )}
      <section>
        {displayConditions.hasTools && <CardTools toolArray={tools} />}
        {displayConditions.hasLinks && <CardLinks links={links} />}
      </section>
    </article>
  );
}

import CustomCard from "../../Content/CustomCard";

export default function ProjectCards({ data, displayCondition, mouseEvent }) {
  function ConditionalRenders(item) {
    if (displayCondition <= 640) {
      return (
        <CustomCard
          isMobile={true}
          key={item.link}
          title={item.title}
          description={item.short_desc}
          linkRepo={item.repo}
          linkUrl={item.link}
          tools={item.made_with}
        />
      );
    } else if (displayCondition < 1024) {
      return (
        <CustomCard
          key={item.link}
          image={item.image}
          title={item.title}
          description={item.short_desc}
          linkRepo={item.repo}
          linkUrl={item.link}
          tools={item.made_with}
        />
      );
    } else {
      return (
        <CustomCard
          key={item.link}
          image={item.image}
          title={item.title}
          linkRepo={item.repo}
          linkUrl={item.link}
          tools={item.made_with}
          onMouseEnter={() => mouseEvent(item.long_desc)}
          onMouseLeave={() => mouseEvent(this)}
        />
      );
    }
  }
  return data.map((item) => (
    <li key={item.link} className="flex h-full items-center">
      {ConditionalRenders(item)}
    </li>
  ));
}

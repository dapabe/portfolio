import data from "@assets/data.json";
import CustomCard from "../../Content/CustomCard";

export default function ProjectCards({
  displayCondtion,
  mouseEnter,
  mouseLeave,
}) {
  return data.projects_data.map((item) => {
    if (displayCondtion <= 640) {
      return (
        <CustomCard
          isMobile={true}
          key={item.link}
          title={item.title}
          alt={item.alt}
          description={item.short_desc}
          linkRepo={item.repo}
          linkUrl={item.link}
          tools={item.made_with}
        />
      );
    } else if (displayCondtion < 1024) {
      return (
        <CustomCard
          key={item.link}
          image={item.image}
          title={item.title}
          alt={item.alt}
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
          alt={item.alt}
          linkRepo={item.repo}
          linkUrl={item.link}
          tools={item.made_with}
          onMouseEnter={() => mouseEnter(item.long_desc)}
          onMouseLeave={() => mouseLeave(this)}
        />
      );
    }
  });
}

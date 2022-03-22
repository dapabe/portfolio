import data from "@assets/data.json";
import CustomCard from "../../Content/CustomCard";

export default function ProjectCards({ displayCondition, mouseEvent }) {
  const projectData = data.projects_data;
  projectData.length = 1;
  return projectData.map((item) => {
    if (displayCondition <= 640) {
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
    } else if (displayCondition < 1024) {
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
          onMouseEnter={() => mouseEvent(item.long_desc)}
          onMouseLeave={() => mouseEvent(this)}
        />
      );
    }
  });
}

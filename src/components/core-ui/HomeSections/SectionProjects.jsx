// import placeholder from "/images/placeholder.jpg";
import ProjectsObjects from "../../../assets/ProjectsObjects";

import { CustomCard } from "../Minis/exports";

export default function SectionProjects() {
  const mappedProjects = () => {
    return ProjectsObjects.map((val) => {
      return (
        <CustomCard
          key={val.link}
          // image={val.image}
          alt={val.alt}
          title={val.title}
          description={val.description}
          linkRepo={val.repo}
          linkUrl={val.link}
        />
      );
    });
  };
  return <section className="mosaicBg h-[90vh]">{mappedProjects()}</section>;
}

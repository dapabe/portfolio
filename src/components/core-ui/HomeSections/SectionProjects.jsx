import data from "../../../assets/data.json";
import { CustomCard } from "../Minis/exports";

export default function SectionProjects() {
  return (
    <section className="projectSection">
      {data.projects_data.map((item) => (
        <CustomCard
          key={item.link}
          title={item.title}
          image={item.image}
          alt={item.alt}
          description={item.description}
          linkRepo={item.repo}
          linkUrl={item.link}
        />
      ))}
    </section>
  );
}

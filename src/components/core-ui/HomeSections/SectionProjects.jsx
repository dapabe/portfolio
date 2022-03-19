import data from "../../../assets/data.json";
import useWindowSize from "../../hooks/useWindowSize";
import { CustomCard } from "../Minis/exports";
import HoverInfo from "../Minis/HoverInfo";

export default function SectionProjects() {
  const { width } = useWindowSize();
  data.projects_data.length = 1;
  return (
    <section className="projectSection">
      <div className="flex gap-7 mxsm:flex-col">
        {data.projects_data.map((item) => {
          if (width <= 640) {
            return (
              <CustomCard
                isMobile={true}
                key={item.link}
                title={item.title}
                alt={item.alt}
                description={item.short_desc}
                linkRepo={item.repo}
                linkUrl={item.link}
              />
            );
          } else if (width <= 1000) {
            return (
              <CustomCard
                key={item.link}
                title={item.title}
                image={item.image}
                alt={item.alt}
                description={item.short_desc}
                linkRepo={item.repo}
                linkUrl={item.link}
              />
            );
          } else {
            return (
              <CustomCard
                key={item.link}
                title={item.title}
                image={item.image}
                alt={item.alt}
                linkRepo={item.repo}
                linkUrl={item.link}
              />
            );
          }
        })}
      </div>
      {width >= 1000 && <HoverInfo />}
    </section>
  );
}

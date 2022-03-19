import data from "../../../assets/data.json";
import useWindowSize from "../../hooks/useWindowSize";
import { CustomCard } from "../Minis/exports";

export default function SectionProjects() {
  const { width } = useWindowSize();
  return (
    <section className="projectSection">
      <div>
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
      {width >= 1000 && (
        <div className="max-h-full max-w-xs flex-grow self-center bg-vaporBlue p-3">
          <h1 className="bg-vaporViolet text-center">Title</h1>
          <p className="bg-vaporViolet">{/* {item.long_desc} */}</p>
        </div>
      )}
    </section>
  );
}

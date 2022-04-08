import { useState } from "react";
import useWindowSize from "@hooks/useWindowSize";
import data from "@src/assets/data.json";

import { HoverInfo, SliderContainer, CustomCard } from "@ui/common/exports";

const freezedInfo = Object.freeze(data.projects_data);

export default function SectionProjects() {
  const [desktopDesc, setDesktopDesc] = useState("");
  const { width } = useWindowSize();

  return (
    <section className="projectSection noMaxWidth">
      <div className="decorative-1" />
      <h1 className="sectionTitle mb-4 text-center">Proyectos</h1>
      <div className="flex h-full w-full flex-wrap justify-center">
        <SliderContainer>
          {freezedInfo.map((item) => (
            <CustomCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description.short}
              links={item.links}
              tools={item.made_with}
              onMouseEnter={() => setDesktopDesc(item.description.short)}
              onMouseLeave={() => setDesktopDesc(this)}
            />
          ))}
        </SliderContainer>
        {width >= 1024 && (
          <HoverInfo>
            {desktopDesc
              ? desktopDesc
              : "Pasa el cursor encima de algun proyecto para ver su información"}
          </HoverInfo>
        )}
      </div>
    </section>
  );
}

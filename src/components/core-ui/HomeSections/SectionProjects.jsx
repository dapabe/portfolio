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
      <h1 className="sectionTitle mb-4 text-center">Proyectos</h1>
      <div className="flex h-full w-full flex-wrap justify-center">
        <SliderContainer>
          {freezedInfo.map(
            ({ id, image, title, description, links, made_with }) => (
              <CustomCard
                key={id}
                image={image}
                title={title}
                description={description.short}
                links={links}
                tools={made_with}
                onMouseEnter={() => setDesktopDesc(description.short)}
                onMouseLeave={() => setDesktopDesc(this)}
              />
            )
          )}
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

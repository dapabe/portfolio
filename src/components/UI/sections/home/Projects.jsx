import { useState } from "react";
import data from "@src/assets/data.json";

import { HoverInfo, SliderContainer, CustomCard } from "@ui/common/exports";
import SVGWave1 from "@ui/common/decorations/SVGWave1";

const freezedInfo = data.projects_data;

export default function SectionProjects() {
  const [desktopDesc, setDesktopDesc] = useState("");

  return (
    <section className="projectSection noMaxWidth noSpace">
      <SVGWave1 />
      <h2 className="sectionTitle mb-4 text-center">Proyectos</h2>
      <div className="flex h-full flex-wrap justify-center">
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
        <HoverInfo>
          {desktopDesc
            ? desktopDesc
            : "Pasa el cursor encima de algun proyecto para ver su información"}
        </HoverInfo>
      </div>
    </section>
  );
}

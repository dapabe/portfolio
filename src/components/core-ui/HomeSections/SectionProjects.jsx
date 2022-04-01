import { useState } from "react";
import useWindowSize from "@hooks/useWindowSize";
import data from "@src/assets/data.json";

import { HoverInfo, Arrows } from "@ui/common/exports";
import ProjectCards from "@ui/unique/ProjectCards";

const freezedInfo = Object.freeze(data.projects_data);

const ProjectINFO = {
  data: freezedInfo,
  length: freezedInfo.length,
  amount: freezedInfo.length - 1,
};

export default function SectionProjects() {
  const [desktopDesc, setDesktopDesc] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const { width } = useWindowSize();

  const btnPrev = () =>
    setActiveIndex(activeIndex < 1 ? ProjectINFO.amount : activeIndex - 1);
  const btnNext = () =>
    setActiveIndex(activeIndex === ProjectINFO.amount ? 0 : activeIndex + 1);

  return (
    <section className="projectSection noMaxWidth">
      <div className="decorative-1" />
      <div className="projectSlider-Container">
        <Arrows
          prevSlide={btnPrev}
          nextSlide={btnNext}
          {...(ProjectINFO.length <= 1 && { disabled: true })}
        >
          <ul className="projectSlider">
            <ProjectCards
              displayedData={ProjectINFO.data}
              indexState={activeIndex}
              mouseEvent={setDesktopDesc}
            />
          </ul>
        </Arrows>
      </div>
      {width >= 1024 && (
        <HoverInfo>
          {desktopDesc
            ? desktopDesc
            : "Pasa el cursor encima de algun proyecto para ver su información"}
        </HoverInfo>
      )}
    </section>
  );
}

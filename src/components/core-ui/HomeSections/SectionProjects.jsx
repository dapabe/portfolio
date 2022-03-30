import { useState } from "react";
import useWindowSize from "@hooks/useWindowSize";
import data from "@src/assets/data.json";

import { HoverInfo, Arrows } from "@ui/Content/exports";
import ProjectCards from "./Content/ProjectCards";

const ProjectINFO = {
  data: Object.freeze(data.projects_data),
  length: data.projects_data.length,
  amount: data.projects_data.length - 1,
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
              displayData={ProjectINFO.data}
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

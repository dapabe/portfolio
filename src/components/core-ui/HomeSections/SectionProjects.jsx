import { useState } from "react";
import useWindowSize from "@hooks/useWindowSize";

import { HoverInfo, Slider } from "../Content/exports";
import Arrows from "../Content/SliderUI/Arrows";
import ProjectCards from "./Content/ProjectCards";
import data from "@assets/data.json";

export default function SectionProjects() {
  const [desktopDesc, setDesktopDesc] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const { width } = useWindowSize();

  const ProjectINFO = {
    data: data.projects_data,
    amount: data.projects_data.length,
  };

  const btnPrev = () =>
    setActiveIndex(activeIndex < 1 ? ProjectINFO.amount : activeIndex - 1);
  const btnNext = () =>
    setActiveIndex(activeIndex === ProjectINFO.amount ? 0 : activeIndex + 1);

  return (
    <section className="projectSection">
      <div className="projectSlider-Container">
        <Arrows prevSlide={btnPrev} nextSlide={btnNext}>
          <ul className="projectSlider">
            <ProjectCards
              data={ProjectINFO.data}
              displayCondition={width}
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

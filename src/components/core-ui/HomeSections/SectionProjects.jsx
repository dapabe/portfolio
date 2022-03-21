import { useState } from "react";
import useWindowSize from "@hooks/useWindowSize";

import { HoverInfo, Slider } from "../Content/exports";
import ProjectCards from "./Content/ProjectCards";
export default function SectionProjects() {
  const [desktopDesc, setDesktopDesc] = useState();
  const { width } = useWindowSize();

  return (
    <section className="projectSection">
      <Slider>
        <ProjectCards
          displayCondition={width}
          mouseEnter={setDesktopDesc}
          mouseLeave={setDesktopDesc}
        />
      </Slider>

      {width >= 1024 && (
        <HoverInfo>
          {desktopDesc
            ? desktopDesc
            : "Pasa el mouse encima de algun proyecto para ver su información"}
        </HoverInfo>
      )}
    </section>
  );
}

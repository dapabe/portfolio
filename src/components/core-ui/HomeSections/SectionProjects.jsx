import React from "react";
import data from "../../../assets/data.json";
import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { CustomCard, HoverInfo, Slider } from "../Minis/exports";
import { ReactSVG } from "react-svg";
export default function SectionProjects() {
  const [desktopDesc, setDesktopDesc] = useState();
  const { width } = useWindowSize();
  // data.projects_data.length = 2;

  return (
    <section className="projectSection">
      {/* <Slider /> */}

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
              tools={item.made_with}
            />
          );
        } else if (width < 1024) {
          return (
            <CustomCard
              key={item.link}
              image={item.image}
              title={item.title}
              alt={item.alt}
              description={item.short_desc}
              linkRepo={item.repo}
              linkUrl={item.link}
              tools={item.made_with}
            />
          );
        } else {
          return (
            <CustomCard
              key={item.link}
              image={item.image}
              title={item.title}
              alt={item.alt}
              linkRepo={item.repo}
              linkUrl={item.link}
              tools={item.made_with}
              onMouseEnter={() => setDesktopDesc(item.long_desc)}
              onMouseLeave={() => setDesktopDesc(this)}
            />
          );
        }
      })}
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

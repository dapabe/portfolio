import React from "react";
import data from "../../../assets/data.json";
import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { CustomCard, HoverInfo, Slider } from "../Minis/exports";
import { ReactSVG } from "react-svg";
export default function SectionProjects() {
  const [desktopDesc, setDesktopDesc] = useState();
  const { width } = useWindowSize();
  const everyProject = data.projects_data.map((elem) => elem.made_with);
  data.projects_data.length = 1;
  // console.log(everyProject);
  // displayLogos(everyProject);
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
            ></CustomCard>
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
            >
              <ReactSVG src="/HTML5.svg" className="max-h-[30px] w-10" />
            </CustomCard>
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
              onMouseEnter={() => setDesktopDesc(item.long_desc)}
              onMouseLeave={() => setDesktopDesc(this)}
            >
              {/* <img src="/HTML5.svg" alt="a" className="h-10 w-10" /> */}
            </CustomCard>
          );
        }
      })}
      {width >= 900 && (
        <HoverInfo>
          {desktopDesc
            ? desktopDesc
            : "Pasa el mouse encima de algun proyecto para ver su información"}
        </HoverInfo>
      )}
    </section>
  );
}

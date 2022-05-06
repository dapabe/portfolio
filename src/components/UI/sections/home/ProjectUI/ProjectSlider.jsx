import WideCard from "./WideCard";

import { ProjectData } from "@context/UI";
import data from "@src/assets/data.json";

const info = data.projects_data;
info.length = 1;

export default function ProjectSlider() {
  return (
    <div className="flex h-full flex-wrap justify-center gap-10">
      {/* <SliderContainer> */}
      {info.map(({ id, image, title, description, links, made_with }) => (
        <ProjectData.Provider value={{ links, made_with }} key={id}>
          <WideCard
            image={image}
            title={title}
            description={description.short}
          />
        </ProjectData.Provider>
      ))}
      {/* </SliderContainer> */}
    </div>
  );
}

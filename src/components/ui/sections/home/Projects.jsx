
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { ProjectData } from "@context/states";
import projects_data from "@src/assets/static/projects.json";

import Slider from "@src/components/shared/slider/Slider";
import WideCard from "./ProjectUI/WideCard";

export default function SectionProjects() {
  const { locale } = useRouter();
  const t = useTranslations("/.section_projects");

  return (
    <section className="projectSection noMaxWidth">
      <h2 className="sectionTitle mb-4 text-center">
        {t("heading")}
      </h2>
      {/* <div className="flex h-full flex-wrap justify-center gap-10">
        {projects_data.map(
          ({ id, image, title, description, links, made_with }) => (
            <ProjectData.Provider value={{ links, made_with }} key={id}>
              <WideCard
                image={image}
                title={title}
                description={description[locale].short}
              />
            </ProjectData.Provider>
          )
        )}
      </div> */}
      <div className="min-h-[24rem] px-10">
        <Slider></Slider>
      </div>
    </section>
  );
}

import SVGWave1 from "@ui/reusable/decorations/SVGWave1";
// import TechCarousel from "./TechUI/TechCarousel";

import data from "@src/assets/data.json";
import TechList from "./TechUI/TechList";

const tech_data = data.tech_data;
const tech_icons = data.icons_data;

export default function SectionTechs() {
  return (
    <section className="techSection noMaxWidth noSpace">
      <SVGWave1 />
      <h2 className="sectionTitle mb-8 sm:indent-[5rem] mxsm:text-center">
        TECNOLOGÍAS
      </h2>
      {/* <TechCarousel list={[tech_data, tech_icons]} /> */}
      <TechList list={tech_data} />
      <h3 className="ml-auto mr-16 mt-8 text-center sm:max-w-md sm:text-left mxsm:mx-auto mxsm:max-w-xs">
        - Siempre aprendiendo tecnologías solicitadas en el mercado.
      </h3>
      <SVGWave1 position="bottom" fill="fill-vaporBlue" />
    </section>
  );
}

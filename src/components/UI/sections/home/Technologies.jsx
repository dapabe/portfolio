import SVGWave1 from "@ui/reusable/decorations/SVGWave1";
import TechCarousel from "./TechUI/TechCarousel";

import data from "@src/assets/data.json";
import TechList from "./TechUI/TechList";

const tech_data = data.tech_data;
const tech_icons = data.icons_data;

export default function SectionTechs() {
  return (
    <section className="techSection noMaxWidth noSpace">
      <SVGWave1 />
      <h2 className="sectionTitle mb-8 ml-16 mxsm:ml-0 mxsm:text-center">
        TECNOLOGÍAS
      </h2>
      {/* <TechCarousel list={[tech_data, tech_icons]} /> */}
      <TechList list={[tech_data, tech_icons]} />
      <h3 className="ml-auto mr-16 mt-8 w-max max-w-xs mxsm:mx-auto">
        - Siempre al tanto de las tecnologías solicitadas en el mercado.
      </h3>
      <SVGWave1 position="bottom" fill="fill-vaporBlue" />
    </section>
  );
}

import SVGWave1 from "@ui/reusable/decorations/SVGWave1";

import { arrayCompareAndRetrieve } from "@utils/reusable";

import data from "@src/assets/data.json";
// import TechCarousel from "./TechUI/TechCarousel";
import TechList from "./TechUI/TechList";

const ICONS_DATA = arrayCompareAndRetrieve({
  aToLook: data.tech_data,
  aToSearch: data.icons_data,
  kToSearch: "name",
});
export default function SectionTechs() {
  return (
    <section className="techSection noMaxWidth noPadding">
      <SVGWave1 className="rotate-180" />
      <h2 className="sectionTitle mb-8 ml-16 mxsm:ml-0 mxsm:text-center">
        TECNOLOGÍAS
      </h2>
      {/* <TechCarousel list={ICONS_DATA} /> */}
      <TechList list={ICONS_DATA} />
      <h3 className="ml-auto mr-16 mt-8 w-max max-w-sm mxsm:mx-auto">
        - Siempre informado de las tecnologías más utilizadas del mercado.
      </h3>
      <SVGWave1 fill="fill-vaporBlue" />
    </section>
  );
}

import { useState } from "react";
import useToggle from "@hooks/useToggle";
import { arrayCompareAndRetrieve } from "@utils/reusable";
import SVGWave1 from "@ui/reusable/decorations/SVGWave1";
import { FilmIcon, CollectionIcon } from "@heroicons/react/outline";
import data from "@src/assets/data.json";
import TechCarousel from "./TechUI/TechCarousel";
import TechList from "./TechUI/TechList";

const ICONS_DATA = arrayCompareAndRetrieve({
  aToLook: data.tech_data,
  aToSearch: data.icons_data,
  kToSearch: "name",
});

const AlternateLists = ({ displayCondition }) => {
  return (
    <div className="container mx-auto">
      {displayCondition ? (
        <TechCarousel list={ICONS_DATA} />
      ) : (
        <TechList list={ICONS_DATA} />
      )}
    </div>
  );
};

export default function SectionTechs() {
  const [hasAnim, handleDisplay] = useToggle(true);
  const [pingClicked, setClick] = useState(false);

  const displayPing = pingClicked
    ? "after:bg-transparent"
    : "after:bg-pink-700 after:animate-ping";
  return (
    <section className="techSection noMaxWidth noPadding">
      <SVGWave1 className="rotate-180" />
      <div className="my-container mx-auto my-3 mb-8 flex items-center justify-between">
        <h2 className="sectionTitle w-max">TECNOLOGÍAS</h2>
        <button
          type="button"
          className={`relative w-max rounded-md bg-white p-1 text-sutilBlack after:absolute after:-right-2 after:-top-2 after:h-4 after:w-4 after:rounded-full mxsm:ml-0 mxsm:text-center ${displayPing}`}
          onClick={() => {
            setClick(true);
            handleDisplay();
          }}
          title={
            hasAnim ? "Mostrar una lista de imagenes" : "Mostrar una animación"
          }
        >
          {hasAnim ? (
            <CollectionIcon className="w-6" />
          ) : (
            <FilmIcon className="w-6" />
          )}
        </button>
      </div>
      <AlternateLists displayCondition={hasAnim} />
      <h3 className="ml-auto mr-16 mt-8 w-max max-w-sm mxsm:mx-auto">
        - Siempre informado de las tecnologías más utilizadas del mercado.
      </h3>
      <SVGWave1 fill="fill-vaporBlue" />
    </section>
  );
}

import { useState, useMemo } from "react";
import { CarouselAnimation } from "@context/UI";
import useToggle from "@hooks/useToggle";

import data from "@src/assets/data.json";

import TechCarousel from "./TechUI/TechCarousel";
import TechList from "./TechUI/TechList";

import SVGWave1 from "@ui/reusable/decorations/SVGWave1";
import { FilmIcon, CollectionIcon } from "@heroicons/react/outline";

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
        <ListSwitchButton
          cb={() => setClick(true)}
          cb2={handleDisplay}
          displayPing={displayPing}
          switchCondition={hasAnim}
        />
      </div>
      <AlternateLists displayCondition={hasAnim} />
      <h3 className="ml-auto mr-16 mt-8 w-max max-w-sm mxsm:mx-auto">
        - Siempre informado de las tecnologías más utilizadas del mercado.
      </h3>
      <SVGWave1 fill="fill-vaporBlue" />
    </section>
  );
}

const ListSwitchButton = ({ ...props }) => {
  const { displayPing, switchCondition, cb, cb2 } = props;
  return (
    <button
      type="button"
      className={`analog-shadow-right relative w-max rounded-md bg-white p-1 text-sutilBlack transition-[box-shadow_transform] before:bg-gray-500 after:absolute after:-right-2 after:-top-2 after:h-4 after:w-4 after:rounded-full active:translate-x-1 active:translate-y-1 active:shadow-inner active:shadow-gray-500 mxsm:ml-0 mxsm:text-center ${displayPing}`}
      onClick={() => {
        cb();
        cb2();
      }}
      title={
        switchCondition
          ? "Mostrar una lista de imagenes"
          : "Mostrar una animación"
      }
    >
      {switchCondition ? (
        <CollectionIcon className="w-6" />
      ) : (
        <FilmIcon className="w-6" />
      )}
    </button>
  );
};

const AlternateLists = ({ displayCondition }) => {
  const [isPaused, handlePause] = useToggle(true);
  const [firstWatch, setFirstWatch] = useState(true);

  //  Handle visual effects;
  //    Display play btn icon the first time.
  //    Maintain animation state between re-renders.
  const memoValues = useMemo(
    () => ({ firstWatch, setFirstWatch, isPaused, handlePause }),
    [isPaused]
  );
  return (
    <CarouselAnimation.Provider value={memoValues}>
      <div className="container mx-auto">
        {displayCondition ? (
          <TechCarousel data={data} />
        ) : (
          <TechList data={data} />
        )}
      </div>
    </CarouselAnimation.Provider>
  );
};

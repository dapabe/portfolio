import { useState } from "react";
import useToggle from "@hooks/useToggle";

import ListSwitchButton from "./TechUI/ListSwitchButton";
import AlternateLists from "./TechUI/AlternateLists";

import SVGWave1 from "@ui/reusable/decorations/SVGWave1";

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
          displayPing={displayPing}
          switchCondition={hasAnim}
          cb={() => setClick(true)}
          cb2={handleDisplay}
        />
      </div>

      <AlternateLists displayCondition={hasAnim} />

      <small className="mx-auto mt-8 block max-w-sm text-center sm:ml-auto sm:mr-16 sm:text-left">
        - Siempre informado de las tecnologías más utilizadas del mercado.
      </small>
      <SVGWave1 fill="fill-vaporBlue" />
    </section>
  );
}

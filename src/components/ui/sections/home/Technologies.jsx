import { useState } from "react";
import useToggle from "@hooks/useToggle";

import ListSwitchButton from "./TechUI/ListSwitchButton";
import AlternateLists from "./TechUI/AlternateLists";

import SVGWave1 from "@shared/decorations/SVGWave1";
import { useTranslations } from "next-intl";

export default function SectionTechs() {
  const [hasAnim, handleDisplay] = useToggle(true);
  const [pingClicked, setClick] = useState(false);
  const t = useTranslations("/.section_techs");

  const displayPing = pingClicked
    ? "after:bg-transparent"
    : "after:bg-pink-700 after:animate-ping";

  return (
    <section className="noMaxWidth noPadding bg-gradient-to-t from-vaporBlue to-vaporViolet">
      <SVGWave1 className="rotate-180" />
      <div className="my-container mx-auto my-3 mb-8 flex items-center justify-between">
        <h2 className="sectionTitle w-max">{t("heading")}</h2>
        <ListSwitchButton
          displayPing={displayPing}
          switchCondition={hasAnim}
          cb={() => setClick(true)}
          cb2={handleDisplay}
        />
      </div>
      <AlternateLists displayCondition={hasAnim} />
      <small className="mx-auto mt-8 block max-w-sm text-center sm:ml-auto sm:mr-16 sm:text-left">
        - {t("note")}
      </small>
      <SVGWave1 fill="fill-vaporBlue" />
    </section>
  );
}

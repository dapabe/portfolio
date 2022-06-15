import { useState, useMemo } from "react";
import { CarouselAnimation } from "@context/states";
import useToggle from "@hooks/useToggle";

import data from "@src/assets/data.json";

import TechCarousel from "./TechCarousel";
import TechList from "./TechList";

import { arrayCompareAndRetrieve } from "@utils/reusable";

//  Handle visual effects;
//    Display play btn icon the first time.
//    Maintain animation state between re-renders.
//  TechCarousel has to have a duped array
//  for a loop animation.

export default function AlternateLists({ displayCondition }) {
  const [isPaused, handlePause] = useToggle(true);
  const [firstWatch, setFirstWatch] = useState(true);

  const displaying_icons = arrayCompareAndRetrieve({
    aToLook: data.tech_data,
    aToSearch: data.icons_data,
    kToSearch: "name",
  });

  const memoValues = useMemo(
    () => ({ firstWatch, setFirstWatch, isPaused, handlePause }),
    [isPaused]
  );
  return (
    <CarouselAnimation.Provider value={memoValues}>
      <div className="container mx-auto">
        {displayCondition ? (
          <TechCarousel data={[...displaying_icons, ...displaying_icons]} />
        ) : (
          <TechList data={displaying_icons} />
        )}
      </div>
    </CarouselAnimation.Provider>
  );
}

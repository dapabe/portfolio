import { createRef } from "react";
import useObserver from "@hooks/useObserver";
import { Carousel } from "@ui/common/exports";

import { arrayCompareAndRetrieve } from "@utils/common";

export default function TechCarousel({ list }) {
  const ICONS_DATA = arrayCompareAndRetrieve({
    aToLook: list[0],
    aToSearch: list[1],
    kToSearch: "name",
  });
  return (
    <Carousel>
      {ICONS_DATA.map(({ file, img_desc }, idx) => (
        <li key={idx}>
          <img
            src={`/icons/logos/${file}`}
            alt={img_desc}
            className="h-20 w-40"
          />
        </li>
      ))}
    </Carousel>
  );
}

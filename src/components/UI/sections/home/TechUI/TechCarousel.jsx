// import { createRef } from "react";
// import useObserver from "@hooks/useObserver";
import { Carousel } from "@ui/reusable/exports";

export default function TechCarousel({ list }) {
  return (
    <Carousel>
      {list.map(({ file, img_desc }, idx) => (
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

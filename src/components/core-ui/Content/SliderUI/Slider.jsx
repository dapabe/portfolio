import { useState } from "react";
import Arrows from "./Arrows";
export default function Slider({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <ul className="projectSlider">
      {children}
      {/* <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      /> */}
    </ul>
  );
}

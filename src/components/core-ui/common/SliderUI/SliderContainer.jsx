import { useState } from "react";
import SlideITEM from "./SlideITEM";
import Arrows from "./Arrows";

export default function SliderContainer({ type, children }) {
  //  Buttons behaviour
  //  =================
  const [activeIndex, setActiveIndex] = useState(0);
  const lengthAmount = children.length - 1;
  const btnPrev = () =>
    setActiveIndex(activeIndex < 1 ? lengthAmount : activeIndex - 1);
  const btnNext = () =>
    setActiveIndex(activeIndex === lengthAmount ? 0 : activeIndex + 1);
  //  =================
  return (
    <div className="projectSlider-Container">
      <Arrows
        prevSlide={btnPrev}
        nextSlide={btnNext}
        {...(children.length <= 1 && { style: { display: "none" } })}
      >
        <ul className="projectSlider">
          <SlideITEM displayCondition={activeIndex}>{children}</SlideITEM>
        </ul>
      </Arrows>
    </div>
  );
}

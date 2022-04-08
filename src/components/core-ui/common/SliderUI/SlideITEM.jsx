import { Children, cloneElement } from "react";

export default function SlideITEM({ displayCondition, children }) {
  return Children.map(children, (child, index) => (
    <li
      className={`${
        index === displayCondition ? "activeSlide" : "inactiveSlide"
      } absolute flex h-full w-full items-center justify-center transition-opacity`}
    >
      {cloneElement(child, { ...child }, null)}
    </li>
  ));
}

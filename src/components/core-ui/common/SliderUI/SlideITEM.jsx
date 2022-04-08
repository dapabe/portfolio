import { Children, cloneElement } from "react";

export default function SlideITEM({ displayCondition, children }) {
  //  [NOTE]  cloneElement - Behaviour
  //  Use {...child.props} otherwise spreading {...child}
  //  will return <Component/> attributes from this "opaque wrapper" EX: $$typeof...
  return Children.map(children, (child, index) => (
    <li
      className={`${
        index === displayCondition ? "activeSlide" : "inactiveSlide"
      } absolute flex h-full w-full items-center justify-center transition-opacity`}
    >
      {cloneElement(child, { ...child.props }, null)}
    </li>
  ));
}

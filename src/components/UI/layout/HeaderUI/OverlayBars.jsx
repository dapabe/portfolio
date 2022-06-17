import { createElement, cloneElement } from "react";
const bars = [
  "h-10 w-full z-30 flex justify-between items-center",
  "w-10 right-0 bottom-0 h-[calc(100%-2.5rem)] translate-x-full md:translate-x-0 flex flex-col items-center justify-center gap-y-6",
  "h-10 right-10 bottom-0 w-[calc(100%-5rem)] translate-y-full md:translate-y-0",
  "w-10 bottom-0 h-[calc(100%-2.5rem)] -translate-x-full md:translate-x-0",
];

export default function OverlayBars({ ...props }) {
  return bars.map((classes, idx) => (
    <div
      key={idx}
      className={`${classes} bg-sutilBlack transition-transform ease-in-out`}
    >
      {placeBindedComponents(props, idx)}
    </div>
  ));
}

/*  [Purpose]   For every property passed onto this component
 *              place it on the same bar position.
 *              If the property is an array; spread its
 *              content in that place, else place it.
 */

const placeBindedComponents = (incomingObject, position) => {
  return Object.values(incomingObject).map((obj, idx) => {
    if (position === idx) return spreadObject(obj, idx);
  });
};

const spreadObject = (value, index) => {
  if (Array.isArray(value)) return value.map(createNode);
  return createNode(value, ++index);
};

const createNode = (node, index) =>
  createElement(node.type, { ...node.props, key: index });

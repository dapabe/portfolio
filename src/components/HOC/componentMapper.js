import { createElement } from "react";
const componentMapper = (array, newProp) =>
  array.map((node) =>
    createElement(node.type, {
      ...node.props,
      props: newProp,
      key: node.type.name,
    })
  );
export default componentMapper;

import { createElement } from "react";

//  I dont remenber what i was doing

const componentMapper = (array, newProp) => {
  const hasProp = () => newProp && { props: newProp() };
  return array.map((node) =>
    createElement(node.type, {
      ...node.props,
      ...hasProp(),
      key: node.type.name,
    })
  );
};
export default componentMapper;

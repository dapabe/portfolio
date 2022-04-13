import { createElement } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function CustomLink({ type, to, children, ...attr }) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  const styling = (type) => {
    switch (type) {
      case "primary":
        return "underline underline-offset-4";

      default:
        return;
    }
  };

  return createElement(
    Link,
    {
      className: match && styling(type),
      to: to,
      ...attr,
    },
    ...children
  );
}

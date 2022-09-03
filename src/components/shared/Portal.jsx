import { createPortal } from "react-dom";

import useMount from "@hooks/useMount";
export default function Portal({ htmlId, children }) {
  const { isMounted } = useMount();

  return isMounted
    ? createPortal(children, document.getElementById(htmlId))
    : null;
}

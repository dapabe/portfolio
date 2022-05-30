import useToggle from "@src/components/hooks/useToggle";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Portal({ children, selector }) {
  const [isMounted, handleMount] = useToggle(false);

  useEffect(() => {
    handleMount();
    return handleMount;
  }, []);

  return isMounted
    ? createPortal(children, document.getElementById(selector))
    : null;
}

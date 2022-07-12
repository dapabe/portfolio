import { useRef } from "react";

export default function useFocus() {
  const ref = useRef(null);
  const setFocus = () => {
    if (ref.current != null) return ref.current.focus();
  }

  return [ref, setFocus];
}

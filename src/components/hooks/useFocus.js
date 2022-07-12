import { useEffect, useRef } from "react";

export default function useFocus() {
  const ref = useRef(null);
  const setFocus = () => {
    if (ref.current != null) ref.current.focus();
  }
  // useEffect(() => {
  //   setFocus()
  // }, [ref.current])

  return [ref, setFocus];
}

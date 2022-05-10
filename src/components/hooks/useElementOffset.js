import { useEffect, useState } from "react";
import useToggle from "@hooks/useToggle";

export default function useElementOffset(options = {}) {
  const { element = globalThis, pixels = globalThis.innerHeight } = options;

  const [isOffset, handleOffset] = useToggle(false);
  const [currOffset, setNumericOffset] = useState(0);

  const checkTopScroll = () => {
    const elementOffset =
      element.scrollY ?? element.pageYOffset ?? element.scrollTop;
    setNumericOffset(elementOffset);
    !isOffset && elementOffset >= pixels && handleOffset();
    isOffset && elementOffset <= pixels && handleOffset();
  };

  useEffect(() => {
    element.addEventListener("scroll", checkTopScroll);
    return () => element.removeEventListener("scroll", checkTopScroll);
  }, [isOffset]);

  return { isOffset, currOffset };
}

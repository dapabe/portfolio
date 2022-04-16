import { useState, useEffect } from "react";

export default function usePageOffset(pixels = globalThis.innerHeight) {
  const [isOffset, setOffset] = useState(false);
  const checkTopScroll = () => {
    !isOffset && window.pageYOffset >= pixels && setOffset(true);
    isOffset && window.pageYOffset <= pixels && setOffset(false);
  };
  useEffect(() => {
    globalThis.addEventListener("scroll", checkTopScroll);

    return () => globalThis.removeEventListener("scroll", checkTopScroll);
  }, [isOffset]);

  return { isOffset };
}
